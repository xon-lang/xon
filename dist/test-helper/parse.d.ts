export declare function parseFile<T>(filePath: string, type: new (ctx: any) => T): T;
export declare function parseWrongCode<T>(code: string, type: new (ctx: any) => T): void;
export declare function getTestCode(): string;
export declare function testXonFIle<T>(type: new (ctx: any) => T, fn: (tree: T) => void): void;
