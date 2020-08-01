import { parseFile } from '../../test-helper';
import { ProgramTree } from './program.tree';

test('syntax validation', () => {
    const tree = parseFile('./syntax-validation.test.xon', ProgramTree);
    expect(tree).toBeInstanceOf(ProgramTree);
});
