### astore

----

**操作**

将一个 reference 类型数据保存到局部变量表中

**格式**

| astore        |
| --------:   |
| index        |

**结构**
```
astore = 58(0x3a)
```

**操作数栈**
```
..., objectref →
...
```

**描述**

index 是一个无符号 byte 型整数，它必须是一个指向当前栈帧局 部变量表的索引值，而在操作数栈栈顶的 objectref 必须是returnAddress 或者 reference 类型的数据，这个数据将从操作数栈出栈， 然后保存到 index 所指向的局部变量表位置中。

**运行时异常**

astore 指令可以与 returnAddress 类型的数据配合来实现 Java 语言中的 finally 子句。但是 aload 指令不可以用 来从局部变量表加载 returnAddress 类型的数据到操作数栈，这种 astore指令的不对称性是有意设计的。astore 指令可以与 wide 指令联合使用，以实现使用 2 字节宽度的无符号整 数作为索引来访问局部变量表。
