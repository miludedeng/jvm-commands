### i2b

----

**操作**

将int类型数据转换为byte类型

**格式**

|i2b|
|--------:|

**结构**
```
i2b = 145 (0x91)
```

**操作数栈**
```
..., value →
..., result
```

**描述**

value必须是在操作数栈栈顶的int类型数据，指令执行时，它将从操作数栈中出栈，转换成byte类型数据，然后带符号扩展(Sign-Extended)回一个int的结果压入到操作数栈之中。

**注意**

i2b指令执行了窄化类型转换，它可能会导致value的数值大小发生改变，甚至导致转换结果与原值有不同的正负号。