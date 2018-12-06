# JavaScript-screenshot

[![star this repo](http://githubbadges.com/star.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot)[![fork this repo](http://githubbadges.com/fork.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot/fork) [![npm](https://img.shields.io/npm/v/js_screen_shots.svg)](https://www.npmjs.com/package/js_screen_shots) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

[中文文档](https://github.com/usecodelee/JavaScript-screenshot/blob/master/README_zh.md)

## Introduction

JavaScript implementation screenshot,There are two libraries used:

> [Html2Canvas.js](https://github.com/niklasvh/html2canvas)  
> [Canvas2Image.js](https://github.com/SuperAL/canvas2image)

I mainly made two demos:

1. [Simple Version](https://github.com/usecodelee/JavaScript-screenshot/tree/master/simple)
2. [Webpack+Vue+Element Version](https://github.com/usecodelee/JavaScript-screenshot/tree/master/simple)
3. [js-screenshot-for-npm](https://github.com/usecodelee/JavaScript-screenshot/tree/master/js-screenshot-for-npm)

## Simple Version Of Use

> Open `index.html` directly in your browser.

## Webpack+Vue+Element Version Of Use

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Example

> **The original html is like this：**

![The original html](https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/1%E4%B8%8A.png)

> **This is the element node：**

![element node](https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/1%E4%B8%8B.jpg)

> **This is after converting to canvas：**

![to canvas](https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/2%E4%B8%8A.jpg)

> **This is the element node：**

![element node](https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/2%E4%B8%8B.jpg)

> **This is after converting to img：**

![to img](https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/3%E4%B8%8A.jpg)

> **This is the element node：**

![element node](https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/3%E4%B8%8B.jpg)

> **This is the final result：**

![final result](https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/4.jpg)

## js-screenshot-for-npm Of use

```bash
npm install --save js_screen_shots
```

For details, see the document [README.md](https://github.com/usecodelee/JavaScript-screenshot/tree/master/js-screenshot-for-npm)
