type Exclude1<A,B> = A extends B ? never : A    //排除法，两个联合类型
type MyOmit<T,U extends keyof T> = MyPick<T,Exclude1<keyof T ,U>>