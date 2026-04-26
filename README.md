# 待办事项管理应用（全栈测试实践）

[![CI](https://github.com/2convallaria/my_pytest_project/actions/workflows/ci.yml/badge.svg)](https://github.com/2convallaria/my_pytest_project/actions/workflows/ci.yml)

一个基于 Flask + 原生 JavaScript 的待办事项应用，旨在展示**全栈测试开发能力**，包含单元测试、API 集成测试、性能测试和 CI/CD 自动化。

**在线演示**：[https://furikae.pythonanywhere.com](https://furikae.pythonanywhere.com)

## 技术栈
- **后端**：Python, Flask, RESTful API
- **前端**：HTML, CSS (Water.css + 自定义), JavaScript (Fetch API)
- **测试**：pytest, mock, Flask test client
- **性能测试**：JMeter (阶梯加压)
- **CI/CD**：GitHub Actions
- **部署**：PythonAnywhere

## 功能特点
- 查看任务列表
- 添加新任务
- 删除任务
- 数据内存存储（可扩展数据库）

## 测试覆盖
- **单元测试**：测试 `TodoList` 类的核心逻辑（添加、删除、保存等）。
- **API 集成测试**：使用 Flask test_client 验证 `/items` (GET/POST) 和 `/items/<int:index>` (DELETE) 的行为。
- **性能测试**：使用 JMeter 对 `/items` 接口进行阶梯加压测试，分析响应时间和吞吐量。详见 [性能测试报告](./performance_report.md)。
- **自动化流水线**：GitHub Actions 在每次 push 时自动运行 pytest

## 快速开始

### 1. 克隆仓库
```bash
git clone git@github.com:2convallaria/my_pytest_project.git
cd my_pytest_project

```

### 2. 创建虚拟环境并安装依赖
```bash
# 创建虚拟环境
python -m venv venv

# 激活虚拟环境
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# 安装依赖
pip install -r requirements.txt

```

### 3. 运行应用
```bash
python -m backend.app

```

**运行方式**：应用启动后，访问 [http://127.0.0.1:5000] 即可使用。

### 4. 运行测试
```bash
pytest         # 运行所有测试（简洁输出）
#或
pytest -v      # 详细输出，显示每个测试用例名称

```

### 5. 项目结构
```text
my_pytest_project/
├── backend/                 # 后端代码
│   ├── app.py               # Flask 主应用
│   ├── todo.py              # TodoList 核心类
│   └── static/              # 前端静态文件
|—— reports/                 # JMeter 生成的 HTML 报告附件
├── scripts/
│   └── plot_performance.py  # 性能数据可视化脚本
├── tests/                   # 单元测试与集成测试
├── tests_selenium/          # Selenium 脚本（需手动运行）
├── .github/workflows/       # CI 配置
├── requirements.txt         # 依赖列表
├── performance_report.md    # 性能测试报告
└── README.md

```