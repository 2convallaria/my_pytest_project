from flask import Flask, request, jsonify
from flask_cors import CORS   # 新增
from .todo import TodoList   # 注意导入路径

app = Flask(__name__)
CORS(app)   # 新增：允许所有跨域请求
todo = TodoList()   # 内存存储，重启后数据丢失（演示用）

@app.route('/items', methods=['GET'])
def get_items():
    """获取所有待办事项"""
    return jsonify(todo.items())

@app.route('/items', methods=['POST'])
def add_item():
    """添加一条待办事项"""
    data = request.get_json()
    item = data.get('item')
    if not item:
        return jsonify({"error": "item is required"}), 400
    todo.add(item)
    return jsonify({"status": "ok"}), 200

@app.route('/items/<int:index>', methods=['DELETE'])
def delete_item(index):
    try:
        deleted = todo._items.pop(index)
        return jsonify({"status": "ok", "deleted": deleted}), 200
    except IndexError:
        return jsonify({"error": "invalid index"}), 404
    
@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)