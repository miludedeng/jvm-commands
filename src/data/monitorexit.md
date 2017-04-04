### monitorexit

----

**操作**

退出一个对象的 monitor

**格式**

|monitorexit|
|--------:|

**结构**
```
monitorexit = 195(0xc3)
```

**操作数栈**
```
..., objectref →
...
```

**描述**

objectref必须为reference类型数据。

执行monitorexit指令的线程必须是objectref对应的monitor的所有者。

指令执行时，线程把monitor的进入计数器值减1，如果减1后计数器值为0，那线程退出monitor，不再是这个monitor的拥有者。其他被这个monitor阻塞的线程可以尝试去获取这个monitor的所有权。

**运行时异常**

当objectref为null时，monitorexit指令将抛出NullPointerException异常。

另外，如果执行monitorexit的线程原并没有这个monitor的所有权，那monitorexit指令将抛出IllegalMonitorStateException.异常。另外，如果Java虚拟机执行monitorexit时发现违反了§2.11.10中第二条规则，那monitorexit指令将抛出IllegalMonitorStateException.异常。

**注意**

一个monitorenter指令可能会与一个或多个monitorexit指令配合实现Java语言中synchronized同步语句块的语义。但
monitorenter和monitorexit指令不会用来实现synchronized方法的语义，尽管它们确实可以实现类似的语义。

Java虚拟机对在synchronized方法和synchronized同步语句块中抛出的异常有不同的处理方式:

在synchronized方法正常完成时，monitor通过Java虚拟机的返回指令退出。在synchronized方法非正常完成时，monitor通过Java虚拟机的athrow指令退出。

当有异常从synchronized同步语句块抛出，将由Java虚拟机异常处理机制(§3.14)来保证退出了之前在synchronized同步语句块开始时进入的monitor。
