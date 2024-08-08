import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {BracketGroupNode} from '../../../../syntax/group/bracket/bracket-group-node';
import {ItemNode} from '../../../../syntax/group/item-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {TypeSemantic} from '../type-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {unknownTypeFromNode} from '../unknown/unknown-type-semantic';
import {ArrayTypeSemantic, arrayTypeSemantic} from './array-type-semantic';

export function arrayTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ArrayTypeSemantic | Nothing {
  if (!is(node, $.BracketGroupNode)) {
    return nothing;
  }

  return arrayTypeSemanticParse(analyzer, node);
}

export function arrayTypeSemanticParse(
  analyzer: SemanticAnalyzer,
  node: BracketGroupNode,
): ArrayTypeSemantic {
  const declaration = analyzer.declarationManager.single(
    $.NominalTypeDeclarationSemantic,
    analyzer.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) =>
      x.declarationNotFound(analyzer.config.literalTypeNames.integerTypeName),
    );
  }

  const reference = analyzer.reference(node);
  const items = node.items.map((x) => itemNodeType(analyzer, x));
  const semantic = arrayTypeSemantic(reference, declaration, items);

  return semantic;
}

// todo move or remove 'itemNodeType'
export function itemNodeType(analyzer: SemanticAnalyzer, node: ItemNode): TypeSemantic {
  if (node.value) {
    return typeSemanticParse(analyzer, node.value);
  }

  return unknownTypeFromNode(analyzer, node);
}
