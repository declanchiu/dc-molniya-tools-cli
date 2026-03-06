# dc-molniya-tools-cli

<div align="center">

[![npm version](https://img.shields.io/npm/v/dc-molniya-tools-cli.svg)](https://www.npmjs.com/package/dc-molniya-tools-cli)
[![Node.js Version](https://img.shields.io/node/v/dc-molniya-tools-cli.svg)](https://nodejs.org)
[![License](https://img.shields.io/npm/l/dc-molniya-tools-cli.svg)](https://github.com/declanchiu/dc-molniya-tools-cli/blob/main/LICENSE)

**一个优雅的 Git 工作流 CLI 工具，让提交变得简单而有趣**

[English](./README.md) | 简体中文

</div>

---

## ✨ 特性

- 🎨 **Emoji 驱动** - 50+ emoji 标准化提交类型，让 Git 历史更直观
- 🔍 **模糊搜索** - 基于 Fuse.js 的强大搜索，快速找到想要的 emoji
- 🚀 **一键提交** - 自动完成 add → commit → push 的完整流程
- 🎯 **智能错误处理** - 自动处理新分支首次推送的 upstream 设置
- 📝 **标准化格式** - `🎨(scope): message` 格式，便于代码审查
- 💻 **广泛兼容** - 支持 Node.js 14.18.0 - 25.x 全版本

---

## 📦 安装

### 全局安装（推荐）

```bash
npm install -g dc-molniya-tools-cli
# 或
pnpm add -g dc-molniya-tools-cli
# 或
yarn global add dc-molniya-tools-cli
```

### 项目内安装

```bash
npm install --save-dev dc-molniya-tools-cli
# 或
pnpm add -D dc-molniya-tools-cli
```

---

## 🚀 快速开始

安装后，你可以使用 `dmtc` 命令：

```bash
# 查看版本
dmtc --version

# 查看帮助
dmtc --help
```

---

## 📖 使用指南

### 命令概览

| 命令 | 功能 | 说明 |
|------|------|------|
| `dmtc c` | 提交暂存区 | 提交已暂存的代码，支持 Emoji + Scope 格式 |
| `dmtc a` | 完整流程 | 自动 add → commit → push，一键完成 |

---

### 1. 提交暂存区代码 (`dmtc c`)

适用于已经使用 `git add` 暂存了文件的场景。

```bash
# 先暂存文件
git add .

# 使用 dmtc 提交
dmtc c
```

**交互流程：**

1. **选择 Emoji** - 输入关键词搜索（如 "fix"、"feat"）
2. **输入提交信息** - 描述你的修改
3. **输入 Scope**（可选）- 指定修改范围（如 "auth"、"api"）

**示例输出：**
```
✅ Emojis 获取成功，已经是最新的
? 选择一个 emoji › 🐛 - fix: 修复 bug
? 输入提交信息 › 修复登录页面验证问题
? 输入 scope › auth

✅ 提交成功: 🐛(auth): 修复登录页面验证问题
```

---

### 2. 一键完整流程 (`dmtc a`)

自动完成 `git add .` → `git commit` → `git push` 的完整流程。

```bash
dmtc a
```

**自动处理：**
- ✅ 自动暂存所有修改
- ✅ 交互式选择 emoji 和输入提交信息
- ✅ 自动推送到远程仓库
- ✅ 智能处理新分支首次推送（自动设置 upstream）

**特别说明：**

如果是新分支首次推送，工具会自动：
1. 检测 "no upstream branch" 错误
2. 自动执行 `git push --set-upstream origin <branch>`
3. 无需手动干预

---

## 🎨 Emoji 提交类型

工具内置 50+ emoji，涵盖常见的提交类型：

| Emoji | 类型 | 说明 |
|-------|------|------|
| 🎨 | style | 代码格式、样式调整 |
| ⚡ | pref | 性能优化 |
| 🔥 | prune | 删除代码或文件 |
| 🐛 | fix | 修复 bug |
| 🚑 | quickfix | 紧急修复 |
| ✨ | feat | 新功能 |
| 📝 | docs | 文档更新 |
| 🚀 | deploy | 部署相关 |
| 💄 | ui | UI/样式更新 |
| 🎉 | init | 初始化项目 |
| ✅ | test | 测试相关 |
| 🔒 | security | 安全修复 |
| 🔖 | release | 发布/版本标签 |
| 🚨 | lint | 修复 linter 警告 |
| 🔧 | config | 配置文件修改 |
| 🌐 | i18n | 国际化 |
| ✏️ | typo | 修复拼写错误 |
| 💩 | poo | 需要改进的代码 |
| ⏪ | revert | 回退代码 |
| 🔀 | merge | 合并分支 |

**完整列表：** 使用 `dmtc c` 或 `dmtc a` 命令时可以搜索查看所有 emoji。

---

## 🛠️ 技术栈

- **TypeScript** - 类型安全的开发体验
- **Commander** - CLI 命令行框架
- **Inquirer** - 交互式命令行提示
- **Fuse.js** - 强大的模糊搜索引擎
- **Execa** - 跨平台命令执行
- **tsup** - 快速的 TypeScript 打包工具

---

## 📋 系统要求

- **Node.js**: >= 14.18.0
- **Git**: 任意版本
- **操作系统**: macOS / Linux / Windows

---

## 🔧 开发

### 克隆项目

```bash
git clone https://github.com/declanchiu/dc-molniya-tools-cli.git
cd dc-molniya-tools-cli
```

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建

```bash
pnpm build
```

### 测试

```bash
pnpm test
```

---

## 📝 提交规范

本项目使用自己的工具进行提交，提交格式为：

```
<emoji>(<scope>): <message>
```

**示例：**
```
🐛(cli): 修复命令行参数解析问题
✨(search): 添加模糊搜索功能
📝(readme): 更新安装说明
```

---

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`dmtc a` 😉)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

---

## 📄 许可证

[ISC](LICENSE) © DeclanChiu

---

## 🔗 相关链接

- [npm 包](https://www.npmjs.com/package/dc-molniya-tools-cli)
- [GitHub 仓库](https://github.com/declanchiu/dc-molniya-tools-cli)
- [问题反馈](https://github.com/declanchiu/dc-molniya-tools-cli/issues)
- [更新日志](./CHANGELOG.md)

---

## ⭐ Star History

如果这个项目对你有帮助，请给个 Star ⭐️

---

<div align="center">

**Made with ❤️ by DeclanChiu**

</div>
