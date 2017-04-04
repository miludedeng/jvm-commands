### invokeinterface

----

**操作**

调用接口方法

**格式**

|invokeinterface|
|--------:|
|indexbyte1|
|indexbyte2|
|count|
|0|

**结构**
```
invokeinterface = 185(0xb9)
```

**操作数栈**
```
..., objectref，[arg1，[arg2 ...]] →
...
```

**描述**

无符号数indexbyte1和indexbyte2用于构建一个当前类的运行时常量池的索引值，构建方式为(indexbyte1<<8)|indexbyte2，
该索引所指向的运行时常量池项应当是一个接口方法(§5.1)的符号引用，它包了方法的名称和描述符，以及包该方法的接口的符号引用。这个方法的符号引用是已被解析过的(§5.4.3.2)，而且这个方法不能是实例初始化方法(§2.9)和类或接口的初始化方法。

操作数count是一个无符号byte型数据，而且不能为零。objectref必须是一个reference类型的数据。在操作数栈中，objectref之后还跟随着连续n个参数值，这些参数的数值、数据类型和顺序都必须遵循接口方法的描述符中的描述。invokeinterface指令的第四个参数规定永远为byte类型的0。

假设C是objectref所对应的类，虚拟机将按下面规则查找实际执行的方法:
* 如果C中包了名称和描述符都和要调用的接口方法一致的方法，那这个方法就会被调用，查找过程终止。
* 另外，如果C有父类，查找过程将按顺序递归搜索C的直接父类，如果超类中能搜索到名称和描述符都和要调用的接口方法一致的方法，那这个方法就会被调用。
* 另外，如果抛出AbstractMethodError异常。

如果要调用的是同步方法，那与objectref相关的管程(monitor)将会进入或者重入，就如当前线程中同执行了monitorenter指令一般。如果要调用的不是地方法，n个args参数和objectref将从操作数栈中出栈。方法调用的时候，一个新的栈帧将在Java虚拟机栈中被创建出来，objectref和连续的n个参数将存放到新栈帧的局部变量表中，objectref存为局部变量0，arg1存为局部变量1(如果arg1是long或double类型，那将占用局部变量1和2两个位置)，依此类推。参数中的浮点类型数据在存入局部变量之前会先进行数值集合转换。新栈帧创建后就成为当前栈帧，Java虚拟机的PC寄存器被设置成指向调用方法的首条指令，程序就从这里开始继续执行。

如果要调用的是地方法，要是这些平台相关的代码尚绑定到虚拟机中的话，绑定动作先要完成。指令执行时，n个args参数和objectref将从操作数栈中出栈并作为参数传递给实现此方法的代码。参数中的浮点类型数据在传递给调用方法之前会先进行数值集合转换。参数传递和代码执行都会以具体虚拟机实现相关的方式进行。当这些平台相关的代码返回时:
* 如果这个地方法是同步方法，那与objectref相关的管程状态将会被更新，也可能退出了，就如当前线程中同执行了monitorexit指令一般。

* 如果这个地方法有返回值，那平台相关的代码返回的数据必须通过某种实现相关的方式转换成地方法所定义的Java类型，并压入到操作数栈中。

**链接时异常**

在类、接口或者数组的符号解析阶段，任何在解析中的异常都可能被抛出。

**运行时异常**

如果objectref为null，invokeinterface指令将抛出NullPointerException异常。

另外，如果objectref所对应的对象并实现接口方法中所需的接口，那invokeinterface指令将抛出IncompatibleClassChangeError异常。另外，如果没有找到任何名称和描述符都与要调用的接口方法一致的方法，那invokeinterface指令将抛出AbstractMethodError异常。

另外，如果搜索到的方法不是public的话，那invokeinterface指令将抛出IllegalAccessError异常。

另外，如果搜索到的方法是abstract的话，那invokeinterface指令将抛出AbstractMethodError异常。

另外，如果搜索到的方法是native的话，当实现代码实现代码无法绑定到虚拟机中，那invokeinterface指令将抛出UnsatisfiedLinkError异常。

**注意**

invokeinterface指令的count操作数用于确定参数的数量，long和double类型的参数占用2个数量单位，而其他类型的参数占用1个数量单位。

其实这些信息完全可以从方法的描述符中获取到，有这个参数完全是历史原因。

invokeinterface指令的第四个操作数是为了给Oracle实现的虚拟机的额外操作数而预留的空间，invokeinterface指令会在运行时被替换为特殊的其他指令，这必须要保持向后兼容性。

objectref和随后的n个参数并不一定与局部变量表的数量一一对应，因为参数中的long和double类型参数需要使用2个连续的局部变量来存储，因此在参数传递的时候，可能需要比参数个数更多的局部变量。
