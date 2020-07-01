# 题目介绍

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

## 例1
```
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
```

## 例2
```
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```

## 分析
这道题难点在于对题意的理解，以及对栈的概念的理解

### 栈
一种“先进先出”的数据结构，JavaScript用数组模拟栈，就要求不能使用shift和unshift方法。

### 逻辑
以例1为例，输入["CQueue","appendTail","deleteHead","deleteHead"][[],[3],[],[]]
- CQueue：new CQueue() -> null
- appendTail: 插入3 -> null
- deleteHead: 移除3 -> 3
- deleteHead: 队列为空 -> -1

输出 [null, null, 3, -1]


### 实现

维护两个栈stack1,stack2；stack1负责塞数据，stack2复杂将stack1倒置读取栈底数据。



