import { parseCode } from '../../../parse';
import { LineBreakStatementTree } from './line-break-statement.tree';

test('line break', () => {
    const code = '\r\n  \n';
    const tree = parseCode(code, LineBreakStatementTree);
    expect(tree).toBeInstanceOf(LineBreakStatementTree);
});
