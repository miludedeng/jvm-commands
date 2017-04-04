###dup2_x2

----

**操作**

复制操作数栈栈顶 1 个或 2 个值，并插入到栈顶以下 2 个、3 个或者 3 个值之 后

**格式**

|dup2_x2|
|--------:|

**结构**
```
dup2_x2 = 94(0x5e)
```

**操作数栈**
结构1:
```
..., value4，value3，value2，value1→
..., value2，value1，value4，value3，value2，value1
```
当value1、value2、value3和value4全部都是表Java 虚拟机指令集中实际数据类型与运算数据类型之间的映射关系中列出的分一中的数据类型时满足结构1。

结构2:
```
..., value3，value2，value1→
..., value1，value3，value2，value1
```
当value1是表Java 虚拟机指令集中实际数据类型与运算数据类型之间的映射关系中列出的分二中的数据类型，而value2和value3是分类一的数据类型时满足结构2。

结构3:
```
..., value3，value2，value1→
..., value2，value1，value3，value2，value1
```
当value1和value2是表Java 虚拟机指令集中实际数据类型与运算数据类型之间的映射关系中列出的分一中的数据类型，而value3是分类二的数据类型时满足结构3。

结构4:
```
..., value2，value1→
..., value1，value2，value1
```
当value1和value2是表Java 虚拟机指令集中实际数据类型与运算数据类型之间的映射关系中列出的分二中的数据类型时满足结构4。

**描述**

复制操作数栈栈顶1个或2个值，并按照原来的顺序插入到栈顶以下2个、3个或者3个值之后。
