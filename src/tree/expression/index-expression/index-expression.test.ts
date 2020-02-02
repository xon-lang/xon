import { parseCode } from '../../../test-helper';
import { StringLiteralTree } from '../../literal/string-literal/string-literal.tree';
import { AddSubExpressionTree } from '../add-sub-expression/add-sub-expression.tree';
import { LiteralExpressionTree } from '../literal-expression';
import { MemberExpressionTree } from '../member-expression/member-expression.tree';
import { IndexExpressionTree } from './index-expression.tree';

test('string expression index', () => {
    const code = 'some_object.prop["ppp"]';
    const tree = parseCode(code, IndexExpressionTree);
    expect(tree.value).toBeInstanceOf(MemberExpressionTree);
    expect(tree.index).toBeInstanceOf(LiteralExpressionTree);
    expect(tree.index['literal']).toBeInstanceOf(StringLiteralTree);
});

test('integer expression index', () => {
    const code = 'some_object.prop[12+33]';
    const tree = parseCode(code, IndexExpressionTree);
    expect(tree.value).toBeInstanceOf(MemberExpressionTree);
    expect(tree.index).toBeInstanceOf(AddSubExpressionTree);
});
