import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {InvokeNode} from '../../../parser/node/syntax/invoke/invoke-node';
import {IdNode} from '../../../parser/node/token/id/id-node';
import {OBJECT_OPEN} from '../../../parser/parser-config';
import {DeclarationKind} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../type-semantic-parser';
import {DeclarationTypeSemantic, declarationTypeSemantic} from './declaration-type-semantic';

export function declarationTypeSemanticTryParse(
  context: SemanticContext,
  node: Node,
): DeclarationTypeSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    return idParse(context, node);
  }

  if (is<InvokeNode>(node, $Node.INVOKE) && is<IdNode>(node.instance, $Node.ID)) {
    return invokeParse(context, node);
  }

  return nothing;
}

function idParse(context: SemanticContext, node: IdNode): DeclarationTypeSemantic | Nothing {
  const declaration = context.declarationManager.single(DeclarationKind.TYPE, node.text, nothing, nothing);

  if (!declaration) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.cannotResolveType());

    return nothing;
  }

  if (semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
    const reference = context.createReference(node);
    const semantic = declarationTypeSemantic(context, reference, declaration, nothing);

    return semantic;
  }

  context.issueManager.addError(node.range, ISSUE_MESSAGE.cannotBeUsedAsAType());

  return nothing;
}

function invokeParse(context: SemanticContext, node: InvokeNode): DeclarationTypeSemantic | Nothing {
  if (node.group.open.text !== OBJECT_OPEN) {
    context.issueManager.addError(node.group.open.range, ISSUE_MESSAGE.notImplemented());

    return nothing;
  }

  const generics = node.group.items.map((x) => typeSemanticParse(context, x.value));

  if (is<IdNode>(node.instance, $Node.ID)) {
    const declaration = context.declarationManager.single(DeclarationKind.TYPE, node.instance.text, generics, nothing);

    if (!declaration) {
      return nothing;
    }

    if (semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
      const reference = context.createReference(node);
      const semantic = declarationTypeSemantic(context, reference, declaration, generics);
      // todo control when semantic attribute must be set
      node.instance.semantic = semantic;

      return semantic;
    }
  }

  if (generics.length > 0) {
    context.issueManager.addError(node.instance.range, ISSUE_MESSAGE.notImplemented());
  }

  return nothing;
}
