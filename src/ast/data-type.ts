export enum PrimitiveDataType {
    i8 = 'i8',
    i16 = 'i16',
    i32 = 'i32',
    i64 = 'i64',
    i128 = 'i128',
    u8 = 'u8',
    u16 = 'u16',
    u32 = 'u32',
    u64 = 'u64',
    u128 = 'u128',
    f32 = 'f32',
    f64 = 'f64',
    bool = 'bool',
    char = 'char',
    str = 'str',
}

export class DataTypeInfo {
    primitiveType: PrimitiveDataType;
    isPrimitive: boolean;
    isNumber: boolean;
    isInteger: boolean;
    isFloat: boolean;
    isBoolean: boolean;
    isChar: boolean;
    isString: boolean;

    constructor(public type: string) {
        this.primitiveType = PrimitiveDataType[type];
        this.isPrimitive = Object.keys(PrimitiveDataType).includes(type);

        const integers = ['i8', 'i16', 'i32', 'i64', 'i128', 'u8', 'u16', 'u32', 'u64', 'u128'];
        const floats = ['f8', 'f16', 'f32', 'f64', 'f128'];
        const numbers = [...integers, ...floats];
        this.isNumber = numbers.includes(type);
        this.isInteger = integers.includes(type);
        this.isFloat = floats.includes(type);
        this.isBoolean = type == 'bool';
        this.isChar = type == 'char';
        this.isString = type == 'str';
    }

    static resolveAddOperationType(...types: DataTypeInfo[]) {
        if (types.some(x => x.isString)) return new DataTypeInfo(PrimitiveDataType.str);

        if (types.every(x => x.isFloat)) return new DataTypeInfo(this.getMaxNumberType(types.map(x => x.type)));
        if (types.some(x => x.isFloat)) return new DataTypeInfo(types.find(x => x.isFloat).type);

        if (types.every(x => x.isInteger)) return new DataTypeInfo(this.getMaxNumberType(types.map(x => x.type)));
        if (types.some(x => x.isInteger)) return new DataTypeInfo(types.find(x => x.isInteger).type);

        return new DataTypeInfo(PrimitiveDataType.i32);
    }

    static getMaxNumberType(numberTypes: string[]) {
        return numberTypes[0].slice(0, 1) + Math.max(...numberTypes.map(x => +x.slice(1))).toString();
    }
}
