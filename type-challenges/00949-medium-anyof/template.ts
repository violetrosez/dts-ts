type AnyOf<T extends readonly any[]> = T[number] extends 0 | '' | [] | false | Record<PropertyKey,never> ? false : true


type s = {} extends true ? true : false