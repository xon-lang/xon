import { IssueService } from '../../issue-service/issue-service';
import { none } from '../../lib/core';
import { parseDefinition, parseSourceFile } from '../../util/parse';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { DefinitionTree } from './definition-tree';

test('model cat', () => {
  const code = 'model Cat Animal';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Cat');
  expect((tree.base as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.attributes.length).toBe(0);
});

test('model animal with only attribute', () => {
  const code = 'model Animal\n   abc Integer';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.base).toBe(none);
  expect(tree.attributes.length).toBe(1);
  expect(tree.attributes[0].name.text).toBe('abc');
  expect((tree.attributes[0].type as IdExpressionTree).name.text).toBe('Integer');
});

test('1-error.xon', () => {
  try {
    const tree = parseSourceFile('src/tree/definition/test-files/1-error.xon');
    expect(tree.definitions[0]).toBeInstanceOf(DefinitionTree);
  } catch (error) {
    const issue = IssueService.issues.slice(-1)[0];
    expect(issue.source.start.line).toBe(3);
    expect(issue.source.start.column).toBe(7);
    expect(issue.source.stop.column).toBe(28);
  }
});

test('2-error.xon', () => {
  try {
    const tree = parseSourceFile('src/tree/definition/test-files/2-error.xon');
    expect(tree.definitions[0]).toBeInstanceOf(DefinitionTree);
  } catch (error) {
    const issue = IssueService.issues.slice(-1)[0];
    expect(issue.source.start.line).toBe(6);
    expect(issue.source.start.column).toBe(3);
    expect(issue.source.stop.column).toBe(5);
  }
});
