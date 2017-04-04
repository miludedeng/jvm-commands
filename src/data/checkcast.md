###checkcast

----

**操作**

检查对象是否符合给定的类型

**格式**

|checkcast|
|--------:|
|indexbyte1|
|indexbyte2|

**结构**
```
checkcast=192(0xc0)
```

**操作数栈**
```
...,objectref→
...,objectref
```

**描述**

objectref必须为reference类型的数据，indexbyte1和indexbyte2用于构建一个当前类的运行时常量池的索引值，构建方式为
(indexbyte1<<8)|indexbyte2，该索引所指向的运行时常量池项应当是一个类、接口或者数组类型的符号引用。

如果objectref为null的话，那操作数栈不会有任何变化。否则，参数指定的类、接口或者数组类型会被虚拟机解析。如果objectref可以转换为这个类、接口或者数组类型，那操作数栈就保持不变，否则checkcast指令将抛出一个ClassCastException异常。以下规则可以用来确定一个非空的objectref是否可以转换为指定的已解析类型:假设S是objectref所指向的对象的类型，T是进行比较的已解析的类、接口或者数组类型，checkcast指令根据这些规则来判断转换是否成立:
* 如果S是类类型(ClassType)，那么:
    * 如果T也是类类型，那S必须与T是同一个类类型，或者S是T所代表的类型的子类。
    * 如果T是接口类型，那S必须实现了T的接口。
* 如果S是接口类型(InterfaceType)，那么:
    * 如果T是类类型，那么T只能是Object。
    * 如果T是接口类型，那么T与S应当是相同的接口，或者T是S的父接口。
* 如果S是数组类型(ArrayType)，假设为SC[]的形式，这个数组的组件类型为SC，那么:
    * 如果T是类类型，那么T只能是Object。
    * 如果T是数组类型，假设为TC[]的形式，这个数组的组件类型为TC，那么下面两条规则之一必须成立:
        * TC和SC是同一个原始类型。
        * TC和SC都是reference类型，并且SC能与TC类型相匹配(以此处描述的规则来判断是否互相匹配)。

如果 T 是接口类型，那 T 必须是数组所实现的接口之一。


**链接时异常**

在类、接口或者数组的符号解析阶段，如果有任何异常发生，可以被认为是类和接口解析失败而抛。

**运行时异常**

如果 objectref 不能转换成参数指定的类、接口或者数组类型，checkcast 指令将抛出 ClassCastException 异常

**注意**

checkcast 指令与 instanceof 指令非常类似，它们之间的区别是如何处理 null 值的情况、测试类型转换的结果反馈方式(checkcast 是抛异常，而 instanceof 是返回一个比较结果)以及指令执行后对操作数栈的影响。
