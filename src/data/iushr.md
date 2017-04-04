### iushr

----

**操作**

int 数值逻辑右移运算

**格式**

|iushr|
|--------:|

**结构**
```
iushr=124(0x7c)
```

**操作数栈**
```
..., value1，value2 →
..., result
```

**描述**

value1和value2都必须为int类型数据，指令执行时，value1和value2从操作数栈中出栈，然后将value1右移s位，s是value2低5位所表示的值，计算后把运算结果入栈回操作数栈中。

**注意**

假设value1是正数并且s为value2与0x1f算术与运算后的结果，那iushr指令的运算结果与value1>>s的结果是一致的;假设value1是负数，那iushr指令的运算结果与表达式(value1>>s)+(2<<~s)一致。附加的(2<<~s)操作用于取消符号位的移动。位移的距离实际上被限制在0到31之间，