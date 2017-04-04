### dastore

----

**操作**

从操作数栈读取一个double类型数据存入到数组中


**格式**

|dastore|
|--------:|

**结构**
```
dastore = 82(0x52)
```

**操作数栈**
```
..., arrayref，index，value→
...
```

**描述**

arrayref必须是一个reference类型的数据，它指向一个组件类型为double的数组，index必须为int类型，value必须为doube类型。指令执行后，arrayref、index和value同时从操作数栈出栈，value并且经过数值集合转换后得到值value‘，然后存储到index作为索引
定位到数组元素中。

**运行时异常**

如果arrayref为null，dastore指令将抛出NullPointerException异常。

另外，如果index不在arrayref所代表的数组上下界范围中，dastore指令将抛出ArrayIndexOutOfBoundsException异常。
