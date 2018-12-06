# JavaScript实现截图

[![star this repo](http://githubbadges.com/star.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot)[![fork this repo](http://githubbadges.com/fork.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot/fork) [![npm](https://img.shields.io/npm/v/js_screen_shots.svg)](https://www.npmjs.com/package/js_screen_shots) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## 简介

JavaScript实现网页截图，使用的库有两个：

> [Html2Canvas.js](https://github.com/niklasvh/html2canvas)  
> [Canvas2Image.js](https://github.com/SuperAL/canvas2image)

我主要是做了两个demo和一个npm包：

1. [简单版的实现](https://github.com/usecodelee/JavaScript-screenshot/tree/master/simple)
2. [Webpack+Vue+Element版的实现](https://github.com/usecodelee/JavaScript-screenshot/tree/master/simple)
3. [js-screenshot-for-npm](https://github.com/usecodelee/JavaScript-screenshot/tree/master/js-screenshot-for-npm)

## 简单版使用

> 直接打开`index.html`即可

## Webpack+Vue+Element版的使用

``` bash
# 安装依赖
npm install

# 在localhost：8080进行热重新加载
npm run dev

# 压缩构建为生产环境代码
npm run build

# 构建为生产环境代码并查看捆绑分析器报告
npm run build --report
```

有关工作原理的详细说明，请查看[指南](http://vuejs-templates.github.io/webpack)和[vue-loader文档](http://vuejs.github.io/vue-loader)。

## js-screenshot-for-npm的使用

```bash
npm install --save js_screen_shots
```

详情见[README.md](https://github.com/usecodelee/JavaScript-screenshot/tree/master/js-screenshot-for-npm)