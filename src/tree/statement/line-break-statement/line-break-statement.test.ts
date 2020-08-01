import { parseCode } from '../../../test-helper';
import { LineBreakStatementTree } from './line-break-statement.tree';

test('line breakz', () => {
    const code = '\r\n  \n';
    const tree = parseCode(code, LineBreakStatementTree);
});
