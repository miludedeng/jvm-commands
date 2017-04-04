### lxor

----

**操作**

long 数值异或运算

**格式**

|lxor|
|--------:|

**结构**
```
lxor = 131(0x83)
```

**操作数栈**
```
..., value1，value2 →
..., result
```

**描述**

value1和value2都必须为long类型数据，指令执行时，value1和value2从操作数栈中出栈，然后将value1和value2进行按位异或运算，并把运算结果入栈回操作数栈中。
