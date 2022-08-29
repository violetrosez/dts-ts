// type Flatten<T extends any[], M extends any[] = []> = T extends [infer F,...infer R] ?  
// F extends any[] ? Flatten<[...F,...R],M> : Flatten<R,[...M,F]>
// : M

type Flatten<T extends any[]> = T extends [infer First, ...infer Rest] ? 
First extends any[] ? [...Flatten<First>, ...Flatten<Rest>] : [First, ...Flatten<Rest>]
: [];

type a = Flatten<[1, 2, 3, 4]>