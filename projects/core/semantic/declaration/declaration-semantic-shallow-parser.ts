import {Nothing, String2, nothing} from '../../../lib/types';
import {$Node, is} from '../../parser/node/node';
import {StatementNode} from '../../parser/node/statement/statement-node';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {CommentBlockNode} from '../../parser/node/token/comment-block/comment-block-node';
import {SemanticContext} from '../semantic-context';
import {DeclarationSemantic, declarationSemantic} from './declaration-semantic';

export function declarationShallowParse(
  context: SemanticContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  if (!node.id) {
    return nothing;
  }

  const reference = context.createReference(node.id);
  const modifier = node.modifier?.text;
  const name = node.id.text;
  const declaration: DeclarationSemantic = declarationSemantic(reference, modifier, name);

  // todo should we sent it to constructor ???
  declaration.documentation = getDocumentation(node);
  node.id.semantic = declaration;
  context.declarationManager.add(declaration);

  return declaration;
}

export function getDocumentation(node: DeclarationNode): String2 | Nothing {
  if (is<StatementNode>(node.parent, $Node.STATEMENT)) {
    return node.parent.hiddenNodes?.last<CommentBlockNode>((x): x is CommentBlockNode =>
      is<CommentBlockNode>(x, $Node.COMMENT_BLOCK),
    )?.value;
  }

  return nothing;
}
