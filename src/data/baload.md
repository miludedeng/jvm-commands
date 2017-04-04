### baload

----

**操作**

从数组中读取 byte 或者 boolean 类型的数据)

**格式**

|  baload |
| --------:   |



**结构**
```
baload = 51(0x33)
```

**操作数栈**
```
..., arrayref，index →
..., value
```

**描述**

arrayref 是一个 reference 类型的数据，它指向一个以 byte 或者 boolean 为组件类型的数组对象，index 是一个 int 型的数据。在指令执行 时，arrayref 和 index 都从操作数栈中出栈，在数组中使用 index 为索引 定位到的 byte 类型数据被带符号扩展(Sign-Extended)为一个 int 型数
据并压入到操作数栈中。

**运行时异常**

如果 arrayref 为 null，baload 指令将抛出 NullPointerException 异 常。

另外，如果 index 不在数组的上下界范围之内，baload 指令将抛出 ArrayIndexOutOfBoundsException 异常。

**注意**

baload 指令可以用来从数组中读取 byte 或者 boolean 的数据，在 Oracle 的虚拟机实现中，布尔类型的数组被实现为 8 位宽度的数值，而其他的虚拟机 实现很可能使用其他方式实现 boolean 数组，那其他虚拟机实现的 baload 就必须能正确访问相应实现的数组。
