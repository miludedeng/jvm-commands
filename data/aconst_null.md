### aconst_null

----

**操作**

从数组中加载一个 reference 类型数据到操作数栈

**格式**

| aconst_null |
| --------:   |


**结构**
```
aconst_null = 1(0x1)
```

**操作数栈**
```
... →
..., null
```

**描述**

将一个 null 值压入到操作数栈中。


**注意**

《Java 虚拟机规范》并没有强制规定 null 值的在虚拟机的内存中是如何实 际表示的。
