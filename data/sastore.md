### sastore

----

**操作**

从操作数栈读取一个 short 类型数据存入到数组中

**格式**

|sastore|
|--------:|

**结构**
```
sastore = 86(0x56)
```

**操作数栈**
```
..., arrayref，index，value →
...
```

**描述**

arrayref必须是一个reference类型的数据，它指向一个组件类型为short的数组，index和value都必须为int类型。指令执行后，arrayref、index和value同时从操作数栈出栈，value将被转换为short类型，然后存储到index作为索引定位到数组元素中。

**注意**

如果arrayref为null，sastore指令将抛出NullPointerException异常。

另外，如果index不在arrayref所代表的数组上下界范围中，sastore指令将抛出ArrayIndexOutOfBoundsException异常。
