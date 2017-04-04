### jsr_w

----

**操作**

程序段落跳转

**格式**

|jsr_w|
|--------:|
|branchbyte1|
|branchbyte2|
|branchbyte3|
|branchbyte4|

**结构**
```
jsr_w = 201(0xc9)
```

**操作数栈**
```
..., →
..., address
```

**描述**

address是一个returnAddress类型的数据，它由jsr_w指令推入操作数栈中。无符号byte型数据branchbyte1、branchbyte2、branchbyte3和branchbyte4用于构建一个32位有符号的分支偏移量，构建方式为(branchbyte1<<24)|(branchbyte1<<16)|(branchbyte1<<8)|branchbyte2。指令执行时，将产生一个当前位置的偏移坐标，并压入到操作数栈中。跳转目标地址必须在jsr_w指令所在的方法之内。

**注意**
jsr_w指令被用来与ret指令一同实现Java语言中的finally语句块。请注意，jsr_w指令推送address到操作数栈，ret指令从局部变量表中把它取出，这种不对称的操作是故意设计的。

虽然jsr_w指令拥有4个字节的分支偏移量，但是其他因素限定了一个方法的最大长度不能超过65535个字节。这个上限值可能会在将来发布的Java虚拟机中被提升。
