import { ArgumentTree } from '../../tree/argument/argument.tree';
import { parseArgument } from '../../tree/parse';
import { getArgumentInference } from './argument-inference.helper';

test('has integer value', () => {
  const code = '3';
  const tree = parseArgument(code);
  expect(tree).toBeInstanceOf(ArgumentTree);

  const inference = getArgumentInference(tree, new Map());
  expect(inference.type.name).toBe('Integer');
});
