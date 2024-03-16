import {Boolean2, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic, semanticIs} from '../../semantic';
import {DeclarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {LiteralSemantic} from '../literal-semantic';

export interface StringLiteralSemantic extends LiteralSemantic {
  $: $Semantic.STRING_LITERAL;
  value: String2;
}

export function stringLiteralSemantic(
  reference: SourceReference,
  type: DeclarationTypeSemantic,
  value: StringLiteralSemantic['value'],
): StringLiteralSemantic {
  const semantic: StringLiteralSemantic = {
    $: $Semantic.STRING_LITERAL,
    reference,
    type,
    value,

    eq(other: LiteralSemantic): Boolean2 {
      if (semanticIs<StringLiteralSemantic>(other, $Semantic.STRING_LITERAL)) {
        return this.value === other.value;
      }

      return false;
    },
  };

  return semantic;
}
