import { ParameterTree } from '../../tree/parameter/parameter.tree';
import { parseParameter } from '../../tree/parse';
import { getParameterInference } from './parameter-inference.helper';

test('has integer type', () => {
  const code = 'b Integer';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  const inference = getParameterInference(tree, new Map());
  expect(inference.type.name).toBe('Integer');
});
