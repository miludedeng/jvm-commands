### frem

----

**操作**

float类型数据求余

**格式**

|frem|
|--------:|

**结构**
```
frem = 114(0x72)
```

**操作数栈**
```
..., value1，value2 →
..., result
```

**描述**

value1和value2都必须为float类型数据，指令执行时，value1和value2从操作数栈中出栈，并且经过数值集合转换后得到值value1’和value2’，接着将这两个数值求余，结果转换为float类型值result，最后result被压入到操作数栈中。

frem指令的运算结果与IEEE754中定义的remainder操作并不相同，IEEE754中的remainder操作使用舍入除法(RoundingDivision)而不是去尾触发(TruncatingDivision)来获得求余结果，因此这种运算与通常对整数的求余方式并不一致。Java虚拟机中定义的drem则是与虚拟机中整数求余指令(irem和lrem)保持了一致的行为，这可以与C语言中的fmod函数互相比较。

drem指令的运算结果通过以下规则获得:
* 如果value1’和value2’中有任意一个值为NaN，那运算结果即为NaN。
* 如果value1’和value2’两者都不为NaN，那运算结果的符号被除数的符号一致。
* 如果被除数是无穷大，或者除数为零，那运算结果为NaN。
* 如果被除数是有限值，而除数是无穷大，那运算结果等于被除数。
* 如果被除数为零，而除数是有限值，那运算结果等于被除数。
* 对于上述情况之外的场景，即任意一个操作数都不是无穷大、零以及NaN，就以value1’为被除数、value2’为除数使用浮点算术规则求余:result=value1’−(value2’∗q)，这里的q是一个整数，其符号与value1’÷value2’的符号相同，大小与他们的商相同。

尽管除数为零的情况可能发生，但是frem指令永远不会抛出任何运行时异常，上限溢出、下限溢出和进度丢失的情况也不会出现。

IEEE754规范中定义的remainder操作可以使用Math.IEEEremainder来完成。
