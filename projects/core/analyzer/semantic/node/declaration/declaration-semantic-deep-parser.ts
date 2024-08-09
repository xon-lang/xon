import {$, is} from '../../../../$';
import {Nothing, nothing} from '../../../../../lib/types';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {DeclarationSemantic} from './declaration-semantic';
import {nominalTypeDeclarationSemanticHandle} from './type/nominal/nominal-type-declaration-semantic-handle';
import {structuralTypeDeclarationSemanticHandle} from './type/structural/structural-type-declaration-semantic-handle';
import {attributeValueDeclarationSemanticHandle} from './value/attribute/attribute-value-declaration-semantic-handle';

export function declarationDeepParse(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  const semantic = node.id?.semantic;

  if (!is(semantic, $.DeclarationSemantic)) {
    return nothing;
  }

  analyzer.pushDeclarationScope();

  if (is(semantic, $.NominalTypeDeclarationSemantic)) {
    nominalTypeDeclarationSemanticHandle(analyzer, semantic, node);
  } else if (is(semantic, $.StructuralTypeDeclarationSemantic)) {
    structuralTypeDeclarationSemanticHandle(analyzer, semantic, node);
  } else if (is(semantic, $.AttributeValueDeclarationSemantic)) {
    attributeValueDeclarationSemanticHandle(analyzer, semantic, node);
  }

  analyzer.popDeclarationScope();

  return semantic;
}
