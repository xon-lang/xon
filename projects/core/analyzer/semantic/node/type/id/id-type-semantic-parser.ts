import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {IdNode} from '../../../../lexical/node/id/id-node';
import {Node} from '../../../../node';
import {InvokeNode} from '../../../../syntax/node/invoke/invoke-node';
import {DeclarationKind} from '../../../declaration-manager';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {IdTypeSemantic, idTypeSemantic} from './id-type-semantic';

export function declarationTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IdTypeSemantic | Nothing {
  if (is(node, $.IdNode)) {
    return idParse(analyzer, node);
  }

  if (is(node, $.InvokeNode) && is(node.instance, $.IdNode)) {
    return invokeParse(analyzer, node);
  }

  return nothing;
}

function idParse(analyzer: SemanticAnalyzer, node: IdNode): IdTypeSemantic | Nothing {
  const declaration = analyzer.declarationManager.single(DeclarationKind.TYPE, node.text, nothing, nothing);

  if (!declaration) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.cannotResolveType());

    return nothing;
  }

  if (is(declaration, $.DeclarationSemantic)) {
    const reference = analyzer.createReference(node);
    const semantic = idTypeSemantic(analyzer, reference, declaration, nothing);

    return semantic;
  }

  analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.cannotBeUsedAsAType());

  return nothing;
}

function invokeParse(analyzer: SemanticAnalyzer, node: InvokeNode): IdTypeSemantic | Nothing {
  if (!is(node.group.open, $.BraceOpenNode)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.group.open.range, (x) => x.notImplemented());
    return nothing;
  }

  const generics = node.group.items.map((x) => typeSemanticParse(analyzer, x.value));

  if (is(node.instance, $.IdNode)) {
    const declaration = analyzer.declarationManager.single(
      DeclarationKind.TYPE,
      node.instance.text,
      generics,
      nothing,
    );

    if (!declaration) {
      return nothing;
    }

    if (isTypeDeclarationSemantic(declaration)) {
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
