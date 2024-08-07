import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {TypeSemantic} from '../../type/type-semantic';
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

  let memberType: TypeSemantic | Nothing = nothing;

  if (instanceSemantic && node.id) {
    const attributes = instanceSemantic.type?.attributes()[node.id.text];

    if (attributes) {
      if (attributes.length > 1) {
        analyzer.diagnosticManager.addPredefinedDiagnostic(node.id.range, (x) => x.notImplemented());
      } else {
        memberType = attributes.first();
      }
    }
  }

  return memberValueSemantic(analyzer.createReference(node), memberType);
}
