# 待办事项管理应用（全栈测试实践）

一个基于 Flask + 原生 JavaScript 的待办事项应用，旨在展示**全栈测试开发能力**，包含单元测试、API 集成测试、性能测试和 CI/CD 自动化。

## 技术栈
- **后端**：Python, Flask, RESTful API
- **前端**：HTML, CSS (Water.css + 自定义), JavaScript (Fetch API)
- **测试**：pytest, mock, Flask test client
- **性能测试**：JMeter (阶梯加压)
- **CI/CD**：GitHub Actions
- **部署**：Render (公网链接)

## 功能特点
- 查看任务列表
- 添加新任务
- 删除任务
- 数据内存存储（可扩展数据库）

## 测试覆盖
- **单元测试**：测试 `TodoList` 类的核心逻辑（添加、删除、保存等）。
- **API 集成测试**：使用 Flask test_client 验证 `/items` (GET/POST) 和 `/items/<int:index>` (DELETE) 的行为。
- **性能测试**：使用 JMeter 对 `/items` 接口进行阶梯加压测试，分析响应时间和吞吐量。
- **自动化流水线**：GitHub Actions 在每次 push 时自动运行 pytest。

## 快速开始

### 1. 克隆仓库
```bash
git clone git@github.com:你的用户名/todo-app.git
cd todo-app
