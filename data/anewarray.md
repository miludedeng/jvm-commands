### anewarray

----

**操作**

创建一个组件类型为 reference 类型的数组

**格式**

| anewarray  |
| --------:   |
| indexbyte1  |
| indexbyte2 |



**结构**
```
anewarray = 189(0xbd)
```

**操作数栈**
```
..., count →
..., arrayref
```

**描述**

count 应为 int 类型的数据，指令执行时它将从操作数栈中出栈，它代表了 要创建多大的数组。indexbyte1 和 indexbyte2 用于构建一个当前类的运行时常量池的索引值，构建方式为(indexbyte1 << 8)| indexbyte2，该索引所指向的运行时常量池项应当是一个类、接口或者数组 类型的符号引用，这个类、接口或者数组类型应当是已被解析(§5.4.3.1) 的。一个以此类型为组件类型、以 count 值为长度的数组将会被分配在 GC 堆 中，并且一个代表该数组的 reference 类型数据 arrayref 压入到操作数栈 中。这个新数组的所有元素值都被初始化为 null，也即是 reference 类型 的默认值。


**链接时异常**

在类、接口或者数组的符号解析阶段，如果有任何异常发生，可以被认为是类和接口解析失败而抛出.

**运行时异常**

另外，如果 count 值小于 0 的话，anewarray 指令将会抛出一个 NegativeArraySizeException 异常。

**注意**

anewarray 指令可用于创建一个单维度的数组，或者用于创建一个多维度数 组的一部分。
