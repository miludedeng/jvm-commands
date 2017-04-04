### iand

----

**操作**

对int类型数据进行按位与运算

**格式**

|iand|
|--------:|

**结构**
```
iand = 126 (0x7e)
```

**操作数栈**
```
..., value1，value2 →
..., result
```

**描述**

value1和value2都必须为int类型数据，指令执行时，value1和value2从操作数栈中出栈，对这两个数进行按位与(BitwisAnd)操作得到int类
型数据result，最后result被压入到操作数栈中。
