import {Nothing, String2, nothing} from '../../../lib/types';
import {$Node, is} from '../../parser/node/node';
import {StatementNode} from '../../parser/node/statement/statement-node';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {CommentBlockNode} from '../../parser/node/token/comment-block/comment-block-node';
import { DocumentationNode } from '../../parser/node/token/documentation/documentation-node';
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
  const documentation = getDocumentation(node);
  const modifier = node.modifier?.text;
  const name = node.id.text;
  const declaration: DeclarationSemantic = declarationSemantic(reference, documentation, modifier, name);

  node.id.semantic = declaration;
  context.declarationManager.add(declaration);

  return declaration;
}

export function getDocumentation(node: DeclarationNode): String2 | Nothing {
  return ''
  // if (is<StatementNode>(node.parent, $Node.STATEMENT)) {
  //   return node.parent.hiddenNodes?.last<DocumentationNode>((x): x is DocumentationNode =>
  //     is<DocumentationNode>(x, $Node.COMMENT_BLOCK),
  //   )?.value;
  // }

  // return nothing;
}
