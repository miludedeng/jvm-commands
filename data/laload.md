### laload

----

**操作**

从数组中加载一个 long 类型数据到操作数栈

**格式**

|laload|
|--------:|

**结构**
```
laload = 47(0x2f)
```

**操作数栈**
```
..., arrayref，index →
..., value
```

**描述**

arrayref必须是一个reference类型的数据，它指向一个组件类型为int的数组，index必须为int类型。指令执行后，arrayref和index同时从操作数栈出栈，index作为索引定位到数组中的long类型值将压入到操作数
栈中。

**运行时异常**

如果arrayref为null，laload指令将抛出NullPointerException异常。

另外，如果index不在arrayref所代表的数组上下界范围中，laload指令将抛出ArrayIndexOutOfBoundsException异常。
