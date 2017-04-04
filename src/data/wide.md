### wide

----

**操作**

扩展局部变量表索引

**格式1**

|wide|
|--------:|
|\<opcode\>|
|indexbyte1|
|indexbyte2|

当\<opcode\>为iload，fload，aload，lload，dload，istore，fstore，astore，lstore，dstore以及ret指令之一时。

**格式2**

|wide|
|--------:|
|iinc|
|indexbyte1|
|indexbyte2|
|constbyte1|
|constbyte2|

**结构**
```
wide = 196(0xc4)
```

**操作数栈**
```
与被扩展的指令一致
```

**描述**

wide指令用于扩展其他指令的行为，取决于被不同扩展的指令，它可以有两种形式。第一种形式是当被扩展指令为iload，fload，aload，lload，dload，istore，fstore，astore，lstore，dstore以及ret指令之一时使用，第二种形式仅当被扩展指令为iinc时使用。

无论哪种形式，wide指令后面都跟随者被扩展指令的操作码，之后是两个无符号byte型数值indexbyte1和indexbyte2，它们通过(indexbyte1<<8)|indexbyte2的形式构成一个指向当前栈帧的局部变量表的16位无符号索引。随后，wide使用这个被新计算出来的索引值替换掉被扩展指令中的索引参数，如果被扩展指令为lload，dload，lstore以及dstore指令，那index和index+1都必须为合法的局部变量索引值。对于wide指令的第二种形式，在indexbyte1和indexbyte2后面还有另外两个无符号byte型数值constbyte1和constbyte2，它们将以(constbyte1<<8)|constbyte2的形式构成一个有符号的16位常量。

被wide指令扩展的那些指令，行为上与原有指令的语义没有任何区别，仅仅是索引参数被替换了而已。对于wide指令的第二种形式，则是有了更大的增加范围。

**注意**

虽然我们所wide指令扩展了其他指令。实际上更准确的wide指令修改了这些指令的操作数，而不是改变这些指令的来语义。对于iinc指令来说，则是被修改了全部两个操作数。被wide指令扩展的那些指令不应当脱离wide指令直接执行，即不能有任何跳转指令的目标是这些跟随在wde指令之后的字节码指令。
