### putstatic

----

**操作**

设置对象的静态字段值

**格式**

|putstatic|
|--------:|
|indexbyte1|
|indexbyte2|

**结构**
```
putstatic = 179(0xb3)
```

**操作数栈**
```
..., value →
...
```

**描述**

无符号数indexbyte1和indexbyte2用于构建一个当前类的运行时常量池的索引值，构建方式为(indexbyte1<<8)|indexbyte2，该索引所指向的运行时常量池项应当是一个字段的符号引用，它包了字段的名称和描述符，以及包该字段的类或接口的符号引用。这个字段的符号引用是已被解析过的。

在字段被成功解析之后，如果字段所在的类或者接口没有被初始化过，那指令执行时将会触发其初始化过程。

被putstatic指令存储到字段中的value值的类型必须与字段的描述符相匹配。如果字段描述符的类型是boolean、byte、char、short或者int，那么value必须为int类型。如果字段描述符的类型是float、long或者double，那value的类型必须相应为float、long或者double。如果字段描述符的类型是reference类型，那value必须为一个可与之匹配的类型。如果字段被声明为final的，那就只有在当前类的类初始化方法(<clinit>)中设置当前类的final字段才是合法的。

指令执行时，value从操作数栈中出栈，根据数值结合转换中定义的转换规则转换为value’，类的指定字段的值将被设置为value’。

**链接时异常**

在字段的符号引用解析过程中，任何在字段解析中的任何异常都可能会被抛出。

另外，如果已解析的字段是一个非静态(notstatic)字段，putstatic指令将会抛出一个IncompatibleClassChangeError异常。

另外，如果字段声明为final，那就只有在当前类的实例初始化方法(<clinit>)中设置当前类的final字段才是合法的，否则将会抛出IllegalAccessError异常。

**运行时异常**

另外，如果putstatic指令触发了所涉及的类或接口的初始化，那putstatic指令就可能抛出在初始化中描述到的任何异常。

**注意**

putstatic指令只有在接口初始化时才能用来设置接口字段的值，接口字段只会在接口初始化的时候初始化赋值一次。
