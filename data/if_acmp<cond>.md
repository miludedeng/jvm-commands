### if_acmp\<cond>

----

**操作**

reference 数据的据条件分支判断

**格式**

|if_acmp\<cond>|
|--------:|
|branchbyte1|
|branchbyte2|

**结构**
```
if_acmpeq = 165(0xa5)
if_acmpne = 166(0xa6)
```

**操作数栈**
```
..., value1，value2 →
...
```

**描述**

value1和value2都必须为reference类型数据，指令执行时，value1和value2从操作数栈中出栈，然后进行比较运算，比较的规则如下:

* eq当且仅当value1 = value2比较的结果为真。
* ne当且仅当value1 ≠ value2比较的结果为真。

如果比较结果为真，那无符号byte型数据branchbyte1和branchbyte2用于构建一个16位有符号的分支偏移量，构建方式为(branchbyte1 << 8) | branchbyte2。指令执行后，程序将会转到这个if_acmp<cond>指令之后的，由上述偏移量确定的目标地址上继续执行。这个目标地址必须处于if_acmp\<cond>指令所在的方法之中。另外，如果比较结果为假，那程序将继续执行if_acmp\<cond>指令后面的其他直接码指令。
