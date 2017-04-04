### land

----

**操作**

对 long 类型数据进行按位与运算

**格式**

|land|
|--------:|

**结构**
```
land = 127(0x7f)
```

**操作数栈**
```
..., value1，value2 →
..., result
```

**描述**

value1和value2都必须为long类型数据，指令执行时，value1和value2从操作数栈中出栈，对这两个数进行按位与(BitwisAnd)操作得到long类型数据result，最后result被压入到操作数栈中。
