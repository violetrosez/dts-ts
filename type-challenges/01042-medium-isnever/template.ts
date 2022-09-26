// 因为 never代表的是空的联合类型,相当于没有,所有不会执行,最后也是never类型,不
type IsNever<T> = [T] extends [never] ? true : false
