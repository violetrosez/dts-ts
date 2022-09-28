type Flag = "+" | "-";
type PercentageParser<A extends string> =
  A extends `${infer F extends Flag}${infer R}`
    ? R extends `${infer L}%`
      ? [F, L, "%"]
      : [F, R, ""]
    : A extends `${infer L}%`
    ? ["", L, "%"]
    : ["", A, ""];

// 
    