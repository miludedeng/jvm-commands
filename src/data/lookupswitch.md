### lookupswitch

----

**操作**

根据键值在跳转表中寻找配对的分支并进行跳转

**格式**

|lookupswitch|
|--------:|
|\<0-3 byte pad>|
|defaultbyte1|
|defaultbyte2|
|defaultbyte3|
|defaultbyte4|
|npairs1|
|npairs2|
|npairs3|
|npairs4|
| match-offset pairs...|

**结构**
```
lookupswitch = 171(0xab)
```

**操作数栈**
```
..., key →
...
```

**描述**

lookupswitch是一条变长指令。紧跟lookupswitch之后的0至3个字节作为空白填充，而后面defaultbyte1至defaultbyte4等代表了一个个由4个字节组成的、从当前方法开始(第一条操作码指令)计算的地址，即紧跟随空白填充的是一系列32位有符号整数值:包括默认跳转地址default、匹配坐标的数量npairs以及npairs组匹配坐标。其中，npairs的值应当大
于或等于0，每一组匹配坐标都包了一个整数值match以及一个有符号32位偏移量offset。上述所有的32位有符号数值都由以下形式构成:(byte1<<24)|(byte2<<16)|(byte3<<8)|byte4。

lookupswitch指令之后所有的匹配坐标必须以其中的match值排序，按照升序储存。

指令执行时，int型的key从操作数栈中出栈，与每一个match值相互比较。如果能找到一个与之相等的match值，那就就以这个match所配对的偏移量offset作为目标地址进行跳转。如果没有配对到任何一个match值，那就是用default作为目标地址进行跳转。程序从目标地址开始继续执行。

目标地址既可能从npairs组匹配坐标中得出，也可能从default中得出，但无论如何，最终的目标地址必须在包lookupswitch指令的那个方法之内。

**注意**

当且仅当包lookupswitch指令的方法刚好位于4字节边界上，lookupswitch指令才能确保它的所有操作数都是4直接对齐的。所有的匹配坐标以有序方式存储是为了查找时的效率考虑。
