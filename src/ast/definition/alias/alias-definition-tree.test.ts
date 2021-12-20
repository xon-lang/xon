import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { InfixExpressionNode } from '../../expression/infix/infix-expression-node';
import { parseDefinition } from '../../parse';
import { AliasDefinitionNode } from './alias-definition-tree';

test('number', () => {
  const code = 'type Number: Integer || Float';
  const tree = parseDefinition<AliasDefinitionNode>(code);
  expect(tree).toBeInstanceOf(AliasDefinitionNode);

  expect(tree.id.text).toBe('Number');
  expect(tree.generics.length).toBe(0);
  expect(tree.type).toBeInstanceOf(InfixExpressionNode);
  expect(tree.type.toString()).toBe('Integer || Float');
});

test('string map', () => {
  const code = 'type StringMap<|T|>: Map<|String, T|>';
  const tree = parseDefinition<AliasDefinitionNode>(code);
  expect(tree).toBeInstanceOf(AliasDefinitionNode);

  expect(tree.id.text).toBe('StringMap');
  expect(tree.generics.length).toBe(1);
  expect((tree.generics[0] as IdExpressionNode).id.text).toBe('T');
  expect((tree.type as IdExpressionNode).id.text).toBe('Map');
  expect(tree.type.toString()).toBe('Map<String, T>');
});
