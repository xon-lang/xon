import { parseType } from '../../parse';
import { ArrayTypeTree } from '../array/array-type.tree';
import { IdTypeTree } from '../id/id-type.tree';
import { IndexerTypeTree } from './indexer-type.tree';

test('number return method', () => {
  const code = '[s String, i Integer[]] Number';
  const tree = parseType<IndexerTypeTree>(code);
  expect(tree).toBeInstanceOf(IndexerTypeTree);

  expect(tree.parameters.length).toBe(2);
  expect(tree.parameters[0].id.text).toBe('s');
  expect(tree.parameters[0].type).toBeInstanceOf(IdTypeTree);
  expect((tree.parameters[0].type as IdTypeTree).id.text).toBe('String');

  expect(tree.parameters[1].id.text).toBe('i');
  expect(tree.parameters[1].type).toBeInstanceOf(ArrayTypeTree);
  expect((tree.parameters[1].type as ArrayTypeTree).itemType).toBeInstanceOf(IdTypeTree);
  expect(((tree.parameters[1].type as ArrayTypeTree).itemType as IdTypeTree).id.text).toBe(
    'Integer',
  );

  expect(tree.resultType).toBeInstanceOf(IdTypeTree);
  expect((tree.resultType as IdTypeTree).id.text).toBe('Number');
});

test('from translator-ts', () => {
  const code = '<T, V>[i Integer] T';
  const tree = parseType<IndexerTypeTree>(code);
  expect(tree).toBeInstanceOf(IndexerTypeTree);

  expect(tree.typeParameters.length).toBe(2);
  expect(tree.typeParameters[0].id.text).toBe('T');
  expect(tree.typeParameters[1].id.text).toBe('V');

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].id.text).toBe('i');
  expect(tree.parameters[0].type).toBeInstanceOf(IdTypeTree);
  expect((tree.parameters[0].type as IdTypeTree).id.text).toBe('Integer');

  expect(tree.resultType).toBeInstanceOf(IdTypeTree);
  expect((tree.resultType as IdTypeTree).id.text).toBe('T');
});