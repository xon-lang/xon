import {nothing, Nothing} from '../../../../../lib/types';
import {TYPE_MODIFIER} from '../../../lexical/lexical-analyzer-config';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {typeNodeType} from '../type/array/array-type-semantic-parser';
import {typeSemanticParse} from '../type/type-semantic-parser';
import {DeclarationSemantic} from './declaration-semantic';
import {nominalTypeDeclarationSemantic} from './type/nominal/nominal-type-declaration-semantic';
import {structuralTypeDeclarationSemantic} from './type/structural/structural-type-declaration-semantic';
import {methodValueDeclarationSemantic} from './value/method/method-value-declaration-semantic';
import {propertyValueDeclarationSemantic} from './value/property/property-value-declaration-semantic';

export function declarationShallowParse(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  const declaration: DeclarationSemantic = createDeclaration(analyzer, node);
  node.id.semantic = declaration;
  analyzer.declarationManager.add(declaration);

  return declaration;
}

function createDeclaration(analyzer: SemanticAnalyzer, node: DeclarationNode) {
  const reference = analyzer.createReference(node.id);
  const documentation = node.documentation?.description?.text.toString().setPadding(0).trim();
  const modifier = node.modifier?.text.toString();
  const name = node.id.text.toString();

  // const nothingType = analyzer.declarationManager.single(DeclarationKind.TYPE, 'Nothing')

  if (modifier === TYPE_MODIFIER) {
    if (node.assign) {
      const valueType = typeSemanticParse(analyzer, node.assign.value);

      return structuralTypeDeclarationSemantic(reference, documentation, modifier, name, valueType);
    }

    const type = node.type ? typeNodeType(analyzer, node.type) : nothing;
    return nominalTypeDeclarationSemantic(reference, documentation, modifier, name, type);
  }

  if (node.parameters) {
    return methodValueDeclarationSemantic(reference, documentation, modifier, name, nothing, nothing);
  }

  return propertyValueDeclarationSemantic(reference, documentation, modifier, name, nothing);
}
