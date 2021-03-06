### f2d

----

**操作**

将float类型数据转换为double类型

**格式**

|f2d|
|--------:|

**结构**
```
f2d = 141(0x8d)
```

**操作数栈**
```
..., value→
..., result
```

**描述**

在操作数栈栈顶的值value必须为float类型的数据，指令执行时，value从操作数栈中出栈，并且经过数值集合转换后得到值value’，value’再通过IEEE754的向最接近数舍入模式转换为double类型值result。然后result被压入到操作数栈中。

如果d2f指令运行在FP-strict模式下，那指令执行过程就是一种宽化类型转换。因为所有单精度浮点数集合都可以在双精度浮点数集合中找到精确对应的数值，因此这种转换是精确的。

如果d2f指令运行在非FP-strict模式下，那转换结果就可能会从双精度扩展指数集合中选取，并不需要舍入为双精度浮点数集合中最接近的可表示值。不过，如果操作数value是单精度扩展指数集合中的数值，那把结果舍入为双精度浮点数集合则是必须的。
