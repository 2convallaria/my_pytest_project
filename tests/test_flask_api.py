import pytest
from backend.app import app

@pytest.fixture
def clean_client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        # 在每个测试前，清空 todo 列表
        with app.app_context():
            from backend.app import todo
            todo._items.clear()   # 直接清空内部列表
        yield client

def test_get_items_empty(clean_client):
    # """测试初始时 GET /items 返回空列表"""
    response = clean_client.get('/items')
    assert response.status_code == 200
    assert response.json == []

def test_add_item(clean_client):
    # """测试 POST /items 添加任务"""
    response = clean_client.post('/items', json={'item': '写作业'})
    assert response.status_code == 200
    assert response.json == {'status': 'ok'}

    # 验证 GET /items 已更新
    get_resp = clean_client.get('/items')
    assert get_resp.json == ['写作业']

def test_add_item_without_data(clean_client):
    # """测试添加任务时未提供 item 字段"""
    response = clean_client.post('/items', json={})
    assert response.status_code == 400
    assert response.json == {'error': 'item is required'}

def test_delete_item(clean_client):
    # """测试删除任务（需要先添加）"""
    # 先添加一个任务
    clean_client.post('/items', json={'item': '读书'})
    # 删除索引 0
    response = clean_client.delete('/items/0')
    assert response.status_code == 200
    assert response.json == {'status': 'ok', 'deleted': '读书'}

    # 验证已删除
    get_resp = clean_client.get('/items')
    assert get_resp.json == []

def test_delete_item_invalid_index(clean_client):
    # """测试删除不存在的索引"""
    response = clean_client.delete('/items/999')
    assert response.status_code == 404
    assert response.json == {'error': 'invalid index'}