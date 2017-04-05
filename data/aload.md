
### aload

----

**操作**

从数组中加载一个 reference 类型数据到操作数栈

**格式**

| aload  |
| --------:   |
| index   |


**结构**
```
aload = 25(0x19)
```

**操作数栈**
```
... →
..., objectref
```

**描述**

index 是一个代表当前栈帧中局部变量表的索引的无符号 byte 类 型整数，index 作为索引定位的局部变量必须为 reference 类型，称为
objectref。指令执行后，objectref 将会压入到操作数栈栈顶。


**注意**

aload 指令无法被用于加载类型为 returnAddress 类型的数据到操作数栈 中，这点是特意设计成与 astore 指令不相对称的(astore 指令可以操作returnAddress 类型的数据)。aload 操作码可以与 wide 指令联合一起实现使用 2 个字节长度的无符号 byte 型数值作为索引来访问局部变量表。
