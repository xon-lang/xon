import { parseStatement } from '../../util/parse';
import { PreprocessorStatementNode } from './preprocessor-statement-node';

test('preprocessor test for any symbol', () => {
  const code = '#{joke wrong goal virus#0298 .RGJ^ j 6& W DCVµˆ∆∑#:¨˙√å∂√∆π–√•∂√¶˙∆˚#:çßÎ◊´‰◊´®√ı}';
  const node = parseStatement<PreprocessorStatementNode>(code);
  expect(node).toBeInstanceOf(PreprocessorStatementNode);

  expect(node.value).toBe(code.slice(2, -1));
});

test('preprocessor value test', () => {
  const code = '#{await m();}';
  const node = parseStatement<PreprocessorStatementNode>(code);
  expect(node).toBeInstanceOf(PreprocessorStatementNode);

  expect(node.value).toBe('await m();');
});

test('preprocessor complex', () => {
  const code = '#{const battery = await si.battery();\nif a: log(0)}';
  const node = parseStatement<PreprocessorStatementNode>(code);
  expect(node).toBeInstanceOf(PreprocessorStatementNode);

  expect(node.value).toBe('const battery = await si.battery();\nif a: log(0)');
});
