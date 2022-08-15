type Last<T extends any[]> = T extends [...infer P,infer L] ? L :never
