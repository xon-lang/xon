import {
  $MemberNode,
  $ValueDeclarationSemantic,
  MemberValueSemantic,
  Node,
  SemanticAnalyzer,
  TypeSemantic,
  memberValueSemantic,
  unknownTypeSemantic,
  valueSemanticParse,
} from '#analyzer';
import {Nothing, nothing} from '#common';
import {is} from '#typing';

export function memberValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): MemberValueSemantic | Nothing {
  if (!is(node, $MemberNode)) {
    return nothing;
  }

  const instanceSemantic = valueSemanticParse(analyzer, node.instance);
  node.instance.semantic = instanceSemantic;

  let memberType: TypeSemantic = unknownTypeSemantic(analyzer, node.id ?? node.operator);

  if (instanceSemantic && node.id) {
    const attributes = instanceSemantic.type
      ?.attributes()
      .filterByName($ValueDeclarationSemantic, node.id.text);

    if (attributes && attributes.count() === 1) {
      memberType = attributes.at2(0).type;
    } else {
      analyzer.diagnosticManager.addPredefinedDiagnostic(node.id.reference, (x) => x.notImplemented());
    }
  }

  const name = node.id?.text;

  return memberValueSemantic(node, instanceSemantic, name, memberType);
}
