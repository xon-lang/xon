import {Boolean2, Nothing, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {ConstDeclarationSemantic} from '../../declaration/const/const-declaration-semantic';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {TypeSemantic} from '../type-semantic';

export interface DeclarationTypeSemantic extends TypeSemantic {
  $: $Semantic.DECLARATION_TYPE;
  declaration: TypeDeclarationSemantic | ConstDeclarationSemantic;
  generics: (TypeSemantic | Nothing)[] | Nothing;
}

export function declarationTypeSemantic(
  context: SemanticContext,
  reference: SourceReference,
  declaration: TypeDeclarationSemantic | ConstDeclarationSemantic,
  generics: (TypeSemantic | Nothing)[] | Nothing,
): DeclarationTypeSemantic {
  const semantic: DeclarationTypeSemantic = {
    $: $Semantic.DECLARATION_TYPE,
    reference,
    declaration,
    generics,

    is(other: TypeSemantic): Boolean2 {
      if (this.eq(other)) {
        return true;
      }

      if (semanticIs<TypeDeclarationSemantic>(this.declaration, $Semantic.TYPE_DECLARATION)) {
        return this.declaration.baseType?.is(other) ?? false;
      }

      if (semanticIs<ConstDeclarationSemantic>(this.declaration, $Semantic.CONST_DECLARATION)) {
        return this.declaration.initializer?.type?.is(other) ?? false;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (
        semanticIs<TypeDeclarationSemantic>(this.declaration, $Semantic.TYPE_DECLARATION) &&
        semanticIs<DeclarationTypeSemantic>(other, $Semantic.DECLARATION_TYPE)
      ) {
        return this.declaration.eq(other.declaration);
      }

      if (
        semanticIs<ConstDeclarationSemantic>(this.declaration, $Semantic.CONST_DECLARATION) &&
        semanticIs<DeclarationTypeSemantic>(other, $Semantic.DECLARATION_TYPE)
      ) {
        //  if( this.declaration.value != nothing){
        //   return this.declaration.value === other.declaration.
        //  }
      }

      return false;
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
  declaration: TypeDeclarationSemantic | ConstDeclarationSemantic,
): Record<String2, TypeSemantic[]> {
  const attributes: Record<String2, TypeSemantic[]> = {};

  if (semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
    for (const [name, declarations] of Object.entries(declaration?.attributes)) {
      const types = declarations.map((x) => x.type).filter((x): x is TypeSemantic => !!x);
      attributes[name] = types;
    }
  }

  return attributes;
}
