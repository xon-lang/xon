import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {ItemNode} from '../../../../syntax/group/item-node';
import {TypeNode} from '../../../../syntax/node/type/type-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {nothingTypeFromNode} from '../id/nothing/nothing-id-type-semantic';
import {TypeSemantic} from '../type-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {ArrayTypeSemantic, arrayTypeSemantic} from './array-type-semantic';

export function arrayTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ArrayTypeSemantic | Nothing {
  if (!is(node, $.BracketGroupNode)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.single(
    $.TypeDeclarationSemantic,
    analyzer.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !is(declaration, $.NominalTypeDeclarationSemantic)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) =>
      x.declarationNotFound(analyzer.config.literalTypeNames.integerTypeName),
    );

    return nothing;
  }

  const reference = analyzer.createReference(node);
  const items = node.items.map((x) => itemNodeType(analyzer, x));
  const semantic = arrayTypeSemantic(reference, declaration, items);

  return semantic;
}

// todo move or remove 'itemNodeType'
export function itemNodeType(analyzer: SemanticAnalyzer, node: ItemNode): TypeSemantic {
  if (node.value) {
    return typeSemanticParse(analyzer, node.value);
  }

  return nothingTypeFromNode(analyzer, node);
}

// todo move or remove 'typeNodeType'
export function typeNodeType(analyzer: SemanticAnalyzer, node: TypeNode): TypeSemantic {
  if (node.value) {
    return typeSemanticParse(analyzer, node.value);
  }

  return nothingTypeFromNode(analyzer, node);
}
