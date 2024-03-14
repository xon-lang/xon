import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Boolean2, Nothing, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {TypeSemantic} from '../type-semantic';

export interface DeclarationTypeSemantic extends TypeSemantic {
  $: $Semantic.DECLARATION_TYPE;
  declaration: DeclarationSemantic | Nothing;
  generics: TypeSemantic[] | Nothing;
}

export function declarationTypeSemantic(
  context: SemanticContext,
  reference: SourceReference,
  declaration: DeclarationSemantic,
  generics: TypeSemantic[] | Nothing,
): DeclarationTypeSemantic {
  const semantic: DeclarationTypeSemantic = {
    $: $Semantic.DECLARATION_TYPE,
    reference,
    declaration,
    generics,

    eq(semantic: TypeSemantic): Boolean2 {
      return false;
    },

    is(semantic: TypeSemantic): Boolean2 {
      return this.eq(semantic);
    },

    attributes(): Record<String2, TypeSemantic[]> {
      const modifier = this.declaration?.modifier;
      if (this.declaration?.typeIsBase) {
        const attributes: Record<String2, TypeSemantic[]> = {};

        for (const [name, declarations] of Object.entries(this.declaration?.attributes)) {
          const types = declarations.map((x) => x.type).filter((x): x is TypeSemantic => !!x);
          attributes[name] = types;
        }

        return attributes;
      }

      context.issueManager.addError(reference.range, ISSUE_MESSAGE.cannotBeUsedAsAType());

      return {};
    },
  };

  declaration.usages.push(reference);

  return semantic;
}
