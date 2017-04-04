###dsub

----

**操作**

double类型数据相减

**格式**

|dsub|
|--------:|

**结构**
```
dsub = 103(0x67)
```

**操作数栈**
```
..., value1，value2→
..., result
```

**描述**

value1和value2都必须为double类型数据，指令执行时，value1和value2从操作数栈中出栈，并且经过数值集合转换后得到值value1’和value2’，接着将这两个数值相减(result=value1’−value2’)，结果转换为double类型值result，最后result被压入到操作数栈中。

对于一般double类型数据的减法来说，a-b与a+(-b)的结果永远是一致的，但是对于dsub指令来说，与零相减的符号则会相反，因为如果x是+0.0的话，那0.0-x等于+0.0，但-x等于-0.0。

Java虚拟机必须支持IEEE754中定义的逐级下溢(GradualUnderflow)，尽管指令执行期间，上溢、下溢以及精度丢失等情况都有可能发生，但dsub指令永远不会抛出任何运行时异常。
