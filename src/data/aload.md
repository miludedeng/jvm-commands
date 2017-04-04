### aaload

----

**操作**

从数组中加载一个 reference 类型数据到操作数栈

**格式**

| aaload        |
| --------:   |


**结构**
```
aaload = 50（0x32）
```

**操作数栈**
```
...,arrayref，index →
...,value
```

**描述**

arrayref 必须是一个 reference 类型的数据，它指向一个组件类型为 reference 的数组，index 必须为 int 类型。指令执行后，arrayref 和 index 同时从操作数栈出栈，index 作为索引定位到数组中的 reference 类型值将压入到操作数栈中。


**运行时异常**

如果 arrayref 为 null，aaload 指令将抛出 NullPointerException 异 常。另外，如果 index 不在 arrayref 所代表的数组上下界范围中，aaload 指 令将抛出 ArrayIndexOutOfBoundsException 异常。
