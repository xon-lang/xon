import {nothing} from '../../../../../lib/types';
import {TYPE_MODIFIER} from '../../../lexical/lexical-analyzer-config';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {typeNodeType, typeSemanticParse} from '../type/type-semantic-parser';
import {unknownTypeFromNode} from '../type/unknown/unknown-type-semantic';
import {DeclarationSemantic} from './declaration-semantic';
import {declarationsParse} from './declaration-semantic-parser';
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

  if (modifier === TYPE_MODIFIER) {
    if (node.assign) {
      const valueType = typeSemanticParse(analyzer, node.assign.value);

      return structuralTypeDeclarationSemantic(reference, documentation, modifier, name, valueType);
    }

    const type = node.type ? typeNodeType(analyzer, node.type) : nothing;

    return nominalTypeDeclarationSemantic(reference, documentation, modifier, name, type);
  }

  const type = node.type ? typeNodeType(analyzer, node.type) : unknownTypeFromNode(analyzer, node);

  if (node.parameters) {
    const parameters = declarationsParse(analyzer, node.parameters.items);

    return methodValueDeclarationSemantic(reference, documentation, modifier, name, parameters, type);
  }

  return propertyValueDeclarationSemantic(reference, documentation, modifier, name, type);
}
