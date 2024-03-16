import {Nothing} from '../../lib/core';
import {TYPE_MODIFIERS} from '../../parser/parser-config';
import {SyntaxResult} from '../../parser/syntax-result';
import {SemanticContext} from '../semantic-context';
import {typeDeclarationDeepParse, typeDeclarationShallowParse} from './type/type-declaration-semantic-parser';
import {valueDeclarationDeepParse, valueDeclarationShallowParse} from './value/value-declaration-semantic-parser';

export function declarationsParse2(context: SemanticContext, syntax: SyntaxResult): Nothing {
  const nodes = syntax.statements.filterMap((x) => x.declaration);

  for (const node of nodes) {
    if (node.modifier && TYPE_MODIFIERS.includes(node.modifier.text)) {
      typeDeclarationShallowParse(context, node);

      continue;
    }

    valueDeclarationShallowParse(context, node);
  }

  for (const node of nodes) {
    typeDeclarationDeepParse(context, node);
    valueDeclarationDeepParse(context, node);
  }
}
