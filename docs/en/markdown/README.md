
# Markdown 

## 基本语法

https://markdown-it.github.io/

_[https://markdown-it.github.io/](https://markdown-it.github.io/)_

__[https://markdown-it.github.io/](https://markdown-it.github.io/)__

# Markdown 拓展


## 链接

### 内部链接

> 网站内部的链接，将会被转换成 \<router-link> 用于 SPA 导航。同时，站内的每一个文件夹下的 README.md 或者 index.md 文件都会被自动编译为 index.html，对应的链接将被视为 /。

以如下的文件结构为例：

```
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

假设你现在在 foo/one.md 中：
```
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```
eg:
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->

### 链接的重定向

>VuePress 支持重定向到干净链接。如果一个链接 /foo 找不到，VuePress 会自行寻找一个可用的 /foo/ 或 /foo.html。

>反过来，当 /foo/ 或 /foo.html 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 [vuepress-plugin-clean-urls](https://vuepress.github.io/plugins/clean-urls/) 定制你的网站路径。

### 外部链接

外部的链接将会被自动地设置为 target="_blank" rel="noopener noreferrer":

::: tip
无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 /foo/one.md 的路径设为了 /foo/one/，你依然应该通过 ./two.md 来访问 /foo/two.md。
:::

## Front Matter
```
---
title: Blogging Like a Hacker
lang: en-US
---
```

## GitHub 风格的表格
输入：

    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |

输出
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji

输入
```
:tada: :100:
```

输出

🎉 💯

你可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的 Emoji。

## 目录
输入
```
[[toc]]
```

输出

[[toc]]


## 自定义容器 (默认主题)
输入
```
::: tip STOP
这是一个提示
:::

::: warning 标题
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 展开查看详情
这是一个详情块，在 IE / Edge 中不生效
:::
```

输出

::: tip
这是一个提示
:::

::: warning 标题
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 展开查看详情
这是一个详情块，在 IE / Edge 中不生效
```js
console.log('你好，VuePress！')
```
```css
.a {
    color: pink;
}
```
```html
<p>p标签</p>
```
:::

## 代码块中的行高亮
输入
```
    ``` js {4,8-10} //不要有空格
    export default {
    data () {
        return {
        msg: 'Highlighted!'
        }
    },
    methods: {
        a () {
            alert(1)
        }
    }
    }
    ```
```
输出
``` js {4,8-10} 
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  },
  methods: {
      a () {
          alert(1)
      }
  }
}
```
除了单行以外，你也可指定多行，行数区间，或是两者都指定。

行数区间: 例如 {5-8}, {3-10}, {10-17}
多个单行: 例如 {4,7,9}
行数区间与多个单行: 例如 {4,7-13,16,23-27,40}
