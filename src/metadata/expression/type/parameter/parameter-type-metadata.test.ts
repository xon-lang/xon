import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '../type-metadata-helper';
import { ParameterTypeMetadata } from './parameter-type-metadata';

test('true', () => {
  const code = 'true';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree, scope) as ParameterTypeMetadata;

  expect(metadata.attributesScope().all().length).toBe(3);
});

test('false is Boolean', () => {
  const code = 'false';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree, scope);

  const codeBoolean = 'Boolean';
  const treeBoolean = parseExpression(codeBoolean);
  const metadataNone = fillTypeMetadata(treeBoolean, scope);

  const codeInteger = 'Integer';
  const treeInteger = parseExpression(codeInteger);
  const metadataFloat = fillTypeMetadata(treeInteger, scope);

  expect(metadata.is(metadataNone)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
