import { parseSyntax } from '../../syntax/syntax';
import { $Semantic, parseSemantic } from '../semantic';

test('a is integer', () => {
  const text = 'const a: Integer = 1';
  const syntax = parseSyntax(text);
  const semantic = parseSemantic(syntax);

  expect(Object.keys(semantic.declarations).length).toBe(1);
  expect(semantic.declarations.a[0].$).toBe($Semantic.CONST);
  expect(semantic.declarations.a[0].name).toBe('A');
});
