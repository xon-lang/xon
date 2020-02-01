import * as fs from 'fs';
import * as path from 'path';
import { parseCode } from '../index';

export function parseFile<T>(filePath: string, type: new (ctx) => T) {
    const code = fs.readFileSync(filePath, 'utf8');
    return parseCode(code, type);
}

export function parseWrongCode<T>(code: string, type: new (ctx) => T) {
    expect.assertions(1);
    try {
        parseCode(code, type);
    } catch (e) {
        expect(e.message).not.toBeNull();
    }
}

export function getTestCode() {
    const testFilePath = module.parent.parent.filename;
    const dir = path.dirname(testFilePath);
    const name = path.basename(testFilePath, '.ts');
    return fs.readFileSync(path.join(dir, name + '.xon')).toString();
}

export function testXonFIle<T>(type: new (ctx) => T, fn: (tree: T) => void) {
    const name = path.basename(module.parent.parent.filename, '.test.td');
    const code = getTestCode();
    const tree = parseCode(code, type);
    test(name, () => fn(tree));
}
