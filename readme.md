### TS类型知识

- 对象字面量: 与声明方式有关
```js
const t1 = ['a', 1] as const
let t2 = ['a', 1]
typeof t1 // [string number]
typeof t2 // (string|number)[]
```
- 遍历：
  - 遍历接口、联合类型（in）
  - 遍历数组、元组（in T<number>）
- 约束
  - extends


### 元组类型
```ts
type t = [string, number]
元组长度是一个不可变常量
```