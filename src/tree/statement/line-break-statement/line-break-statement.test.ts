import { parseStatement } from '../../../parse';
import { LineBreakStatementTree } from './line-break-statement.tree';

test('line break', () => {
    const code = '\r\n  \n';
    const tree = parseStatement<LineBreakStatementTree>(code);
    expect(tree).toBeInstanceOf(LineBreakStatementTree);
});
