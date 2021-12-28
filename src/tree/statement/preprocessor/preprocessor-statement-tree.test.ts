import { parseStatement } from '../../../util/parse';
import { PreprocessorStatementTree } from './preprocessor-statement-tree';

test('preprocessor test for any symbol', () => {
  const code = '#{joke wrong goal virus#0298 .RGJ^ j 6& W DCVµˆ∆∑#:¨˙√å∂√∆π–√•∂√¶˙∆˚#:çßÎ◊´‰◊´®√ı}';
  const tree = parseStatement(code) as PreprocessorStatementTree;
  expect(tree).toBeInstanceOf(PreprocessorStatementTree);

  expect(tree.value).toBe(code.slice(2, -1));
});

test('preprocessor value test', () => {
  const code = '#{await m();}';
  const tree = parseStatement(code) as PreprocessorStatementTree;
  expect(tree).toBeInstanceOf(PreprocessorStatementTree);

  expect(tree.value).toBe('await m();');
});

test('preprocessor complex', () => {
  const code = '#{const battery = await si.battery();\nif a: log(0)}';
  const tree = parseStatement(code) as PreprocessorStatementTree;
  expect(tree).toBeInstanceOf(PreprocessorStatementTree);

  expect(tree.value).toBe('const battery = await si.battery();\nif a: log(0)');
});
