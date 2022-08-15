type Chainable<Result={}> = {
    option<K extends string,V>(key: K extends keyof Result ? V extends Result[K] ? never : K : K, value: V): Chainable<Omit<Result, K> & {
        [P in K]: V
      }>
    get(): Result
}

//1 Omit<Result, K> 先把k移除 用新类型覆盖
//2 K extends keyof Result ? V extends Result[K] ? never : K : K 出现同键同值 应该报错 类型限制