import {Array2, Boolean2, Nothing, String2} from '../../../../lib/types';
import {TextResourceRange} from '../../../util/resource/text/text-resource-reference';
import {TYPE_MODIFIERS, VALUE_MODIFIERS} from '../../lexical/lexical-analyzer-config';
import {DocumentationNode} from '../../syntax/documentation/documentation-node';
import {$Semantic, SemanticNode, semanticIs} from '../node/semantic-node';
import {TypeSemantic} from '../type/type-semantic';
import {ValueSemantic} from '../value/value-semantic';

export interface DeclarationSemantic extends SemanticNode<$Semantic.DECLARATION> {
  documentation?: DocumentationNode | Nothing;
  usages: Array2<TextResourceRange>;
  modifier?: String2 | Nothing;
  name: String2;
  generics?: Array2<DeclarationSemantic | Nothing> | Nothing;
  parameters?: Array2<DeclarationSemantic | Nothing> | Nothing;
  type?: TypeSemantic | Nothing;
  value?: (TypeSemantic | ValueSemantic) | Nothing;
  attributes?: Record<String2, Array2<DeclarationSemantic>> | Nothing;

  eq(other: DeclarationSemantic): Boolean2;
}

export function declarationSemantic(
  reference: TextResourceRange,
  documentation: DocumentationNode | Nothing,
  modifier: String2 | Nothing,
  name: String2,
): DeclarationSemantic {
  return {
    $: $Semantic.DECLARATION,
    reference,
    documentation,
    modifier,
    name,
    usages: [reference],

    eq(other: DeclarationSemantic): Boolean2 {
      return this.reference.positionEquals(other.reference);
    },
  };
}

export function isTypeDeclarationSemantic(semantic: SemanticNode): semantic is DeclarationSemantic {
  return (
    semanticIs<DeclarationSemantic>(semantic, $Semantic.DECLARATION) &&
    !!semantic.modifier &&
    TYPE_MODIFIERS.includes(semantic.modifier)
  );
}

export function isValueDeclarationSemantic(semantic: SemanticNode): semantic is DeclarationSemantic {
  return (
    semanticIs<DeclarationSemantic>(semantic, $Semantic.DECLARATION) &&
    (!semantic.modifier || VALUE_MODIFIERS.includes(semantic.modifier))
  );
}
