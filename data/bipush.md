### bipush

----

**操作**

将一个 byte 类型数据入栈

**格式**

|  bipush |
| --------:   |
|  byte |

**结构**
```
bipush = 16(0x10)
```

**操作数栈**
```
... →
..., value
```

**描述**

将 byte 带符号扩展为一个 int 类型的值 value，然后将 value 压入到操作 数栈中。
