### ret

----

**操作**

代码片段中返回

**格式**

|ret|
|--------:|
|index|

**结构**
```
ret = 169(0xa9)
```

**操作数栈**
```
无变化
```

**描述**

index是一个0至255之间的无符号数，它代表一个当前栈帧(§2.6)的局部变量表的索引值，在该索引位置应为一个returnAddress类型的局部变量，指令执行后，将该局部变量的值更新到Java虚拟机的PC寄存器中，令程序从修改后的位置继续执行。

**注意**

ret指令被用来与jsr、jsr_w指令一同实现Java语言中的finally语句块。请注意，jsr_w指令推送address到操作数栈，ret指令从局部变量表中把它取出，这种不对称的操作是故意设
计的。

ret指令不应与return指令混为一谈，return是在没有返回值的方法返回时使用。

ret指令可以与wide指令联合使用，以实现使用2字节宽度的无符号整数作为索引来访问局部变量表。
