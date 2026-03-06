# GitHub Actions 自动发布配置指南

## 📋 配置步骤

### 步骤 1: 添加 NPM_TOKEN 到 GitHub Secrets

1. 访问你的 GitHub 仓库设置页面：
   ```
   https://github.com/declanchiu/dc-molniya-tools-cli/settings/secrets/actions
   ```

2. 点击 **"New repository secret"** 按钮

3. 填写以下信息：
   - **Name**: `NPM_TOKEN`
   - **Secret**: `你的 npm token`（从 https://www.npmjs.com/settings/你的用户名/tokens 生成）

4. 点击 **"Add secret"** 保存

### 步骤 2: 验证配置

配置完成后，GitHub Actions 会在以下情况自动触发：

- ✅ 当 `package.json` 文件被推送到 `main` 分支时
- ✅ 检测到本地版本号与 npm 已发布版本不同时
- ✅ 自动执行：安装依赖 → 构建项目 → 发布到 npm

### 步骤 3: 查看发布状态

访问 Actions 页面查看发布进度：
```
https://github.com/declanchiu/dc-molniya-tools-cli/actions
```

---

## 🔄 工作流程说明

### 触发条件
- 推送到 `main` 分支
- 修改了 `package.json` 文件

### 执行步骤
1. **检出代码** - 获取最新代码
2. **设置 pnpm** - 安装 pnpm 包管理器
3. **设置 Node.js** - 配置 Node.js 18 环境
4. **安装依赖** - 使用 `pnpm install --frozen-lockfile`
5. **获取版本号** - 对比本地版本和 npm 已发布版本
6. **构建项目** - 如果版本不同，执行 `pnpm build`
7. **发布到 npm** - 如果版本不同，执行 `npm publish --access public`

---

## ⚠️ 注意事项

### 版本号管理
- 每次发布前，确保在 `package.json` 中更新版本号
- 遵循语义化版本规范（Semantic Versioning）
  - `1.0.0` → `1.0.1` (补丁版本，bug 修复)
  - `1.0.0` → `1.1.0` (次版本，新功能)
  - `1.0.0` → `2.0.0` (主版本，破坏性变更)

### NPM Token 安全
- ✅ Token 已安全存储在 GitHub Secrets 中
- ✅ 不会在日志中显示
- ✅ 只有仓库管理员可以访问
- ⚠️ 如果 token 泄露，请立即在 npm 网站上撤销并生成新的

### 发布权限
- 确保 npm token 类型为 **"Automation"**
- 确保 token 有 **"Publish"** 权限
- 确保你的 npm 账号是包的维护者

---

## 🚀 下次发布流程

1. **修改代码**
   ```bash
   # 进行你的代码修改
   ```

2. **更新版本号**
   ```bash
   # 在 package.json 中手动更新版本号
   # 或使用 npm version 命令
   npm version patch  # 1.0.6 → 1.0.7
   npm version minor  # 1.0.6 → 1.1.0
   npm version major  # 1.0.6 → 2.0.0
   ```

3. **提交并推送**
   ```bash
   git add .
   git commit -m "🔖 version: 更新版本号到 x.x.x"
   git push
   ```

4. **自动发布**
   - GitHub Actions 会自动检测版本变化
   - 自动构建并发布到 npm
   - 无需手动干预

---

## 📊 查看发布结果

### GitHub Actions 日志
访问：https://github.com/declanchiu/dc-molniya-tools-cli/actions

### npm 包页面
访问：https://www.npmjs.com/package/dc-molniya-tools-cli

---

## 🔧 故障排查

### 如果发布失败

1. **检查 NPM_TOKEN**
   - 确认 token 已正确添加到 GitHub Secrets
   - 确认 token 类型为 "Automation"
   - 确认 token 未过期

2. **检查版本号**
   - 确认本地版本号大于 npm 已发布版本
   - 确认版本号格式正确（如 1.0.6）

3. **检查构建**
   - 确认 `pnpm build` 命令可以正常执行
   - 确认 `dist/` 目录正确生成

4. **查看日志**
   - 在 GitHub Actions 页面查看详细错误日志
   - 根据错误信息进行调试

---

## ✅ 当前状态

- ✅ GitHub Actions 工作流已配置
- ✅ 支持 pnpm 包管理器
- ✅ 自动版本检测
- ✅ 自动构建和发布
- ⏳ 等待添加 NPM_TOKEN secret

**下一步：** 请按照"步骤 1"添加 NPM_TOKEN 到 GitHub Secrets
