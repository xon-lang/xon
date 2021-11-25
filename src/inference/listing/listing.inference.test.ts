import { parseSource } from '../../tree/parse';
import { SourceTree } from '../../tree/source/source.tree';

test('has one statement no generics', () => {
  const code = `
Animal:
  weigh Integer
`;
  const tree = parseSource(code);
  expect(tree).toBeInstanceOf(SourceTree);
});

test('has one statement with generics', () => {
  const code = `
Animal<T>:
  weight T

  get<V>(a T) V:
    -- 
`.trim();
  const tree = parseSource(code);
  expect(tree).toBeInstanceOf(SourceTree);
});
