### swap

----

**操作**

交换操作数栈顶的两个值

**格式**

|swap|
|--------:|

**结构**
```
swap = 95 (0x5f)
```

**操作数栈**
```
..., value2，value1 →
..., value1，value2

```

**描述**

交换操作数栈顶的两个值。

swap指令只有在value1和value2都是中定义的分类一的运算类型才能使用。

Java虚拟机为提供交换操作数栈中两个分类二数值的指令。
