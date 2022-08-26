type AppendArgument<Fn, A> = Fn extends ((...arg1: infer R)=>infer U) ? (...arg2:[...R,A])=>U : Fn