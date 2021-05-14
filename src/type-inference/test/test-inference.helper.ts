import { TestTree } from '../../tree/test/test.tree';
import { GenericsMap } from '../generics-map';
import { TestInference } from './test.inference';

export function getTestInference(
  tree: TestTree,
  genericsMap: GenericsMap,
): TestInference {
  return new TestInference(tree, genericsMap);
}
