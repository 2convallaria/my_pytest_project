import pytest
from todo import TodoList

@pytest.fixture
def todo_list():
    """每个测试获得一个全新的空待办列表,将每次添加事件隔离开来，便于测试"""
    return TodoList()

def test_add_item(todo_list):
    todo_list.add("写作业")
    assert todo_list.items() == ["写作业"]
    # print(f"1写作业的任务添加：{todo_list.items()}")

def test_add_multiple_items(todo_list):
    todo_list.add("写作业")
    todo_list.add("复习")
    assert todo_list.items() == ["写作业", "复习"]
    
def test_save_to_file_opens_file(mocker, todo_list):
    mock_open = mocker.mock_open()
    todo_list.add('写作业')
    todo_list.add('复习')
    todo_list.add('添加任务1')
    # print(f"1写作业的任务添加：{todo_list.items()}")
    mocker.patch('builtins.open', mock_open)
    todo_list.save_to_file('tasks.txt')
    mock_open.assert_called_once_with('tasks.txt', 'w')
    
    mock_file = mock_open.return_value
    mock_file.write.assert_has_calls([
        mocker.call('写作业'),
        mocker.call('复习'),
        mocker.call('添加任务1'),
    ])
    
#autouse的设置会适应于所有测试，比如在每个文件内都写入特定内容，需要注意的是不能用于返回参数的场景，
# 因为它并不会自动返回参数值，它只能重复某个操作
@pytest.fixture
def temp_file(tmp_path):
    file = tmp_path / "tasks.txt"
    return file
    
def test_load_from_file_with_tasks(temp_file):
    temp_file.write_text("写作业\n复习\n")
    todo_list = TodoList.load_from_file(str(temp_file))
    assert todo_list.items() == ["写作业", "复习"]
    
def test_load_from_file_empty(temp_file):
    temp_file.write_text("")
    todo_list = TodoList.load_from_file(str(temp_file))
    assert todo_list.items() == []
    
def test_load_from_file_blank_lines(temp_file):
    temp_file.write_text("\n\n写作业\n\n复习\n\n")
    todo_list = TodoList.load_from_file(str(temp_file))
    assert todo_list.items() == ["写作业", "复习"]
    
def test_load_from_file_not_found(temp_file):
    todo_list = TodoList.load_from_file(str(temp_file))
    assert todo_list.items() == []
   
# assert_has_calls([mocker.call(''),...])可以同时验证调用和调用的顺序(多个的情况)
# assert_any_call('')可以验证调用，但是只能一个一个验证，每验证一个就要调用一次assert_any_call
# assert_called_once_with可以确保对象只执行了一次
# .call_count可以验证调用的总次数