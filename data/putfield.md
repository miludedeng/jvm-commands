### putfield

----

**操作**

设置对象字段

**格式**

|putfield|
|--------:|
|indexbyte1|
|indexbyte2|

**结构**
```
putfield = 181(0xb5)
```

**操作数栈**
```
..., objectref，value →
...
```

**描述**

无符号数indexbyte1和indexbyte2用于构建一个当前类(§2.6)的运行时常量池的索引值，构建方式为(indexbyte1<<8)|indexbyte2，该索引所指向的运行时常量池项应当是一个字段(§5.1)的符号引用，它包了字段的名称和描述符，以及包该字段的类的符号引用。objectref所引用的对象不能是数组类型，如果取值的字段是protected的，并且这个字段是当前类的父类成员，并且这个字段没有在同一个运行时包中定义过，那objectref所指向的对象的类型必须为当前类或者当前类的子类。

这个字段的符号引用是已被解析过的。被putfield指令存储到字段中的value值的类型必须与字段的描述符相匹配。如果字段描述符的类型是boolean、byte、char、short或者int，那么value必须为int类型。如果字段描述符的类型是float、long或者double，那value的类型必须相应为float、long或者double。如果字段描述符的类型是reference类型，那value必须为一个可与之匹配(JLS§5.2)的类型。如果字段被声明为final的，那就只有在当前类的实例初始化方法(<init>)中设置当前类的final字段才是合法的。

指令执行时，value和objectref从操作数栈中出栈，objectref必须为reference类型数据，value将根据(§2.8.3)中定义的转换规则转换为value’，objectref的指定字段的值将被设置为value’。

**链接时异常**

在字段的符号引用解析过程中，任何在字段解析中的任何异常都可能会被抛出。

另外，如果已解析的字段是一个静态(static)字段，getfield指令将会抛出一个IncompatibleClassChangeError异常。

另外，如果字段声明为final，那就只有在当前类的实例初始化方法(<init>)中设置当前类的final字段才是合法的，否则将会抛出IllegalAccessError异常。

**运行时异常**

另外，如果objectref为null，putfield指令将抛出一个NullPointerException.异常。
