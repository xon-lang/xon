import { parseExpression } from '../../../util/parse';
import { PreprocessorExpressionTree } from './preprocessor-expression-tree';

test('preprocessor test for any symbol', () => {
  const code = '#{joke wrong goal virus#0298 .RGJ^ j 6& W DCVµˆ∆∑#:¨˙√å∂√∆π–√•∂√¶˙∆˚#:çßÎ◊´‰◊´®√ı}';
  const tree = parseExpression(code) as PreprocessorExpressionTree;
  expect(tree).toBeInstanceOf(PreprocessorExpressionTree);

  expect(tree.value).toBe(code.slice(2, -1));
});

test('preprocessor value test', () => {
  const code = '#{await m();}';
  const tree = parseExpression(code) as PreprocessorExpressionTree;
  expect(tree).toBeInstanceOf(PreprocessorExpressionTree);

  expect(tree.value).toBe('await m();');
});

test('preprocessor complex', () => {
  const code = '#{const battery = await si.battery();\nif a: log(0)}';
  const tree = parseExpression(code) as PreprocessorExpressionTree;
  expect(tree).toBeInstanceOf(PreprocessorExpressionTree);

  expect(tree.value).toBe('const battery = await si.battery();\nif a: log(0)');
});

test('inner string', () => {
  const code = '#{` = ${this.statement}`}';
  const tree = parseExpression(code) as PreprocessorExpressionTree;
  expect(tree).toBeInstanceOf(PreprocessorExpressionTree);

  expect(tree.value).toBe('` = ${this.statement}`');
});

test('multiline', () => {
  const code = `#{
    abc
    123 + 456
    log(0)
  }#`;
  const tree = parseExpression(code) as PreprocessorExpressionTree;
  expect(tree).toBeInstanceOf(PreprocessorExpressionTree);

  expect(tree.toString()).toBe(`#{
    abc
    123 + 456
    log(0)
  }`);
});
