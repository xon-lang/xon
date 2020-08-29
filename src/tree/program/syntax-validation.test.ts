import * as fs from 'fs';
import { parse } from '../../parse';
import { ProgramTree } from './program.tree';

test('one scope', () => {
    const code = fs.readFileSync('src/tree/program/syntax-validation.test.xon').toString();
    const tree = new ProgramTree(parse(code).program());
    expect(tree).toBeInstanceOf(ProgramTree);
});
