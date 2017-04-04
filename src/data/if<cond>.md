### if\<cond>

----

**操作**

整数与零比较的条件分支判断

**格式**

|if\<cond>|
|--------:|
|branchbyte1|
|branchbyte2|

**结构**
```
ifeq = 153(0x99)
ifne = 154(0x9a)
iflt = 155(0x9b)
ifge = 156(0x9c)
ifgt = 157(0x9d)
ifle = 158(0x9e)
```

**操作数栈**
```
..., value →
...
```

**描述**

value必须为int类型数据，指令执行时，value从操作数栈中出栈，然后与零值进行比较(所有比较都是带符号的)，比较的规则如下:
* eq当且仅当value=0比较的结果为真。
* ne当且仅当value≠0比较的结果为真。
* lt当且仅当value<0比较的结果为真。
* le当且仅当value≤0比较的结果为真。
* ge当且仅当value>0比较的结果为真。
* ge当且仅当value≥0比较的结果为真。

如果比较结果为真，那无符号byte型数据branchbyte1和branchbyte2用于构建一个16位有符号的分支偏移量，构建方式为(branchbyte1<<8)|branchbyte2。指令执行后，程序将会转到这个if\<cond>指令之后的，由上述偏移量确定的目标地址上继续执行。这个目标地址必须处于if\<cond>指令所在的方法之中。

另外，如果比较结果为假，那程序将继续执行if_acmp\<cond>指令后面的其他直接码指令。
