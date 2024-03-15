import {Boolean2, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {LiteralSemantic} from '../literal-semantic';

export interface StringLiteralSemantic extends LiteralSemantic {
  $: $Semantic.STRING_LITERAL;
  value: String2;
}

export function stringLiteralSemantic(
  reference: SourceReference,
  declaration: TypeDeclarationSemantic,
  type: TypeSemantic,
  value: String2,
): StringLiteralSemantic {
  const semantic: StringLiteralSemantic = {
    $: $Semantic.STRING_LITERAL,
    reference,
    declaration,
    baseType: type,
    value,

    eq(semantic: LiteralSemantic): Boolean2 {
      if (semanticIs<StringLiteralSemantic>(semantic, $Semantic.STRING_LITERAL)) {
        return this.value === semantic.value;
      }

      return false;
    },
  };

  return semantic;
}
