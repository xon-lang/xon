import { ModuleTree } from '../../tree/module/module.tree';
import { parseModule } from '../../tree/parse';

test('has one statement no generics', () => {
  const code = `
Animal:
  weigh Integer
`;
  const tree = parseModule(code);
  expect(tree).toBeInstanceOf(ModuleTree);
});

test('has one statement with generics', () => {
  const code = `
Animal<T>:
  weight T

  get<V>(a T) V:
    -- 
`.trim();
  const tree = parseModule(code);
  expect(tree).toBeInstanceOf(ModuleTree);
});
