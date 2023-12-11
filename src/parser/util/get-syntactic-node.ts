import { createErrorIssue } from '../../issue/issue';
import { issueMessage } from '../../issue/issue-message';
import {
  DeclarationType,
  declarationNode,
  isGroupNode,
  isObjectDeclaration,
  updateDeclarationRange,
} from '../../parser/node/declaration/declaration-node';
import { IdNode } from '../../parser/node/id/id-node';
import { ModifierNode } from '../../parser/node/modifier/modifier-node';
import { NodeType } from '../../parser/node/node-type';
import { is } from '../../parser/util/is';
import { Node, addNodeParent } from '../node/node';
import { ParserContext } from '../parser-context';
import { collapseOperators } from './collapse-operators';
import { MODIFIERS } from './config';

export function getSyntacticNode(context: ParserContext): Node {
  collapseModifierDeclaration(context);
  collapseOperators(context);
  // collapseDeclaration(context);

  context.nodes.slice(1).forEach((node) => context.issues.push(createErrorIssue(node, issueMessage.unexpectedNode)));

  return context.nodes[0];
}

function collapseModifierDeclaration(context: ParserContext): void {
  const firstNode = context.nodes[0];

  if (!is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
    return;
  }

  const declarationType = MODIFIERS[firstNode.text];
  const declaration = declarationNode(declarationType, firstNode, null, null, null, null);
  context.nodes[0] = declaration;

  if (isObjectDeclaration(context.parent)) {
    declaration.declarationType = DeclarationType.ATTRIBUTE;
    context.parent.attributes.push(declaration);
  }

  const secondNode = context.nodes[1];

  if (is<IdNode>(secondNode, NodeType.ID)) {
    declaration.assignee = secondNode;
    updateDeclarationRange(declaration);
    addNodeParent(declaration, secondNode);
    context.nodes.splice(1, 1);
  }

  const thirdNode = context.nodes[1];

  if (isGroupNode(thirdNode)) {
    declaration.group = thirdNode;
    updateDeclarationRange(declaration);
    addNodeParent(declaration, thirdNode);
    context.nodes.splice(1, 1);
  }
}
