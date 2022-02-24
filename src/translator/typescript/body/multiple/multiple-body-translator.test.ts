import { parseExpression } from "../../../../util/parse";

test('array mixed', () => {
  const code = "[123,'abc']";
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree);

  expect(translator).toBeInstanceOf(ArrayExpressionTranslator);
  expect(translator.toString()).toBe("[123, 'abc']");
});
