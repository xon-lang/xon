import {Nothing, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {OBJECT_OPEN} from '../../../../lexical/lexical-analyzer-config';
import {IdNode} from '../../../../lexical/node/id/id-node';
import {$Node, Node, is} from '../../../../syntax/node';
import {InvokeNode} from '../../../../syntax/node/invoke/invoke-node';
import {DeclarationKind} from '../../../declaration-manager';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {DeclarationSemantic, isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic-node';
import {typeSemanticParse} from '../type-semantic-parser';
import {IdTypeSemantic, idTypeSemantic} from './id-type-semantic';

export function declarationTypeSemanticTryParse(
  context: SemanticAnalyzerContext,
  node: Node,
): IdTypeSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    return idParse(context, node);
  }

  if (is<InvokeNode>(node, $Node.INVOKE) && is<IdNode>(node.instance, $Node.ID)) {
    return invokeParse(context, node);
  }

  return nothing;
}

function idParse(context: SemanticAnalyzerContext, node: IdNode): IdTypeSemantic | Nothing {
  const declaration = context.declarationManager.single(DeclarationKind.TYPE, node.text, nothing, nothing);

  if (!declaration) {
    context.issueManager.addError(node.range, DIAGNOSTIC_MESSAGE.cannotResolveType());

    return nothing;
  }

  if (semanticIs<DeclarationSemantic>(declaration, $Semantic.DECLARATION)) {
    const reference = context.createReference(node);
    const semantic = idTypeSemantic(context, reference, declaration, nothing);

    return semantic;
  }

  context.issueManager.addError(node.range, DIAGNOSTIC_MESSAGE.cannotBeUsedAsAType());

  return nothing;
}

function invokeParse(context: SemanticAnalyzerContext, node: InvokeNode): IdTypeSemantic | Nothing {
  if (node.group.open.text !== OBJECT_OPEN) {
    context.issueManager.addError(node.group.open.range, DIAGNOSTIC_MESSAGE.notImplemented());

    return nothing;
  }

  const generics = node.group.items.map((x) => typeSemanticParse(context, x.value));

  if (is<IdNode>(node.instance, $Node.ID)) {
    const declaration = context.declarationManager.single(
      DeclarationKind.TYPE,
      node.instance.text,
      generics,
      nothing,
    );

    if (!declaration) {
      return nothing;
    }

    if (isTypeDeclarationSemantic(declaration)) {
      const reference = context.createReference(node);
      const semantic = idTypeSemantic(context, reference, declaration, generics);
      // todo control when semantic attribute must be set
      node.instance.semantic = semantic;

      return semantic;
    }
  }

  if (generics.length > 0) {
    context.issueManager.addError(node.instance.range, DIAGNOSTIC_MESSAGE.notImplemented());
  }

  return nothing;
}
