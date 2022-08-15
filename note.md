- 遍历：
  - 遍历接口、联合类型（in）
  - 遍历数组、元组（in T<number>）

- 索引签名

```ts 
type T = {
    a: string,
    b: boolean,
    [key:number]: string // 类型为number的键对应的值为string
}
```
- 枚举
```ts
enum Fruit {
  apple, // 0 自动推导每个成员对应的数字
  ...
}
// Fruit.apple
可以分开声明，自动合并到一起
```