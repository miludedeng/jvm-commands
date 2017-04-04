### ifnonnull

----

**操作**

引用不为空的条件分支判断

**格式**

|  ifnonnull |
| --------:   |
|branchbyte1|
|branchbyte2|

**结构**
```
ifnonnull = 199(0xc7)
```

**操作数栈**
```
..., value →
...
```

**描述**

value 必须为 reference 类型数据，指令执行时，value 从操作数栈中出栈， 然后判断是否为 null，如果 value 不为 null，那无符号 byte 型数据branchbyte1 和 branchbyte2 用于构建一个 16 位有符号的分支偏移量， 构建方式为(branchbyte1 << 8)| branchbyte2。指令执行后，程序将 会转到这个 ifnonnull 指令之后的，由上述偏移量确定的目标地址上继续执 行。这个目标地址必须处于 ifnonnull 指令所在的方法之中。 另外，如果比较结果为假，那程序将继续执行 ifnonnull 指令后面的其他直 接码指令。
