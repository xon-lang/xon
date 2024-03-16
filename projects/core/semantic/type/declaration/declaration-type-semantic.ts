import {Boolean2, Nothing, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {TypeSemantic} from '../type-semantic';

export interface DeclarationTypeSemantic extends TypeSemantic {
  $: $Semantic.DECLARATION_TYPE;
  declaration: TypeDeclarationSemantic;
  generics: (TypeSemantic | Nothing)[] | Nothing;
}

export function declarationTypeSemantic(
  context: SemanticContext,
  reference: SourceReference,
  declaration: TypeDeclarationSemantic,
  generics: (TypeSemantic | Nothing)[] | Nothing,
): DeclarationTypeSemantic {
  const semantic: DeclarationTypeSemantic = {
    $: $Semantic.DECLARATION_TYPE,
    reference,
    declaration,
    generics,

    eq(other: TypeSemantic): Boolean2 {
      return (
        semanticIs<DeclarationTypeSemantic>(other, $Semantic.DECLARATION_TYPE) &&
        this.declaration.eq(other.declaration)
      );
    },

    is(other: TypeSemantic): Boolean2 {
      return (this.eq(other) || declaration.baseType?.is(other)) ?? false;
    },

    attributes(): Record<String2, TypeSemantic[]> {
      return getDeclarationAttributes(context, declaration);
    },
  };

  declaration.usages.push(reference);

  return semantic;
}

export function getDeclarationAttributes(
  context: SemanticContext,
  declaration: TypeDeclarationSemantic,
): Record<String2, TypeSemantic[]> {
  const attributes: Record<String2, TypeSemantic[]> = {};

  for (const [name, declarations] of Object.entries(declaration?.attributes)) {
    const types = declarations.map((x) => x.type).filter((x): x is TypeSemantic => !!x);
    attributes[name] = types;
  }

  return attributes;
}
