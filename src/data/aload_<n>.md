### aload_\<n\>

----

**操作**

从局部变量表加载一个 reference 类型值到操作数栈中

**格式**

| aload_\<n\>  |
| --------:   |


**结构**
```
aload_0 = 42(0x2a)
aload_1 = 43(0x2b)
aload_2 = 44(0x2c)
aload_3 = 45(0x2d)
```

**操作数栈**
```
... →
..., objectref
```

**描述**

\<n\>代表当前栈帧中局部变量表的索引值，\<n\>作为索引定位的局部 变量必须为 reference 类型，称为 objectref。指令执行后，objectref
将会压入到操作数栈栈顶


**注意**

aload_\<n\>指令无法被用于加载类型为 returnAddress 类型的数据到操作 数栈中，这点是特意设计成与 astore_\<n\>指令不相对称的(astore_\<n\>指令可以操作 returnAddress 类型的数据)。 aload_\<n\>指令族中的每一条指令都与使用<n>作为 index 参数的 aload 指 令作的作用一致，仅仅除了操作数\<n\>是隐式包 在指令中这点不同而已。
