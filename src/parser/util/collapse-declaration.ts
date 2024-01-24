// import {
//   DeclarationNode,
//   DeclarationType,
//   declarationNode,
//   isGroupNode,
//   isObjectDeclaration,
// } from '../node/declaration/declaration-node';
// import { IdNode } from '../node/id/id-node';
// import { ModifierNode } from '../node/modifier/modifier-node';
// import { NodeType } from '../node/node-type';
// import { MODIFIERS } from '../parser-config';
// import { ParserContext } from '../parser-context';
// import { is } from './is';

// export function collapseDeclaration(context: ParserContext): void {
//   const firstNode = context.nodes[0];

//   if (!is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
//     return;
//   }

//   let declarationType: DeclarationNode['declarationType'] = MODIFIERS[firstNode.text];
//   let assignee: DeclarationNode['assignee'] = null;
//   let group: DeclarationNode['group'] = null;
//   const secondNode = context.nodes[1];

//   if (is<IdNode>(secondNode, NodeType.ID)) {
//     assignee = secondNode;
//     context.nodes.splice(1, 1);
//   }

//   const thirdNode = context.nodes[1];

//   if (isGroupNode(thirdNode)) {
//     group = thirdNode;
//     context.nodes.splice(1, 1);
//   }

//   const declaration = declarationNode(context, declarationType, firstNode, assignee, group, null, null);

//   if (isObjectDeclaration(context.parentStatement)) {
//     declarationType = DeclarationType.ATTRIBUTE;
//     context.parentStatement.attributes.push(declaration);
//   }

//   context.nodes[0] = declaration;
// }
