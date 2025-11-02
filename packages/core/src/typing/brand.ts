const brand = Symbol('brand');

export type Brand<T extends `${string}.${string}`> = {[brand]?: T};
