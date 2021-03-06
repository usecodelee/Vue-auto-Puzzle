# 使用Vue做一个可自动拼图的拼图小游戏（二）

## 背景以及最终效果

在上一篇文章中我们已经写完了一个可以正常玩的拼图小游戏，但是这还没有结束，我们还要接着试一下让拼图游戏可以自己完成拼图。
最终效果如下图：  
![最终效果](https://github.com/usecodelee/Vue-jigsawPuzzle/blob/master/img/20190328.gif?raw=true)

本部分是这篇文章的第二部分，主要讲的是实现自动拼图的功能实现。

## 原理

这里开始就涉及到一些算法的知识了，不过不难。拼图游戏其实就是：N数码问题，而我写的是3*3的，所以就是八数码问题的求解。
总结一下，我们需要做的事包括以下几个：

1. 判断八数码问题是否有解（其实就是判断该拼图是否可以还原）
2. 求解（寻找复原路径）
3. 渲染（根据找出来的复原路径在页面中渲染出来）

## 具体步骤

清楚了具体要做的事，那就一件一件跟着做就好了。

### 判断八数码问题是否有解

在上一篇文章我提过一点，就是我们使用数组打乱函数直接打乱的拼图是不一定可以还原的。这一点我们可以类比一下魔方，玩过魔方的应该都知道，当我们正常的将魔方转动打乱，无论多乱，都是可以复原的。但是如果我们将其中的一颗或者几颗扣下来，随意的装上去，那这个魔方就不一定可以复原了。在我们拼图中也是同样的道理。判断八数码问题是否有解可以利用**原始状态**（打乱之后的状态）和**结果状态**（即拼好时的状态）的**逆序数奇偶性是否相同**来判断。

假设我们的结果状态如下：  

```html
1  2  3
4  5  6
7  8  
```

为了方便表示我们将第九个位置为空的表示为“0”，然后将结果状态表示成为一维的形式，结果如下：

```html
1  2  3  4  5  6  7  8  0
```

可以通过实验得知：交换了前两个位置的八数码问题是无解的：

```html
2  1  3  4  5  6  7  8  0
```

实际上八数码问题有解的结论是这样的：  
**若两个状态的逆序奇偶性相同，则有解，否则不可解。**  

那什么是**逆序**呢？  
**一个状态表示成一维的形式，求出除0之外所有数字的逆序数之和，也就是每个数字前面比它大的数字的个数的和，称为这个状态的逆序。**  

再去看刚刚举的例子：结果状态`1  2  3  4  5  6  7  8  0`和原始状态`2  1  3  4  5  6  7  8  0`。根据逆序的定义可以计算出来结果状态的逆序是**0**，原始状态的逆序是**1**，奇偶性不一致，因此该八数码问题不可解。  

通俗的讲：我们可以想象一下现在有一个拼图，我们左右移动空格的时候，整个状态的逆序其实是不变的，所以会保持奇偶性一致。当我们上下移动的时候，转换成一维之后就相当于将一个数字向前或者向后移动两格，奇偶性还是不变的。  

那怎么求逆序呢？

```javascript
// 求逆序奇偶性
odevity(node) {
    var num = 0;
    node.splice(node.indexOf("0"), 1);
    node.forEach(function(item, index) {
        for (var i = 0; i < index; i++) {
            if (node[i] != 0) {
                if (node[i] > item) {
                    num++;
                }
            }
        }
    });
    if (num % 2) {
        return 1;
    } else {
        return 0;
    }
},
```

### 寻找复原的路径

寻找复原的路径其实很简单，只需要将使用广度优先算法遍历。原始状态可以设定为广度搜索中图的第一层，由原始状态通过判断0的移动方向可以得到该状态的子节点，同时需要维护一个对象来记录每个子节点的父节点是谁以此来反推出动画的运动轨迹及一个对象来负责判断当前子节点先前是否已出现过，出现过则无需再压入队。至此反复求出节点的子节点并无重复的压入队。代码比较长，就不展示在这里了，可以去[github](https://github.com/usecodelee/Vue-jigsawPuzzle)上查看。

### 优化

优化的话可以从搜索算法上使用A*算法进行优化。此外，为了提高用户体验，我做的这个小游戏里面当打乱之后不能复原的话可以自动重新打乱，直到可以复原为止。

看看最终的效果：  
![5.gif](https://github.com/usecodelee/Vue-jigsawPuzzle/blob/master/img/20190328.gif?raw=true)

项目源码：[https://github.com/usecodelee/Vue-jigsawPuzzle](https://github.com/usecodelee/Vue-jigsawPuzzle)
