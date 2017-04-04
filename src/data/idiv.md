### idiv

----

**操作**

int 类型数据除法

**格式**

|idiv|
|--------:|

**结构**
```
idiv = 108(0x6c)
```

**操作数栈**
```
..., value1，value2 →
..., result
```

**描述**

value1和value2都必须为int类型数据，指令执行时，value1和value2从操作数栈中出栈，并且将这两个数值相除(value1÷value2)，结果转换为int类型值result，最后result被压入到操作数栈中。

int类型的除法结果都是向零舍入的，这意味着n÷d的商q会在满足|d|×|q|≤|n|的前提下取尽可能大的整数值。另外，当|n|≥|d|并且n和d符号相同时，q的符号为正。而当|n|≥|d|并且n和d的符号相反时，q的符号为负。

有一种特殊情况不适合上面的规则:如果被除数是int类型中绝对值最大的负数，除数为-1。那运算时将会发生溢出，运算结果就等于被除数身。尽管这里发生了溢出，但是依然不会有异常抛出。

**运行时异常**

如果除数为零，idiv指令将抛出ArithmeticException异常。