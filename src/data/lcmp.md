### lcmp

----

**操作**

比较 2 个 long 类型数据的大小

**格式**

|lcmp|
|--------:|

**结构**
```
lcmp = 148(0x94)
```

**操作数栈**
```
..., value1，value2 →
..., result
```

**描述**

value1和value2都必须为long类型数据，指令执行时，value1和value2从操作数栈中出栈，使用一个int数值作为比较结果:如果value1大于value2，结果为1;如果value1等于value2，结果为0;如果value1小于value2，结果为-1，最后比较结果被压入到操作数栈中。
