import {Nothing, nothing} from '#common';
import {
  $IdNode,
  $ValueDeclarationSemantic,
  IdValueSemantic,
  idValueSemantic,
  Node,
  SemanticAnalyzer,
  unknownTypeSemantic,
} from '#core';
import {is} from '#typing';

export function idValueSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): IdValueSemantic | Nothing {
  if (!is(node, $IdNode)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.find(
    $ValueDeclarationSemantic,
    node.text,
    nothing,
    nothing,
  );

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.notImplemented());
  }

  const name = node.text.toNativeString();
  const type = declaration?.type ?? unknownTypeSemantic(analyzer, node);

  return idValueSemantic(node, name, declaration, type);
}
