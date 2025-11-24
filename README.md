# Garfish React 微前端 Demo

本仓库提供了一个使用字节 Garfish 的最小 React 微前端示例，包含一个宿主应用（`main-app`）和一个独立的子应用（`sub-app`）。两个应用都基于 Vite + React 开发，可分别独立启动和构建。

## 快速开始

在两个目录下分别安装依赖：

```bash
cd main-app && npm install
cd ../sub-app && npm install
```

子应用现在通过静态 HTML 模板提供，无需单独启动端口。只需启动宿主应用（默认端口 4000）：

```bash
cd ../main-app
npm run dev
```

访问 `http://localhost:4000`，点击“挂载子应用”按钮即可通过 Garfish 将子应用渲染到宿主页面中。

## 目录结构

```
main-app/   宿主应用，使用 Garfish 注册和加载微应用
sub-app/    独立子应用，被 Garfish 动态挂载
```

## 主要逻辑

- 宿主应用通过 `Garfish` 实例注册子应用的入口 `/micro-subapp/index.html`，并指定挂载节点 `#subapp-container`。
- 点击按钮时调用 `garfish.loadApp('react-subapp')` 或 `garfish.unmountApp('react-subapp')` 来挂载/卸载子应用。
- 子应用以静态 HTML 模板的形式放置在宿主应用的 `public/micro-subapp` 目录下，无需单独运行端口即可被加载。
