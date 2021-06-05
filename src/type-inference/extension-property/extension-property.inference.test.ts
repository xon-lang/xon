import { ExtensionPropertyTree } from '../../tree/extension-property/extension-property.tree';
import { parseExtensionProperty } from '../../tree/parse';
import { ExpressionStatementInference } from '../statement/expression-statement/expression-statement.inference';
import { getExtensionPropertyInference } from './extension-property-inference.helper';

test('has return type', () => {
  const code = 'Boolean.prop Integer:\n    this';
  const tree = parseExtensionProperty(code);
  expect(tree).toBeInstanceOf(ExtensionPropertyTree);

  const inference = getExtensionPropertyInference(tree, new Map());
  expect(inference.type.toString()).toBe('Integer');
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Boolean');
});
