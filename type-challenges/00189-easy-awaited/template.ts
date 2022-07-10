type MyAwaited<T extends Promise<any>> = T extends Promise<infer X> 
? X extends Promise<any> ? MyAwaited<X> : X 
: never

// infer 假设一个值 变量X

// 只能在条件类型里面使用
// 设置未知数