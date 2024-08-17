import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {functionTypeSemantic} from '../../../type/function/function-type-semantic';
import {parametersParse} from '../../../type/function/function-type-semantic-parser';
import {typeSemanticParse} from '../../../type/type-semantic-parser';
import {unknownTypeFromNode} from '../../../type/unknown/unknown-type-semantic';
import {StructuralTypeDeclarationSemantic} from './structural-type-declaration-semantic';

export function structuralTypeDeclarationSemanticHandle(
  analyzer: SemanticAnalyzer,
  semantic: StructuralTypeDeclarationSemantic,
  node: DeclarationNode,
): void {
  const resultType = node.assign
    ? typeSemanticParse(analyzer, node.assign.value)
    : unknownTypeFromNode(analyzer, node);

  if (node.generics) {
    const generics = parametersParse(analyzer, node, node.generics);
    semantic.type = functionTypeSemantic(analyzer.reference(node.generics), generics, resultType);

    return;
  }

  semantic.type = resultType;

  if (node.parameters) {
    throw new Error('Not implemented');
  }
}
