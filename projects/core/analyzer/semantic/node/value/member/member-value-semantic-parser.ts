import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {TypeSemantic} from '../../type/type-semantic';
import {unknownTypeFromNode} from '../../type/unknown/unknown-type-semantic';
import {valueSemanticParse} from '../value-semantic-parser';
import {MemberValueSemantic, memberValueSemantic} from './member-value-semantic';

export function memberValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): MemberValueSemantic | Nothing {
  if (!is(node, $.MemberNode)) {
    return nothing;
  }

  const instanceSemantic = valueSemanticParse(analyzer, node.instance);
  node.instance.semantic = instanceSemantic;

  let memberType: TypeSemantic = unknownTypeFromNode(analyzer, node.id ?? node.operator);

  if (instanceSemantic && node.id) {
    const attributes = instanceSemantic.type
      ?.attributes()
      .filterByName($.ValueDeclarationSemantic, node.id.text.toString());

    if (attributes && attributes.length === 1) {
      memberType = attributes[0].type;
    } else {
      analyzer.diagnosticManager.addPredefinedDiagnostic(node.id.range, (x) => x.notImplemented());
    }
  }

  const name = node.id?.text.toString();

  return memberValueSemantic(analyzer.reference(node), instanceSemantic, name, memberType);
}
