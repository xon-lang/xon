import { TestContext } from '../../grammar/xon-parser';
import { TestTree } from './test.tree';

export const getTestTree = (ctx: TestContext): TestTree => {
  if (ctx === undefined) return undefined;
  return new TestTree(ctx);
};

export const getTestsTrees = (definitions: TestContext[]): TestTree[] =>
  definitions?.map(getTestTree) || [];
