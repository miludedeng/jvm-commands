### newarray

----

**操作**

创建一个数组

**格式**

|newarray|
|--------:|
|atype|

**结构**
```
newarray = 188(0xbc)
```

**操作数栈**
```
..., count →
..., arrayref
```

**描述**

count为int类型的数据，指令执行时它将从操作数栈中出栈，它代表了要创建多大的数组。

atype为要创建数组的元素类型，它将为以下值之一:

|数组类型|atype|
|---|---|
|T_BOOLEAN|4|
|T_CHAR|5|
|T_FLOAT|6|
|T_DOUBLE|7|
|T_BYTE|8|
|T_SHORT|9|
|T_INT|10|
|T_LONG|11|

一个以atype为组件类型、以count值为长度的数组将会被分配在GC堆中，并且一个代表该数组的reference类型数据arrayref压入到操作数栈中。这个新数组的所有元素将会被分配为相应类型的初始值。

**运行时异常**

如果count值小于0的话，newarray指令将会抛出一个NegativeArraySizeException异常。

**注意**

在Oracle实现的Java虚拟机中，布尔类型(atype值为T_BOOLEAN)是以8位储存，并使用baload和bastore指令操作，这些指令也可以操作byte类型的数组。其他Java虚拟机可能有自己的boolean型数组实现方式，但必须保证baload和bastore指令依然使用于它们的boolean类型数组。
