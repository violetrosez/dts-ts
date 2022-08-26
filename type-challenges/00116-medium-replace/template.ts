type Replace<S extends string, From extends string, To extends string> = 
S extends `${infer A}${From}${infer E}` ? 
From extends '' ? S :`${A}${To}${E}` 
: S
