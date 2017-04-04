### aaload

----

**操作**

从操作数栈读取一个 reference 类型数据存入到数组中

**格式**

| aastore     |
| --------:   |


**结构**
```
aastore = 83(0x53)
```

**操作数栈**
```
..., arrayref, index, value →
...

```

**描述**

arrayref 必须是一个 reference 类型的数据，它指向一个组件类型为 reference 的数组，index 必须为 int 类型，value 必须为 reference
类型。指令执行后，arrayref、index 和 value 同时从操作数栈出栈，value 存储到 index 作为索引定位到数组元素中。
在运行时，value 的实际类型必须与 arrayref 所代表的数组的组件类型相 匹配。具体地说，reference 类型值 value(记作 S)能匹配组件类型为 reference(记作 T)的数组的前提是:
* 如果 S 是类类型(Class Type)，那么:
    * 如果T也是类类型，那S必须与T是同一个类类型，或者S是T所代表的类型的子类。
    * 如果T是接口类型，那S必须实现了T的接口。
* 如果 S 是接口类型(Interface Type)，那么:
    * 如果T是类类型，那么T只能是Object。
    * 如果T是接口类型，那么T与S应当是相同的接口，或者T是S的父接口。
* 如果S是数组类型(ArrayType)，假设为SC[]的形式，这个数组的组件类型为 SC，那么:
    * 如果T是类类型，那么T只能是Object。
    * 如果T是数组类型，假设为TC[]的形式，这个数组的组件类型为TC，那么下面两条规则之一必须成立:
        * TC和SC是同一个原始类型。
        * TC和SC都是reference类型，并且SC能与TC类型相匹配(以此处描述的规则来判断是否互相匹配)。
* 如果T是接口类型，那T必须是数组类型所实现的接口之一。

**运行时异常**

如果 arrayref 为 null，aaload 指令将抛出 NullPointerException 异 常。
另外，如果 index 不在 arrayref 所代表的数组上下界范围中，aaload 指 令将抛出 ArrayIndexOutOfBoundsException 异常。
