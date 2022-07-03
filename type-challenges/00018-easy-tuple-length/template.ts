type Length<T extends readonly any[]> = T['length']

// 只有元组的长度可用这种方式，长度不变
// string[] 长度是动态的
// type b1 = [string, number]
// type a = Length<b1> //type a=2


// 下面这种只能推断出a是number类型 说白了ts是静态监测的
// const tesla = ['tesla', 'model 3', 'model X', 'model Y']
// type a = Length<typeof tesla>
