### caload

----

**操作**

从数组中加载一个 char 类型数据到操作数栈

**格式**

|  caload |
| --------:   |



**结构**
```
caload = 52(0x34)
```

**操作数栈**
```
..., arrayref，index →
..., value
```

**描述**

arrayref 必须是一个 reference 类型的数据，它指向一个组件类型为 char 的数组，index 必须为 int 类型。指令执行后，arrayref 和 index 同时从操作数栈出栈，index 作为索引定位到数组中的 char 类型值先被零位扩展 (Zero-Extended)为一个 int 类型数据 value，然后再将 value 压入到 操作数栈中。

**运行时异常**

如果arrayref为null，caload 指令将抛出 NullPointerException异常。

另外，如果index不在arrayref所代表的数组上下界范围中，caload指令将抛出 ArrayIndexOutOfBoundsException异常。
