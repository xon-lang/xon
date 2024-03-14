import {Boolean2, Integer} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {LiteralSemantic} from '../literal-semantic';

export interface IntegerLiteralSemantic extends LiteralSemantic {
  $: $Semantic.INTEGER_LITERAL;
  // todo use inner presentation ???
  value: Integer;
}

export function integerLiteralSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  type: TypeSemantic,
  value: Integer,
): IntegerLiteralSemantic {
  const semantic: IntegerLiteralSemantic = {
    $: $Semantic.INTEGER_LITERAL,
    reference,
    declaration,
    baseType: type,
    value,

    eq(semantic: LiteralSemantic): Boolean2 {
      if (semanticIs<IntegerLiteralSemantic>(semantic, $Semantic.INTEGER_LITERAL)) {
        return this.value === semantic.value;
      }

      return false;
    },
  };

  return semantic;
}
