###dstore_\<n\>

----

**操作**

将一个double类型数据保存到局部变量表中

**格式**

|dstore_\<n\>|
|--------:|

**结构**
```
dstore_0 = 71(0x47)
dstore_1 = 72(0x48)
dstore_2 = 73(0x49)
dstore_3 = 74(0x4a)
```

**操作数栈**
```
..., value→
...
```

**描述**

\<n\>和\<n\>+1必须是一个指向当前栈帧(§2.6)局部变量表的索引值，而在操作数栈栈顶的value必须是double类型的数据，这个数据将从操作数栈
出栈，并且经过数值集合转换后得到值value’，然后保存到\<n\>和\<n\>+1所指向的局部变量表位置中。

**注意**

dstore_\<n\>指令族中的每一条指令都与使用\<n\>作为index参数的dstore指令作的作用一致，仅仅除了操作数\<n\>是隐式包在指令中这点不同而已。