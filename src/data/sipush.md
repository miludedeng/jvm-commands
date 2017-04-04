###sipush

----

**操作**

将一个short类型数据入栈

**格式**

|sipush|
|--------:|
|byte1|
|byte2|

**结构**
```
sipush = 17 (0x11)
```

**操作数栈**
```
..., →
..., value
```

**描述**

无符号数byte1和byte2通过(byte1<<8)|byte2方式构造成一个short类型数值，然后此数值带符号扩展为一个int类型的值value，然后将value压入到操作数栈中。
