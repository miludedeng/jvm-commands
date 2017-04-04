### castore

----

**操作**

从操作数栈读取一个 char 类型数据存入到数组中

**格式**

|  castore |
| --------:   |



**结构**
```
castore = 85(0x55)
```

**操作数栈**
```
..., arrayref，index，value →
...
```

**描述**

arrayref 必须是一个 reference 类型的数据，它指向一个组件类型为 char 的数组，index 和 value 都必须为 int 类型。指令执行后，arrayref、index和 value 同时从操作数栈出栈，value 将被转换为 char 类型，然后存储到 index 作为索引定位到数组元素中。


**运行时异常**

如果 arrayref 为 null，castore 指令将抛出 NullPointerException 异常。

另外，如果 index 不在 arrayref 所代表的数组上下界范围中，castore 指 令将抛出 ArrayIndexOutOfBoundsException 异常。
