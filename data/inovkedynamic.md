### inovkedynamic

----

**操作**

调用动态方法

**格式**

|inovkedynamic|
|--------:|
|indexbyte1|
|indexbyte2|
|0|
|0|

**结构**
```
invokedynamic = 186 (0xba)
```

**操作数栈**
```
..., [arg1， [arg2 ...]]→
...
```

**描述**

代码中每条invokedynamic指令出现的位置都被称为一个动态调用点(DynamicCallSite)。
首先。无符号数indexbyte1和indexbyte2用于构建一个当前类(§2.6)的运行时常量池的索引值，构建方式为(indexbyte1<<8)|indexbyte2，该索引所指向的运行时常量池项应当是一个调用点限定符(§5.1)的符号引用。指令第3、4个操作数固定为0。调用点限定符会被解析(§5.4.3.6)为一个动态调用点，从中可以获取到java.lang.invoke.MethodHandle实例的引用、java.lang.invoke.MethodType实例的引用和所涉及的静态参数的引用。接着，作为调用点限定符解析过程的一部分，引导方法将会被执行。如同使用invokevirtual指令调用普通方法那样，会包一个运行时常量池的索引指向一个带有如下属性的方法(§5.1):
* 此方法名为invoke。
* 此方法描述符中的返回值是java.lang.invoke.CallSite。
* 此方法描述符中的参数来源自操作数栈中的元素，包括如下顺序排列的4个参数:
    * java.lang.invoke.MethodHandle
    * java.lang.invoke.MethodHandles.Lookup
    * String
    * java.lang.invoke.MethodType
* 如果调用点限定符有静态参数，那么这些参数的参数类型应附加在方法描述符的参数类型中，以便在调用时按顺序入栈至操作数栈。静态参数的参数类型可以包括:
    * Class
    * java.lang.invoke.MethodHandle
    * java.lang.invoke.MethodType
    * String
    * int
    * long
    * float
    * double
* 在java.lang.invoke.MethodHandle之中可以提供关于在哪个类中能找到方法的符号引用所对应的实际方法的信息。

引导方法执行前，下面各项内容将会按顺序压入到操作数栈中:
* 用于代表引导方法的java.lang.invoke.MethodHandle对象的引用。
* 用于确定动态调用点发生位置的java.lang.invoke.MethodHandles.Lookup对象的引用。
* 用于确定调用点限定符中方法名的String对象引用。
* 在方法限定符中出现的各种静态参数，包括:类、方法类型、方法句柄、字符串以及各种数值类型都必须按照他们在方法限定符中出现的顺序依次入栈(此处基类型不会发生自动装箱)。

只要引导方法能够被正确调用，它的描述符可以是不精确的。举个例子，引导方法的第一个参数应该是java.lang.invoke.MethodHandles.Lookup，但是在可以使用Object来代替，返回值应该是java.lang.invoke.CallSite，也可以使用Object来代替。如果引导方法是一个变长参数方法(VariableArityMethod)，那某些(甚至是全部)上面描述中要压入到操作数栈的参数会被包在一个数组参数之中。

引导方法的调用发生在试图解析动态方法调用点的调用点限定符的那条线程上，如果同时有多条线程进行此操作，那引导方法将会被并发调用。因此，如果引导方法中有访问公有数据的话，需要注意多线程竞争问题，对公有数据访问施行适当的保护措施。

引导方法执行后的返回值是一个java.lang.invoke.CallSite或其子类的实例，这个对象被称为调用点对象(CallSiteObject)，此对象的引用将会从操作数栈中出栈，就像invokevirtual指令执行过程一样。如果多条线程同时执行了一个动态调用点的引导方法，那Java虚拟机必须选择其中一个引导方法的返回值作为调用点对象，并将其发布到所有线程之中。此动态调用点中其余的引导方法会完成整个执行过程，但是它们的返回结果将被忽略掉，转为使用哪个被Java虚拟机选中的调用点对象来继续执行。调用点对象拥有一个类型描述符(一个java.lang.invoke.MethodType的实例)，它必须语义上等同于调用点限定符中方法描述符内所包的java.lang.invoke.MethodType对象。

调用点限定符解析的结果是一个调用点对象，此对象将会与它的动态调用点永久绑定起来。

绑定于动态调用点的调用点对象所表示的方法句柄将会被调用，这次调用就和执行invokevirtual指令一样，会带有一个指向运行时常量池的索引，它指向的常量池项是一个方法的符号引用，此方法具备如下属性:
* 方法名为invokeExact。
* 方法描述符为调用点限定符中包的描述符。
* 由java.lang.invoke.MethodHandle来确定在哪个类中查找方法的符号引用所对应的方法。

指令执行时，操作数栈中的内容会被虚拟机解释为包一个调用点对象的引用以及跟随nargs个参数值，这些参数的数量、类型和顺序都必须与调用点限定符中的方法描述符保持一致。

**链接时异常**

如果调用点限定符的符号引用解析过程中抛出了异常E，那invokedynamic指令必须抛出包装着异常E的BootstrapMethodError异常。另外，在调用点限定符的后续解析过程中，如果引导方法执行过程因异常E而异常退出，那invokedynamic指令必须抛出包装着异常E的BootstrapMethodError异常。(这可能是由于引导方式有错误的参数长度、参数类型或者返回值而导致java.lang.invoke.MethodHandle.invoke方法抛出了java.lang.invoke.WrongMethodTypeException异常。)另外，在调用点限定符的后续解析过程中，如果引导方法的返回值不是一个java.lang.invoke.CallSite的实例，那invokedynamic指令必须抛出BootstrapMethodError异常。另外，在调用点限定符的后续解析过程中，如果调用点对象的目标的类型描述符与方法限定符中所包括的方法描述符不一致，那invokedynamic指令必须抛出BootstrapMethodError异常。

**运行时异常**

如果动态调用点的调用点限定符解析过程成功完成，那就意味着将有一个非空的java.lang.invoke.CallSite的实例绑定到该动态调用点之上。因此，操作数栈中表示调用点目标的对象不会为空，这也意味着，调用点限定符中的方法描述符与等效于被invokevirtual指令所调用方法句柄那个方法句柄的类型描述符语义上是一致的。
上面描述的意思是已经绑定了调用点对象的invokedynamic指令，永远不可能抛出NullPointerException异常或者java.lang.invoke.WrongMethodTypeException异常。
