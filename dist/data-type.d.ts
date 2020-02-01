export declare enum PrimitiveDataType {
    i8 = "i8",
    i16 = "i16",
    i32 = "i32",
    i64 = "i64",
    i128 = "i128",
    u8 = "u8",
    u16 = "u16",
    u32 = "u32",
    u64 = "u64",
    u128 = "u128",
    f32 = "f32",
    f64 = "f64",
    bool = "bool",
    char = "char",
    str = "str"
}
export declare class DataTypeInfo {
    type: string;
    primitiveType: PrimitiveDataType;
    isPrimitive: boolean;
    isNumber: boolean;
    isInteger: boolean;
    isFloat: boolean;
    isBoolean: boolean;
    isChar: boolean;
    isString: boolean;
    constructor(type: string);
    static resolveAddOperationType(...types: DataTypeInfo[]): DataTypeInfo;
    static getMaxNumberType(numberTypes: string[]): string;
}
