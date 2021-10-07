import { TestContext } from '../../grammar/xon-parser';
import { TestTree } from './test.tree';

export const getTestTree = (context: TestContext): TestTree => {
  if (context === undefined) return undefined;
  return new TestTree(context);
};

export const getTestTrees = (contexts: TestContext[]): TestTree[] =>
  contexts?.map(getTestTree) || [];
