import {Array2, Boolean2, Nothing, String2} from '../../../../lib/types';
import {TextResourceReference} from '../../../util/resource/resource-reference';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {isInSet, isSetOperatorTypeSemantic} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface IdTypeSemantic extends TypeSemantic {
  $: $Semantic.DECLARATION_TYPE;
  declaration: TypeDeclarationSemantic;
  generics: Array2<TypeSemantic | Nothing> | Nothing;
}

export function idTypeSemantic(
  context: SemanticContext,
  reference: TextResourceReference,
  declaration: TypeDeclarationSemantic,
  generics: Array2<TypeSemantic | Nothing> | Nothing,
): IdTypeSemantic {
  const semantic: IdTypeSemantic = {
    $: $Semantic.DECLARATION_TYPE,
    reference,
    declaration,
    generics,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (semanticIs<TypeDeclarationSemantic>(this.declaration, $Semantic.TYPE_DECLARATION)) {
        return this.declaration.baseType?.is(other) ?? false;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (
        semanticIs<TypeDeclarationSemantic>(this.declaration, $Semantic.TYPE_DECLARATION) &&
        semanticIs<IdTypeSemantic>(other, $Semantic.DECLARATION_TYPE)
      ) {
        return this.declaration.eq(other.declaration);
      }

      return false;
    },

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return getDeclarationAttributes(context, declaration);
    },
  };

  declaration.usages.push(reference);

  return semantic;
}

export function getDeclarationAttributes(
  context: SemanticContext,
  declaration: TypeDeclarationSemantic,
): Record<String2, Array2<TypeSemantic>> {
  const attributes: Record<String2, Array2<TypeSemantic>> = {};

  if (semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
    for (const [name, declarations] of Object.entries(declaration?.attributes)) {
      const types = declarations.map((x) => x.type).filter((x): x is TypeSemantic => !!x);
      attributes[name] = types;
    }
  }

  return attributes;
}
