import * as fs from 'fs';
import { parseDefinition } from '../../parse';
import { FunctionExpressionTree } from '../expression/function-expression/function-expression.tree';
import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';
import { DefinitionTree } from './definition.tree';

test('one scope', () => {
  const code = fs.readFileSync('src/tree/definition/definition.test.xon').toString();
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.name).toBe('SomeClass');

  expect(tree.inheritance.name).toBe('BaseClass');
  expect(tree.inheritance.generics.length).toBe(2);
  expect(tree.inheritance.generics[0].name).toBe('String');
  expect(tree.inheritance.generics[1].name).toBe('Boolean');

  expect(tree.properties.length).toBe(3);
  expect(tree.properties[0].name).toBe('property');
  expect(tree.properties[0].type.name).toBe('String');
  expect(tree.properties[1].name).toBe('anotherProp');
  expect(tree.properties[2].name).toBe('typed_value');
  expect(tree.properties[2].type.name).toBe('Number');

  expect(tree.methods.length).toBe(2);
  expect(tree.methods[0].name).toBe('method');
  expect(tree.methods[0].args.length).toBe(0);
  expect(tree.methods[0].statements.length).toBe(2);
  expect((tree.methods[0].statements[0] as ExpressionStatementTree).value).toBeInstanceOf(
    FunctionExpressionTree
  );
  expect((tree.methods[0].statements[1] as ExpressionStatementTree).value).toBeInstanceOf(
    FunctionExpressionTree
  );
  expect(tree.methods[1].name).toBe('location');
  expect(tree.methods[1].args.length).toBe(2);
  expect(tree.methods[1].args[0].name).toBe('x');
  expect(tree.methods[1].args[0].type.name).toBe('Number');
  expect(tree.methods[1].args[1].name).toBe('y');
  expect(tree.methods[1].args[1].type.name).toBe('Number');
  expect(tree.methods[1].statements.length).toBe(1);
  expect((tree.methods[1].statements[0] as ExpressionStatementTree).value).toBeInstanceOf(
    FunctionExpressionTree
  );
  const innerMethod = (tree.methods[1].statements[0] as ExpressionStatementTree)
    .value as FunctionExpressionTree;
  const functionExpression = innerMethod.object as IdExpressionTree;
  expect(functionExpression.name).toBe('coord');
  expect(innerMethod.args.length).toBe(2);

  expect(tree.infixOperators.length).toBe(1);
  expect(tree.infixOperators[0].operator).toBe('+');
  expect(tree.infixOperators[0].arg.name).toBe('sc');
  expect(tree.infixOperators[0].arg.type.name).toBe('SomeClass');
  expect(tree.infixOperators[0].arg.type.generics.length).toBe(0);
  expect(tree.infixOperators[0].returnType.name).toBe('SomeClass');
  expect(tree.infixOperators[0].returnType.generics.length).toBe(0);
});
