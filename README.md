# Next.js Admin Template

[English](README.en.md) | 简体中文

一个现代化的后台管理系统模板，基于 Next.js 15 App Router 构建。

## 特性

- 🚀 **技术栈**
  - Next.js 15 (App Router)
  - React 19+
  - TypeScript
  - Tailwind CSS
  - shadcn/ui 组件库

- 🌍 **国际化**
  - 基于 next-intl
  - 支持中英文切换
  - 路由级别的语言切换

- 🎨 **UI/UX**
  - 响应式设计
  - 暗黑模式支持
  - 现代简约风格
  - 自定义主题

- 📦 **功能特性**
  - 完整的表单系统（支持各类表单控件）
  - Dashboard页面
  - 列表页面
  - 错误及结果页面
  - 根据路由组布局

[更多内容](https://www.zengcreates.cn/2b/project-admin-template)

## 快速开始

### 环境要求

- Node.js 20.0 或更高版本

### 安装

```bash
# 克隆项目
git clone https://github.com/answer185/nextjs-admin-template

# 进入项目目录
cd nextjs-admin-template

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 项目结构
```md
src/
├── app/ # App Router 路由
│ ├── [locale]/ # 国际化路由
│ ├── (admin-pages)/ # 后台页面
│ └── (auth)/ # 认证相关页面
├── components/ # 通用组件
│ ├── ui/ # UI 基础组件
│ └── shared/ # 共享业务组件
├── lib/ # 工具函数
├── hooks/ # 自定义 Hooks
├── styles/ # 样式文件
└── types/ # TypeScript 类型定义
```
## 开发指南

### 添加新页面

- 在 `src/app/[locale]/(admin-pages)` 下创建新目录
- 添加 `page.tsx` 文件
- 在src/components/layouts/sidebar.tsx添加菜单名称

### 国际化

- 在`src/intl`目录里添加国际化文本
- 在src/lib/constans.ts里添加国际化文件文件名称
- 使用 `useTranslations` hook 获取翻译
- 使用 `<Link>` 时注意携带语言参数

### 新增组件

1. 使用 shadcn/ui CLI 添加基础组件
2. 在 `components/ui` 下创建自定义组件
3. 遵循项目组件编写规范

## 部署
- Vercel（推荐）
- Docker
- 传统服务器

## 贡献指南

1. Fork 本仓库
2. 创建特性分支
3. 提交改动
4. 发起 Pull Request
