import {Nothing, nothing} from '#common';
import {$, Node, SemanticAnalyzer, TypeSemantic, idTypeSemantic, is} from '#core';

export function idTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): TypeSemantic | Nothing {
  if (!is(node, $.IdNode)) {
    return nothing;
  }

  const name = node.text.toString();
  const declaration = analyzer.declarationManager.find($.TypeDeclarationSemantic, name, nothing, nothing);

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.cannotResolveType());
  } else if (is(declaration, $.ValueDeclarationSemantic)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.cannotBeUsedAsAType());
  }

  return idTypeSemantic(analyzer, node, name, declaration);
}
