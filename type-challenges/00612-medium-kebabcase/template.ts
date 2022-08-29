type KebabCase<S extends string> = testKebcase<Uncapitalize<S>>

type testKebcase<S extends string> = S extends `${infer F}${infer R}`
? F extends Lowercase<F> ? `${F}${testKebcase<R>}` : `-${Lowercase<F>}${testKebcase<R>}`
: ''