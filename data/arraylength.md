### arraylength

----

**操作**

取数组长度

**格式**

|  arraylength |
| --------:   |


**结构**
```
arraylength = 190(0xbe)
```

**操作数栈**
```
..., arrayref →
..., length
```

**描述**

arrayref 必须是指向数组的 reference 类型的数据，指令执行时， arrayref 从操作数栈中出栈，数组的长度 length 将被计算出来并作为一个
int 类型数据压入到操作数栈中。

**运行时异常**

如果 arrayref 是 null，arraylength 将会抛出
NullPointerException 异常。
