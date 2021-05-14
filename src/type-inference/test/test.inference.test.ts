import { parseTest } from '../../tree/parse';
import { TestTree } from '../../tree/test/test.tree';
import { AssertStatementInference } from '../statement/assert-statement/assert-statement.inference';
import { getTestInference } from './test-inference.helper';

test('has single assert pair', () => {
  const code = 'test "my test":\n    actual: 1 + 1\n\n    expect: true';
  const tree = parseTest(code);
  expect(tree).toBeInstanceOf(TestTree);

  const inference = getTestInference(tree, new Map());
  expect(inference.type.toString()).toBe('(String) null');
  expect(inference.name.toString()).toBe('String');
  const assert = inference.body[0] as AssertStatementInference;
  expect(assert.actual.type.toString()).toBe('Integer');
  expect(assert.expect.type.toString()).toBe('Boolean');
});
