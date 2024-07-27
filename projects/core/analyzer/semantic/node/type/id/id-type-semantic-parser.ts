import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {IdNode} from '../../../../lexical/node/id/id-node';
import {Node} from '../../../../node';
import {InvokeNode} from '../../../../syntax/node/invoke/invoke-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {itemNodeType} from '../array/array-type-semantic-parser';
import {IdTypeSemantic, idTypeSemantic} from './id-type-semantic';

// todo should return always 'IdTypeSemantic' ???
export function idTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): IdTypeSemantic | Nothing {
  if (is(node, $.IdNode)) {
    return idParse(analyzer, node);
  }

  if (is(node, $.InvokeNode) && is(node.instance, $.IdNode)) {
    return invokeParse(analyzer, node);
  }

  return nothing;
}

function idParse(analyzer: SemanticAnalyzer, node: IdNode): IdTypeSemantic {
  const declaration = analyzer.declarationManager.single(
    $.TypeDeclarationSemantic,
    node.text.toString(),
    nothing,
    nothing,
  );

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.cannotResolveType());
  }

  if (is(declaration, $.ValueDeclarationSemantic)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.cannotBeUsedAsAType());
  }

  const reference = analyzer.createReference(node);
  return idTypeSemantic(analyzer, reference, declaration, nothing);
}

function invokeParse(analyzer: SemanticAnalyzer, node: InvokeNode): IdTypeSemantic | Nothing {
  if (!is(node.group, $.BraceGroupNode)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.group.open.range, (x) => x.notImplemented());
    return nothing;
  }

  const generics = node.group.items.map((x) => itemNodeType(analyzer, x));

  if (is(node.instance, $.IdNode)) {
    const declaration = analyzer.declarationManager.single(
      $.TypeDeclarationSemantic,
      node.instance.text.toString(),
      generics,
      nothing,
    );

    if (!declaration) {
      return nothing;
    }

    if (is(declaration, $.TypeDeclarationSemantic)) {
      const reference = analyzer.createReference(node);
      const semantic = idTypeSemantic(analyzer, reference, declaration, generics);
      // todo control when semantic attribute must be set
      node.instance.semantic = semantic;

      return semantic;
    }
  }

  if (generics.length > 0) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.instance.range, (x) => x.notImplemented());
  }

  return nothing;
}
