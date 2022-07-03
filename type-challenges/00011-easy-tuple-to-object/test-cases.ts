import type { Equal, Expect } from '@type-challenges/utils'

// 字面量类型
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// 限制对象的键 类型为string number symbol
// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
