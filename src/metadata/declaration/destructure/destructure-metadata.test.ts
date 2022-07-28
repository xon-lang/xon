import { DeclarationTree } from '../../../tree/declaration/declaration-tree';
import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { parseSource } from '../../../util/parse';
import { LiteralTypeMetadata } from '../../expression/type/literal/literal-type-metadata';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { ValueMetadata } from '../../expression/value/value-metadata';
import { SourceMetadata } from '../../source/source-metadata';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { TestDeclarationScope } from '../scope/test-declaration-scope';

test('single parameter', () => {
  const code = 'a: Number =  132';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);

  const declaration = (tree.statements[0] as DeclarationStatementTree).declaration as DeclarationTree;
  const valueType = (declaration.value.metadata as ValueMetadata).type() as LiteralTypeMetadata;
  expect(declaration.metadata.name).toBe('a');
  expect(valueType.definition.name).toBe('Integer');
  expect(valueType.is(tree.scope.core.number.type)).toBe(true);
  expect((declaration.type.metadata as TypeMetadata).equals(tree.scope.core.number.type)).toBe(true);
});
