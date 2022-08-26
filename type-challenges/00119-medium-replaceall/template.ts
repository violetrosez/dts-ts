type ReplaceAll<S extends string, From extends string, To extends string> = 
Replace<S,From,To> extends `${infer A}${From}${infer B}` ? ReplaceAll<Replace<S,From,To>,From,To> : S

// type ReplaceAll<
//   S extends string,
//   From extends string,
//   To extends string
// > = From extends ""
//   ? S
//   : S extends `${infer M}${From}${infer N}`
//   ? `${M}${To}${ReplaceAll<N, From, To>}`
//   : S;