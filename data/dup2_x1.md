### dup2_x1

----

**操作**

复制操作数栈栈顶1个或2个值，并插入到栈顶

**格式**

|dup2_x1|
|--------:|

**结构**
```
dup2_x1 = 93(0x5d)
```

**操作数栈**

结构1:
```
..., value3，value2，value1→
..., value2，value1，value3，value2，value1
```
当value1、value2和value3都是表Java 虚拟机指令集中实际数据类型与运算数据类型之间的映射关系中列出的分一中的数据类型时满足结构1。

结构2:
```
..., value2，value1→
..., value1，value2，value1
```
当value1是表Java 虚拟机指令集中实际数据类型与运算数据类型之间的映射关系中列出的分二中的数据类型，而value2是分类一的数据类型时满足结构2。

**描述**

复制操作数栈栈顶1个或2个值，并按照原有的顺序插入到栈顶以下2个或3个值之后。
