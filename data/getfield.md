### getfield

----

**操作**

获取对象的字段值

**格式**

|getfield|
|--------|
|indexbyte1|
|indexbyte2|

**结构**
```
getfield = 180 (0xb4)
```

**操作数栈**
```
.., objectref →
..., value
```

**描述**

objectref必须是一个reference类型的数据，在指令执行时，objectref将从操作数栈中出栈。无符号数indexbyte1和indexbyte2用于构建一个当前类的运行时常量池的索引值，构建方式为(indexbyte1<<8)|indexbyte2，该索引所指向的运行时常量池项应当是一个字段的符号引用，它包了字段的名称和描述符，以及包该字段的类的符号引用。这个字段的符号引用是已被解析过的。指令执行后，被objectref所引用的对象中该字段的值将会被取出，并推入到操作数栈顶。objectref所引用的对象不能是数组类型，如果取值的字段是protected的，并且这个字段是当前类的父类成员，并且这个字段没有在同一个运行时包中定义过，那objectref所指向的对象的类型必须为当前类或者当前类的子类。

**链接时异常**

在解析类或接口引用时发生的任何异常都可能当作是解析字段引用的异常一样被抛出。

另外，如果已解析的字段是一个静态(static)字段，getfield指令将会抛出一个IncompatibleClassChangeError异常

**运行时异常**

如果objectref为null，getfield指令将抛出一个NullPointerException异常。

**注意**

不可以使用getfield指令来访问数组对象的length字段，如果要访问这个字段，应当使用arraylength指令。
