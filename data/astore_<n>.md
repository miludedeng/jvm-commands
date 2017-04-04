### astore_\<n\>

----

**操作**



**格式**

|  astore_\<n\> |
| --------:   |



**结构**
```
astore_0 = 75(0x4b)
astore_1 = 76(0x4c)
astore_2 = 77(0x4d)
astore_3 = 78(0x4e)
```

**操作数栈**
```
..., objectref →
...
```

**描述**

\<n\>必须是一个指向当前栈帧局部变量表的索引值，而在操作数栈 栈顶的 objectref 必须是 returnAddress 或者 reference 类型的数据，这个数据将从操作数栈出栈，然后保存到\<n\>所指向的局部变量表位置中。


**注意**

astore_\<n\>指令可以与 returnAddress 类型的数据配合来实现 Java 语言 中的 finally 子句。但是 aload_\<n\>指令不可以用来从局部变量表加载 returnAddress 类型的数据到操作数栈，这 种 astore_\<n\>指令的不对称性是有意设计的。 astore_\<n\>指令族中的每一条指令都与使用\<n\>作为 index 参数的 astore 指令作的作用一致，仅仅除了操作数<n>是隐式包 在指令中这点不同而已。
