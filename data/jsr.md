### jsr

----

**操作**

程序段落跳转

**格式**

|jsr|
|--------:|
|branchbyte1|
|branchbyte2|

**结构**
```
jsr = 168(0xa8)
```

**操作数栈**
```
..., →
..., address
```

**描述**

address是一个returnAddress类型的数据，它由jsr指令推入操作数栈中。无符号byte型数据branchbyte1和branchbyte2用于构建一个16位有符号的分支偏移量，构建方式为(branchbyte1<<8)|branchbyte2。指令执行时，将产生一个当前位置的偏移坐标，并压入到操作数栈中。跳转目标地址必须在jsr指令所在的方法之内。

**注意**

请注意，jsr指令将address压入到操作数栈，ret指令从局部变量表中把它取出，这种不对称的操作是故意设计的。

在Oracle的实现Java语言编译器中，JavaSE6前的版是使用jsr和ret指令配合来实现finally语句块的。
