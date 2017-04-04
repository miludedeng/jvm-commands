### lor

----

**操作**

long 类型数值的布尔或运算

**格式**

|lor|
|--------:|

**结构**
```
lor = 129(0x81)
```

**操作数栈**
```
..., value1，value2 →
..., result
```

**描述**

value1、value2必须为long类型数据，指令执行时，它们从操作数栈中出栈，接着对这2个数进行按位或(BitwiseInclusiveOR)运算，long类型的运算结果result被压入到操作数栈中。
