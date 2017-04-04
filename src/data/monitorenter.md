### monitorenter

----

**操作**

进入一个对象的 monitor

**格式**

|monitorenter|
|--------:|

**结构**
```
monitorenter = 194(0xc2)
```

**操作数栈**
```
..., objectref →
...
```

**描述**

objectref必须为reference类型数据。

任何对象都有一个monitor与之关联。当且仅当一个monitor被持有后，它将处于锁定状态。线程执行到monitorenter指令时，将会尝试获取objectref所对应的monitor的所有权，那么:

如果objectref的monitor的进入计数器为0，那线程可以成功进入monitor，以及将计数器值设置为1。当前线程就是monitor的所有者。如果当前线程已经拥有objectref的monitor的所有权，那它可以重入这个monitor，重入时需将进入计数器的值加1。

如果其他线程已经拥有objectref的monitor的所有权，那当前线程将被阻塞，直到monitor的进入计数器值变为0时，重新尝试获取monitor的所有权。

**运行时异常**

当objectref为null时，monitorenter指令将抛出NullPointerException异常。

**注意**

一个monitorenter指令可能会与一个或多个monitorexit指令配合实现Java语言中synchronized同步语句块的语义。但monitorenter和monitorexit指令不会用来实现synchronized方法的语义，尽管它们确实可以实现类似的语义。当一个synchronized方法被调用时，自动进入对应的monitor，当方法返回时，自动退出monitor，这些动作是Java虚拟机在调用和返回指令中隐式处理的。

对象与它的monitor之间的关联关系有很多种实现方式，这些内容已超出规范的范围之外，但可以稍作介绍。monitor即可以实现为与对象一同分配和销毁，也可以在某条线程尝试获取对象所有权时动态生成，在没有任何线程持有对象所有权时自动释放。

在Java语言里面，同步的概念除了包括monitor的进入和退出操作以外，还包括有等待(Object.wait)和唤醒(Object.notifyAll和Object.notify)。这些操作包在Java虚拟机提供的标准包java.lang之中，而不是通过Java虚拟机的指令集来显式支持。
