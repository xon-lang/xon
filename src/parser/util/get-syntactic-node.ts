import { ISSUE_MESSAGE } from '../../issue/issue-message';
import {
  DeclarationNode,
  DeclarationType,
  declarationNode,
  isGroupNode,
  isObjectDeclaration,
} from '../../parser/node/declaration/declaration-node';
import { IdNode } from '../../parser/node/id/id-node';
import { ModifierNode } from '../../parser/node/modifier/modifier-node';
import { NodeType } from '../../parser/node/node-type';
import { is } from '../../parser/util/is';
import { Node } from '../node/node';
import { MODIFIERS } from '../parser-config';
import { ParserContext } from '../parser-context';
import { collapseOperators } from './collapse-operators';

export function getSyntacticNode(context: ParserContext): Node {
  collapseOperators(context);
  collapseModifierDeclaration(context);

  context.nodes.slice(1).forEach((node) => context.addErrorIssue(node, ISSUE_MESSAGE.unexpectedNode()));

  return context.nodes[0];
}

function collapseModifierDeclaration(context: ParserContext): void {
  const firstNode = context.nodes[0];

  if (!is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
    return;
  }

  let declarationType: DeclarationNode['declarationType'] = MODIFIERS[firstNode.text];
  let assignee: DeclarationNode['assignee'] = null;
  let group: DeclarationNode['group'] = null;
  const secondNode = context.nodes[1];

  if (is<IdNode>(secondNode, NodeType.ID)) {
    assignee = secondNode;
    context.nodes.splice(1, 1);
  }

  const thirdNode = context.nodes[1];

  if (isGroupNode(thirdNode)) {
    group = thirdNode;
    context.nodes.splice(1, 1);
  }

  const declaration = declarationNode(declarationType, firstNode, assignee, group, null, null);

  if (isObjectDeclaration(context.parent)) {
    declarationType = DeclarationType.ATTRIBUTE;
    context.parent.attributes.push(declaration);
  }

  context.nodes[0] = declaration;
}
