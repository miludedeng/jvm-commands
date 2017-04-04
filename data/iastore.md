### iastore

----

**操作**

从操作数栈读取一个 int 类型数据存入到数组中

**格式**

|iastore|
|--------:|

**结构**
```
iastore = 79(0x4f)
```

**操作数栈**
```
..., arrayref，index，value →
...
```

**描述**

arrayref必须是一个reference类型的数据，它指向一个组件类型为int的数组，index和value都必须为int类型。指令执行后，arrayref、index和value同时从操作数栈出栈，然后value存储到index作为索引定位到数组元素中。

**运行时异常**

如果arrayref为null，iastore指令将抛出NullPointerException异常。

另外，如果index不在arrayref所代表的数组上下界范围中，iastore指令将抛出ArrayIndexOutOfBoundsException异常。
