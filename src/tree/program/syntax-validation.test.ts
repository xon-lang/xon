import { ProgramTree } from './program.tree';
import { parseFile } from '../../parse';

test('syntax validation', () => {
    const tree = parseFile('tree/program/syntax-validation.test.xon', ProgramTree);
    expect(tree).toBeInstanceOf(ProgramTree);
});
