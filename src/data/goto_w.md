### goto_w

----

**操作**

分支跳转(宽范围)

**格式**

|goto_w|
|--------:|
|branchbyte1|
|branchbyte2|
|branchbyte3|
|branchbyte4|

**结构**
```
goto_w = 200 (0xc8)
```

**操作数栈**
```
无改变
```

**描述**

无符号byte型数据branchbyte1、branchbyte2、branchbyte3和branchbyte4用于构建一个32位有符号的分支偏移量，构建方式为(branchbyte1<<24)|(branchbyte1<<16)|(branchbyte1<<8)|branchbyte2。指令执行后，程序将会转到这个goto_w指令之后的，由上述偏移量确定的目标地址上继续执行。这个目标地址必须处于goto_w指令所在的方法之中。

**注意**

尽管goto_w指令拥有4字节宽度的分支偏移量，但是还受到方法最大字节码长度为65535字节(§4.11)的限制，这个限制值可能会在来的Java虚
拟机版中增大。
