# fyz-ui UI组件库

### 创建并进入一个新目录

```
mkdir vuepress-starter && cd vuepress-starter
```

### 使用你喜欢的包管理器进行初始化

```
yarn init
```
```
npm init
```

> 将 VuePress 安装为本地依赖,我们已经不再推荐全局安装 VuePress

```
yarn add -D vuepress
```
or
```
npm install -D vuepress
```

### 创建你的第一篇文档

```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

>在 package.json 中添加一些 scripts(opens new window)

>这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
### 在本地启动服务器

```
yarn docs:dev
```
or
```
npm run docs:dev
```

>VuePress 会在 http://localhost:8080 (opens new window)启动一个热重载的开发服务器。

### 构建打包

```
npm run docs:build
```

