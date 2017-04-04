### tableswitch

----

**操作**

根据索引值在跳转表中寻找配对的分支并进行跳转

**格式**

|tableswitch|
|--------:|
|\<0-3bytepad>|
|defaultbyte1|
|defaultbyte2|
|defaultbyte3|
|defaultbyte4|
|lowbyte1|
|lowbyte2|
|lowbyte3|
|lowbyte4|
|highbyte1|
|highbyte2|
|highbyte3|
|highbyte4|
|jumpoffsets...|



**结构**
```
tableswitch = 170 (0xaa)
```

**操作数栈**
```
... ,index →
...
```

**描述**

tableswitch是一条变长指令。紧跟tableswitch之后的0至3个字节作为空白填充，而后面defaultbyte1至defaultbyte4等代表了一个个由4个字节组成的、从当前方法开始(第一条操作码指令)计算的地址，即紧跟随空白填充的是一系列32位有符号整数值:包括默认跳转地址default、高位值high以及低位值low。在此之后，是high-low+1个有符号32位偏移量offset，其中要求low小于或等于high。这high-low+1个32位有符号数值形成一张零基址跳转表(0-BasedJumpTable)，所有上述的32位有符号数都以(byte1<<24)|(byte2<<16)|(byte3<<8)|byte4方式构成。

指令执行时，int型的index从操作数栈中出栈，如果index比low值小或者比high值大，那就是用default作为目标地址进行跳转。否则，在跳转表中第index-low个地址值将作为目标地址进行跳转，程序从目标地址开始继续执行。

目标地址既可能从跳转表匹配坐标中得出，也可能从default中得出，但无论如何，最终的目标地址必须在包tableswitch指令的那个方法之内。

**注意**

当且仅当包tableswitch指令的方法刚好位于4字节边界上，lookupswitch指令才能确保它的所有操作数都是4直接对齐的。
