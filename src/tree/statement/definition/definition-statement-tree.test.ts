import { IssueService } from '../../../issue-service/issue-service';
import { none } from '../../../lib/core';
import { parseSourceFile, parseStatement } from '../../../util/parse';
import { DefinitionTree } from '../../definition/definition-tree';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { DefinitionStatementTree } from './definition-statement-tree';

test('model animal', () => {
  const code = 'model Animal';
  const { definition: tree } = parseStatement(code) as DefinitionStatementTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.base).toBe(null);
  expect(tree.attributes.length).toBe(0);
});

test('model cat', () => {
  const code = 'model Cat is Animal';
  const { definition: tree } = parseStatement(code) as DefinitionStatementTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Cat');
  expect((tree.base as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.attributes.length).toBe(0);
});

test('model animal with only attribute', () => {
  const code = 'model Animal\n   abc Integer';
  const { definition: tree } = parseStatement(code) as DefinitionStatementTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.base).toBe(none);
  expect(tree.attributes.length).toBe(1);
  expect(tree.attributes[0].name.text).toBe('abc');
  expect((tree.attributes[0].type as IdExpressionTree).name.text).toBe('Integer');
});

test('1-error.xon', () => {
  IssueService.issues = [];
  try {
    const tree = parseSourceFile('src/tree/statement/definition/test-files/1-error.xon');
    expect(tree.statements[0]).toBeInstanceOf(DefinitionStatementTree);
  } catch (error) {
    const issue = IssueService.issues.slice(-1)[0];

    expect(issue.source.start.line).toBe(3);
    expect(issue.source.start.column).toBe(7);
    expect(issue.source.stop.column).toBe(27);
  }
  expect(IssueService.issues.length).toBe(1); // mb should be 2
});

test('2-error.xon', () => {
  IssueService.issues = [];
  try {
    const tree = parseSourceFile('src/tree/statement/definition/test-files/2-error.xon');
    expect(tree.statements[0]).toBeInstanceOf(DefinitionStatementTree);
  } catch (error) {
    const issue = IssueService.issues.slice(-1)[0];

    expect(issue.source.start.line).toBe(6);
    expect(issue.source.start.column).toBe(3);
    expect(issue.source.stop.column).toBe(5);
  }
  expect(IssueService.issues.length).toBe(0); // to do should be 1
});
