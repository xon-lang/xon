import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {DeclarationKind} from '../../../declaration-manager';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {StringTypeSemantic, stringTypeSemantic} from './string-type-semantic';

export function stringTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): StringTypeSemantic | Nothing {
  if (!is(node, $.StringNode)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.single(
    DeclarationKind.TYPE,
    analyzer.config.literalTypeNames.stringTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !isTypeDeclarationSemantic(declaration)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) =>
      x.declarationNotFound(analyzer.config.literalTypeNames.stringTypeName),
    );

    return nothing;
  }

  const reference = analyzer.createReference(node);
  // todo should fix 'node.content?.text ?? ''' ???
  const semantic = stringTypeSemantic(reference, declaration, node.content?.text ?? '');

  return semantic;
}
