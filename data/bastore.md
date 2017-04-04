### bastore

----

**操作**

从操作数栈读取一个 byte 或 boolean 类型数据存入到数组中

**格式**

|  bastore |
| --------:   |



**结构**
```
bastore = 84(0x54)
```

**操作数栈**
```
..., arrayref，index，value →
...
```

**描述**

arrayref 必须是一个 reference 类型的数据，它指向一个组件类型为 byte 或 boolean 的数组，index 和 value 都必须为 int 类型。指令执行后，arrayref、index 和 value 同时从操作数栈出栈，value 将被转换为 byte 类型，然后存储到 index 作为索引定位到数组元素中。

**运行时异常**

如果 arrayref 为 null，bastore 指令将抛出 NullPointerException 异常。

另外，如果 index 不在 arrayref 所代表的数组上下界范围中，bastore 指 令将抛出 ArrayIndexOutOfBoundsException 异常。

**注意**

bastore 指令可以用来保存 byte 或者 boolean 的数据到数组之中，在 Oracle 的虚拟机实现中，布尔类型的数组被实现为 8 位宽度的数值，而其他 的虚拟机实现很可能使用其他方式实现 boolean 数组，那其他虚拟机实现的 bastore 就必须能正确访问相应实现的数组。
