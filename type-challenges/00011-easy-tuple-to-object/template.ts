type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    // [P in keyof T]: P // 遍历数组得到的是索引
    [P in T[number]]: P
}

// 字面量类型
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type r = TupleToObject<typeof tuple>

let t1 = [1,'2']
type t = typeof t1
let a:t = ['2',1]