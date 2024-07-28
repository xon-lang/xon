import {TYPE_MODIFIER} from '../../../lexical/lexical-analyzer-config';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {unknownTypeFromNode} from '../type/unknown/unknown-type-semantic';
import {DeclarationSemantic} from './declaration-semantic';
import {nominalTypeDeclarationSemantic} from './type/nominal/nominal-type-declaration-semantic';
import {structuralTypeDeclarationSemantic} from './type/structural/structural-type-declaration-semantic';
import {methodValueDeclarationSemantic} from './value/method/method-value-declaration-semantic';
import {propertyValueDeclarationSemantic} from './value/property/property-value-declaration-semantic';

export function declarationShallowParse(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): DeclarationSemantic {
  const declaration = createDeclaration(analyzer, node);
  node.id.semantic = declaration;
  analyzer.declarationManager.add(declaration);

  return declaration;
}

function createDeclaration(analyzer: SemanticAnalyzer, node: DeclarationNode): DeclarationSemantic {
  const reference = analyzer.createReference(node.id);
  const documentation = node.documentation?.description?.text.toString().setPadding(0).trim();
  const modifier = node.modifier?.text.toString();
  const name = node.id.text.toString();
  const type = unknownTypeFromNode(analyzer, node);

  if (modifier === TYPE_MODIFIER) {
    if (node.assign) {
      return structuralTypeDeclarationSemantic(reference, documentation, modifier, name, type);
    }

    return nominalTypeDeclarationSemantic(reference, documentation, modifier, name, type);
  }

  if (node.parameters) {
    return methodValueDeclarationSemantic(reference, documentation, modifier, name, [], type);
  }

  return propertyValueDeclarationSemantic(reference, documentation, modifier, name, type);
}
