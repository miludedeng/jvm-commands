### multianewarray

----

**操作**

创建一个新的多维数组

**格式**

|multianewarray|
|--------:|
|indexbyte1|
|indexbyte2|
|dimensions|

**结构**
```
multianewarray = 197(0xc5)
```

**操作数栈**
```
..., count1，[count2，...] →
... arrayref
```

**描述**

dimensions操作数是一个无符号byte类型数据，它必须大于或等于1，代表创建数组的维度值。相应地，操作数栈中必须包dimensions个数值，数组每一个值代表每个维度中需要创建的元素数量。这些值必须为非负数int类型数据。count1描述第一个维度的长度，count2描述第二个维度的长度，依此类推。

指令执行时，所有count都将从操作数栈中出栈，无符号数indexbyte1和indexbyte2用于构建一个当前类(§2.6)的运行时常量池的索引值，构建方式为(indexbyte1<<8)|indexbyte2，该索引所指向的运行时常量池项应当是一个类、接口或者数组类型的符号引用，这个类、接口或者数组类型应当是已被解析的。指令执行产生的结果将会是一个维度不小于dimensions的数组。

一个新的多维数组将会被分配在GC堆中，如果任何一个count值为0，那就不会分配维度。数组第一维的元素被初始化为第二维的子数组，后面每一维都依此类推。数组的最后一个维度的元素将会被分配为数组元素类型的初始值。并且一个代表该数组的reference类型数据arrayref压入到操作数栈中。

**链接时异常**

在类、接口或者数组的符号解析阶段，任何在解析中描述的异常都可能被抛出。

另外，如果当前类没有权限访问数组的元素类型，multianewarray指令将会抛出IllegalAccessError异常。

**运行时异常**

如果dimensions值小于0的话，multianewarray指令将会抛出一个NegativeArraySizeException异常。

**注意**

对于一维数组来说，使用newarray或者anewarray指令创建会更加高效。在运行时常量池中确定的数组类型维度可能比操作数栈中dimensions所代表的维度更高，在这种情况下，multianewarray指令只会创建数组的第一个维度。
