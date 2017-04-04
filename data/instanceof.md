###instanceof

----

**操作**

判断对象是否指定的类型

**格式**

|instanceof|
|--------:|
|indexbyte1|
|indexbyte2|

**结构**
```
instanceof = 193(0xc1)
```

**操作数栈**
```
..., value →
..., result

```

**描述**

objectref必须是一个reference类型的数据，在指令执行时，objectref将从操作数栈中出栈。无符号数indexbyte1和indexbyte2用于构建一个当前类(§2.6)的运行时常量池的索引值，构建方式为(indexbyte1<<8)|indexbyte2，该索引所指向的运行时常量池项应当是一个类、接口或者数组类型的符号引用。

如果objectref为null的话，那instanceof指令将会把int值0推入到操作数栈栈顶。

另外，如果参数指定的类、接口或者数组类型会被虚拟机解析。如果objectref可以转换为这个类、接口或者数组类型，那instanceof指令将会把int值1推入到操作数栈栈顶;否则，推入栈顶的就是int值0。

以下规则可以用来确定一个非空的objectref是否可以转换为指定的已解析类型: 假设S是objectref所指向的对象的类型，T是进行比较的已解析的类、接口或者数组类型，checkcast指令根据这些规则来判断转换是否成立:
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

**链接时异常**

在类、接口或者数组的符号解析阶段，任何在解析中的异常都可能被抛出。

**运行时异常**

如果objectref不能转换成参数指定的类、接口或者数组类型，checkcast指令将抛出ClassCastException异常

**注意**

instanceof指令与checkcast指令非常类似，它们之间的区别是如何处理null值的情况、测试类型转换的结果反馈方式(checkcast是抛异常，而instanceof是返回一个比较结果)以及指令执行后对操作数栈的影响。
