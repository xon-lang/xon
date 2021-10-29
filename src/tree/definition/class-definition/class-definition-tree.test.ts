import { CallExpressionTree } from '../../expression/call-expression/call-expression.tree';
import { IdExpressionTree } from '../../expression/id-expression/id-expression.tree';
import { parseSourceFile } from '../../parse';
import { SourceTree } from '../../source/source-tree';
import { ExpressionStatementTree } from '../../statement/expression-statement/expression-statement.tree';
import { IdTypeTree } from '../../type/id-type/id-type.tree';
import { ClassDefinitionTree } from './class-definition-tree';
import { InitClassMemberTree } from './class-member/init-class-member/init-class-member-tree';
import { MethodClassMemberTree } from './class-member/method-class-member/method-class-member-tree';
import { OperatorClassMemberTree } from './class-member/operator-class-member/operator-class-member-tree';
import { PropertyClassMemberTree } from './class-member/property-class-member/property-class-member-tree';

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

  const properties = definition.members
    .filter((x) => x instanceof PropertyClassMemberTree)
    .map((x) => x as PropertyClassMemberTree);
  expect(properties.length).toBe(3);
  expect(properties[0].id.text).toBe('property');
  expect(properties[0].type.name).toBe('String');
  expect(properties[1].id.text).toBe('anotherProp');
  expect(properties[2].id.text).toBe('typedValue');
  expect(properties[2].type.name).toBe('Number');

  const inits = definition.members
    .filter((x) => x instanceof InitClassMemberTree)
    .map((x) => x as InitClassMemberTree);
  expect(inits.length).toBe(0);

  const methods = definition.members
    .filter((x) => x instanceof MethodClassMemberTree)
    .map((x) => x as MethodClassMemberTree);
  expect(methods.length).toBe(2);
  expect(methods[0].id.text).toBe('method');
  expect(methods[0].parameters.length).toBe(0);
  expect(methods[0].body.length).toBe(2);
  expect((methods[0].body[0] as ExpressionStatementTree).expression).toBeInstanceOf(
    CallExpressionTree,
  );
  expect((methods[0].body[1] as ExpressionStatementTree).expression).toBeInstanceOf(
    CallExpressionTree,
  );
  expect(methods[1].id.text).toBe('location');
  expect(methods[1].parameters.length).toBe(2);
  expect(methods[1].parameters[0].id.text).toBe('x');
  expect(methods[1].parameters[0].type.name).toBe('Number');
  expect(methods[1].parameters[1].id.text).toBe('y');
  expect(methods[1].parameters[1].type.name).toBe('Number');
  expect(methods[1].body.length).toBe(1);
  expect((methods[1].body[0] as ExpressionStatementTree).expression).toBeInstanceOf(
    CallExpressionTree,
  );
  const innerMethod = (methods[1].body[0] as ExpressionStatementTree)
    .expression as CallExpressionTree;
  const CallExpression = innerMethod.instance as IdExpressionTree;
  expect(CallExpression.id.text).toBe('pos');
  expect(innerMethod.arguments.length).toBe(2);

  const operators = definition.members
    .filter((x) => x instanceof OperatorClassMemberTree)
    .map((x) => x as OperatorClassMemberTree);
  expect(operators.length).toBe(1);
  expect(operators[0].id.text).toBe('+');
  expect(operators[0].parameters[0].id.text).toBe('it');
  expect(operators[0].parameters[1].id.text).toBe('sc');
  expect(operators[0].parameters[1].type.name).toBe('SomeClass');
});
