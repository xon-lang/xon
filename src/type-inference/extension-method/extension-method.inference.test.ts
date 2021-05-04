import { ExtensionMethodTree } from '../../tree/extension-method/extension-method.tree';
import { parseExtensionMethod } from '../../tree/parse';
import { ExpressionStatementInference } from '../statement/expression-statement/expression-statement.inference';
import { getExtensionMethodInference } from './extension-method-inference.helper';

test('has return type', () => {
  const code = 'Boolean.f(a Integer) Integer:\n    this';
  const tree = parseExtensionMethod(code);
  expect(tree).toBeInstanceOf(ExtensionMethodTree);

  const inference = getExtensionMethodInference(tree, new Map());
  expect(inference.type.toString()).toBe('(Integer) Integer');
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Boolean');
});
