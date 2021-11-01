import { CallExpressionTree } from '../../expression/call-expression/call-expression.tree';
import { IdExpressionTree } from '../../expression/id-expression/id-expression.tree';
import { parseSourceFile } from '../../parse';
import { SourceTree } from '../../source/source-tree';
import { ExpressionStatementTree } from '../../statement/expression-statement/expression-statement.tree';
import { FunctionTypeTree } from '../../type/function-type/function-type.tree';
import { IdTypeTree } from '../../type/id-type/id-type.tree';
import { ClassDefinitionTree } from './class-definition-tree';

test('one scope', () => {
  const tree = parseSourceFile(
    'src/tree/definition/class-definition/class-definition-test-file.xon',
  );
  expect(tree).toBeInstanceOf(SourceTree);

  expect(tree.definitions.length).toBe(1);
  const definition = tree.definitions[0] as ClassDefinitionTree;

  expect(definition.id.text).toBe('SomeClass');
  expect(definition.genericParameters.length).toBe(1);
  expect(definition.genericParameters[0].text).toBe('T');

  expect(definition.parameters.length).toBe(1);
  expect(definition.parameters[0].id.text).toBe('name');
  expect(definition.parameters[0].type.name).toBe('String');

  expect(definition.baseType.name).toBe('BaseClass');
  expect((definition.baseType as IdTypeTree).genericArguments.length).toBe(2);
  expect((definition.baseType as IdTypeTree).genericArguments[0].name).toBe('String');
  expect((definition.baseType as IdTypeTree).genericArguments[1].name).toBe('Boolean');

  const attrs = definition.attributes;
  expect(attrs.length).toBe(5);
  expect(attrs[0].id.text).toBe('property');
  expect(attrs[0].type.name).toBe('String');
  expect(attrs[1].id.text).toBe('anotherProp');
  expect(attrs[2].id.text).toBe('typedValue');
  expect(attrs[2].type.name).toBe('Number');

  expect(attrs[3].id.text).toBe('method');
  expect((attrs[3].type as FunctionTypeTree).parameters.length).toBe(0);
  expect(attrs[3].body.length).toBe(2);
  expect((attrs[3].body[0] as ExpressionStatementTree).expression).toBeInstanceOf(
    CallExpressionTree,
  );
  expect((attrs[3].body[1] as ExpressionStatementTree).expression).toBeInstanceOf(
    CallExpressionTree,
  );
  expect(attrs[4].id.text).toBe('location');
  expect((attrs[4].type as FunctionTypeTree).parameters.length).toBe(2);
  expect((attrs[4].type as FunctionTypeTree).parameters[0].id.text).toBe('x');
  expect((attrs[4].type as FunctionTypeTree).parameters[0].type.name).toBe('Number');
  expect((attrs[4].type as FunctionTypeTree).parameters[1].id.text).toBe('y');
  expect((attrs[4].type as FunctionTypeTree).parameters[1].type.name).toBe('Number');
  expect(attrs[4].body.length).toBe(1);
  expect((attrs[4].body[0] as ExpressionStatementTree).expression).toBeInstanceOf(
    CallExpressionTree,
  );
  const innerMethod = (attrs[4].body[0] as ExpressionStatementTree)
    .expression as CallExpressionTree;
  const CallExpression = innerMethod.instance as IdExpressionTree;
  expect(CallExpression.id.text).toBe('pos');
  expect(innerMethod.arguments.length).toBe(2);

  expect(attrs.length).toBe(1);
  expect(attrs[5].id.text).toBe('+');
  const operatorType = attrs[5].type as FunctionTypeTree;
  expect(operatorType.parameters[0].id.text).toBe('it');
  expect(operatorType.parameters[1].id.text).toBe('sc');
  expect(operatorType.parameters[1].type.name).toBe('SomeClass');
  expect(operatorType.returnType.name).toBe('SomeClass');
});
