### d2f

----

**操作**

将double类型数据转换为float类型

**格式**

|d2f|
|--------:|



**结构**
```
d2f=144(0x90)
```

**操作数栈**
```
..., value→
..., result
```

**描述**

在操作数栈栈顶的值value必须为double类型的数据，指令执行时，value从操作数栈中出栈，并且经过数值集合转换后得到值value’，value’再通过IEEE754的向最接近数舍入模式转换为float
类型值result。然后result被压入到操作数栈中。

如果d2f指令运行在FP-strict模式下，那转换的结果永远是转换为单精度浮点值集合中与原值最接近的可表示值。

如果d2f指令运行在非FP-strict模式下，那转换结果可能会从单精度扩展指数集合中选取，也就是说并非一定会转换为单精度浮点值集合中与原值最接近的可表示值的。

当有限值value’太小以至于无法使用float类型数据来表示时，将会被转换为与原值符号相同的零值。同样，当有限值value’太大以至于无法使用float类型数据来表示时，将会被转换为与原值符号相同的无穷大。double类型的NaN值永远转换为float类型的NaN值。


**注意**

d2f指令执行了窄化类型转换，它可能会导致value’的数值大小和精度发生丢失。