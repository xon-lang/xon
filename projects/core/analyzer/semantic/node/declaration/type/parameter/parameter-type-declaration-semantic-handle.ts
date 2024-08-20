import {nothing} from '../../../../../../../lib/types';
import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {typeSemanticParse} from '../../../type/type-semantic-parser';
import {unknownTypeSemantic} from '../../../type/unknown/unknown-type-semantic';
import {ParameterTypeDeclarationSemantic} from './parameter-type-declaration-semantic';

export function parameterTypeDeclarationSemanticHandle(
  analyzer: SemanticAnalyzer,
  semantic: ParameterTypeDeclarationSemantic,
  node: DeclarationNode,
): void {
  semantic.value = node.assign ? typeSemanticParse(analyzer, node.assign.value) : nothing;

  semantic.type = node.type
    ? typeSemanticParse(analyzer, node.type.value)
    : semantic.value ?? unknownTypeSemantic(analyzer, node);

  if (node.generics || node.parameters) {
    throw new Error('Not implemented');
  }
}
