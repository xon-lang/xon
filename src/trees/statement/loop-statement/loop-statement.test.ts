import { evalExpression, parseCode } from '../../../test-helper';
import { ArrayLiteralExpressionTree } from '../../expression/array-literal-expression/array-literal-expression.tree';
import { BooleanLiteralExpressionTree } from '../../expression/boolean-literal-expression/boolean-literal-expression.tree';
import { FunctionExpressionTree } from '../../expression/function-expression/function-expression.tree';
import { IdExpressionTree } from '../../expression/id-expression/id-expression.tree';
import { RangeExpressionTree } from '../../expression/range-expression/range-expression.tree';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { LoopStatementTree } from './loop-statement.tree';

test('loop with value', () => {
    const code = 'loop item in [1, 2, 3] { 12+45/5; }';
    const tree = parseCode(code, LoopStatementTree);
    expect(tree.valueName).toBe('item');
    expect(tree.keyName).toBeUndefined();
    expect(tree.indexName).toBeUndefined();
    expect(tree.infinity).toBe(false);
    expect(tree.expression).toBeInstanceOf(ArrayLiteralExpressionTree);

    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(evalExpression(statement.value)).toBe(12 + 45 / 5);
});

test('loop with value and key', () => {
    const code = 'loop val, key in object { 12+10; }';
    const tree = parseCode(code, LoopStatementTree);
    expect(tree.valueName).toBe('val');
    expect(tree.keyName).toBe('key');
    expect(tree.indexName).toBeUndefined();
    expect(tree.infinity).toBe(false);
    expect(tree.expression).toBeInstanceOf(IdExpressionTree);

    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(evalExpression(statement.value)).toBe(12 + 10);
});

test('loop with value, key and index', () => {
    const code = 'loop value, key, i in object { 12+10; }';
    const tree = parseCode(code, LoopStatementTree);
    expect(tree.valueName).toBe('value');
    expect(tree.keyName).toBe('key');
    expect(tree.indexName).toBe('i');
    expect(tree.infinity).toBe(false);
    expect(tree.expression).toBeInstanceOf(IdExpressionTree);

    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(evalExpression(statement.value)).toBe(12 + 10);
});

test('loop with value and index', () => {
    const code = 'loop value, key, i in object { 12+10; }';
    const tree = parseCode(code, LoopStatementTree);
    expect(tree.valueName).toBe('value');
    expect(tree.keyName).toBe('key');
    expect(tree.indexName).toBe('i');
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
    expect(tree.valueName).toBeUndefined();
    expect(tree.keyName).toBeUndefined();
    expect(tree.indexName).toBeUndefined();
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
    expect(tree.valueName).toBeUndefined();
    expect(tree.keyName).toBeUndefined();
    expect(tree.indexName).toBeUndefined();
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
    expect(tree.valueName).toBeUndefined();
    expect(tree.keyName).toBeUndefined();
    expect(tree.indexName).toBeUndefined();
    expect(tree.ifLoop).toBe(false);
    expect(tree.expression).toBeUndefined();

    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(statement.value).toBeInstanceOf(FunctionExpressionTree);
});
