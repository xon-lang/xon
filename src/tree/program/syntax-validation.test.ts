import * as fs from 'fs';
import { parseCode } from '../../parse';
import { ProgramTree } from './program.tree';

test('one scope', () => {
    const code = fs.readFileSync('src/tree/program/syntax-validation.test.xon').toString();
    const tree = parseCode(code, ProgramTree);
    expect(tree).toBeInstanceOf(ProgramTree);
});
