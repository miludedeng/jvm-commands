### fstore

----

**操作**

将一个 float 类型数据保存到局部变量表中

**格式**

|fstore|
|--------:|
|index|

**结构**
```
fstore=56(0x38)
```

**操作数栈**
```
..., value →
...
```

**描述**

index是一个无符号byte型整数，它指向当前栈帧局部变量表的索引值，而在操作数栈栈顶的value必须是float类型的数据，这个数据将从操作数栈出栈，并且经过数值集合转换后得到值value’，然后保存到index所指向的局部变量表位置中。

**注意**

fstore指令可以与wide指令联合使用，以实现使用2字节宽度的无符号整数作为索引来访问局部变量表。
