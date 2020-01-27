import { parseCode, evalExpression } from '../../test-helper';
import { LoopStatementTree } from './loop-statement.tree';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { ArrayLiteralExpressionTree } from '../array-literal-expression/array-literal-expression.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { BooleanLiteralExpressionTree } from '../boolean-literal-expression/boolean-literal-expression.tree';
import { FunctionCallExpressionTree } from '../function-call-expression/function-call-expression.tree';
import { RangeExpressionTree } from '../range-expression/range-expression.tree';

test('loop with key', () => {
    const code = 'loop key in [1, 2, 3] { 12+45/5; }';
    const tree = parseCode(code, LoopStatementTree);
    expect(tree.keyName).toBe('key');
    expect(tree.valueName).toBeUndefined();
    expect(tree.ifLoop).toBe(false);
    expect(tree.infinity).toBe(false);
    expect(tree.expression).toBeInstanceOf(ArrayLiteralExpressionTree);

    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(evalExpression(statement.value)).toBe(12 + 45 / 5);
});

test('loop with key and value', () => {
    const code = 'loop key, value in object { 12+10; }';
    const tree = parseCode(code, LoopStatementTree);
    expect(tree.keyName).toBe('key');
    expect(tree.valueName).toBe('value');
    expect(tree.ifLoop).toBe(false);
    expect(tree.infinity).toBe(false);
    expect(tree.expression).toBeInstanceOf(IdExpressionTree);

    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(evalExpression(statement.value)).toBe(12 + 10);
});

test('loop with expression only', () => {
    const code = 'loop [1:11:2] { 1+1; }';
    const tree = parseCode(code, LoopStatementTree);
    expect(tree.keyName).toBeUndefined();
    expect(tree.valueName).toBeUndefined();
    expect(tree.ifLoop).toBe(false);
    expect(tree.infinity).toBe(false);
    expect(tree.expression).toBeInstanceOf(RangeExpressionTree);

    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(evalExpression(statement.value)).toBe(1 + 1);
});

test('loop with if operator', () => {
    const code = 'loop if true { 8*8; 10+10; }';
    const tree = parseCode(code, LoopStatementTree);
    expect(tree.keyName).toBeUndefined();
    expect(tree.valueName).toBeUndefined();
    expect(tree.ifLoop).toBe(true);
    expect(tree.infinity).toBe(false);
    expect(tree.expression).toBeInstanceOf(BooleanLiteralExpressionTree);

    expect(tree.statements.length).toBe(2);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(evalExpression(statement.value)).toBe(8 * 8);
});

test('infinity loop', () => {
    const code = 'loop { log("To infinity and beyond!"); }';
    const tree = parseCode(code, LoopStatementTree);
    expect(tree.keyName).toBeUndefined();
    expect(tree.valueName).toBeUndefined();
    expect(tree.ifLoop).toBe(false);
    expect(tree.expression).toBeUndefined();

    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(statement.value).toBeInstanceOf(FunctionCallExpressionTree);
});
