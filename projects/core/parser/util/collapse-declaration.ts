// import {Nothing, nothing} from '../../lib/core';
// import {$Node, Node, is} from '../node/node';
// import {AssignNode, assignNode} from '../node/syntax/assign/assign-node';
// import {DeclarationNode, declarationNode} from '../node/syntax/declaration/declaration-node';
// import {GenericsNode, genericsNode} from '../node/syntax/generics/generics-node';
// import {GroupNode} from '../node/syntax/group/group-node';
// import {InfixNode} from '../node/syntax/infix/infix-node';
// import {InvokeNode} from '../node/syntax/invoke/invoke-node';
// import {ObjectNode} from '../node/syntax/object/object-node';
// import {ParametersNode, parametersNode} from '../node/syntax/parameters/parameters-node';
// import {PrefixNode} from '../node/syntax/prefix/prefix-node';
// import {TypeNode, typeNode} from '../node/syntax/type/type-node';
// import {IdNode} from '../node/token/id/id-node';
// import {ASSIGN, GROUP_NODE_OPEN, MODIFIER_KEYWORDS, OBJECT_NODE_OPEN, TYPE, TYPE_MODIFIERS} from '../parser-config';
// import {SyntaxContext} from '../syntax-context';

// export function parseDeclarationStatement(context: SyntaxContext, node: Node): DeclarationNode | Nothing {
//   const parts = getDeclarationParts(context, node);

//   if (!parts) {
//     return nothing;
//   }

//   if (parts.modifier) {
//     return partsToDeclaration(parts);
//   }

//   const parentDeclaration = context.parentStatement?.item;

//   if (
//     is<DeclarationNode>(parentDeclaration, $Node.DECLARATION) &&
//     parentDeclaration.modifier?.text &&
//     TYPE_MODIFIERS.includes(parentDeclaration.modifier.text)
//   ) {
//     const declaration = partsToDeclaration(parts);
//     parentDeclaration.attributes.push(declaration);

//     return declaration;
//   }

//   return nothing;
// }

// function getDeclarationParts(context: SyntaxContext, node: Node | Nothing): Partial<DeclarationNode> | Nothing {
//   if (!node) {
//     return nothing;
//   }

//   const {header, type, assign} = getHeaderTypeAssign(context, node);

//   if (is<PrefixNode>(header, $Node.PREFIX) && MODIFIER_KEYWORDS.includes(header.operator.text)) {
//     const underModifier = getUnderModifier(context, header.value);

//     if (!underModifier) {
//       return nothing;
//     }

//     return {modifier: header.operator, ...underModifier, type, assign: assign};
//   }

//   const underModifier = getUnderModifier(context, header);

//   if (!underModifier) {
//     return nothing;
//   }

//   return {...underModifier, type, assign: assign};
// }

// function getHeaderTypeAssign(
//   context: SyntaxContext,
//   node: Node | Nothing,
// ): {header: Node | Nothing; type?: TypeNode | Nothing; assign?: AssignNode | Nothing} {
//   if (is<InfixNode>(node, $Node.INFIX)) {
//     if (node.operator.text === TYPE) {
//       return {header: node.left, type: typeNode(context, node.operator, node.right)};
//     }

//     if (node.operator.text === ASSIGN) {
//       const headerType = getHeaderTypeAssign(context, node.left);

//       return {...headerType, assign: assignNode(context, node.operator, node.right)};
//     }
//   }

//   return {header: node};
// }

// function getUnderModifier(
//   context: SyntaxContext,
//   node: Node | Nothing,
// ):
//   | {
//       id?: IdNode;
//       generics?: GenericsNode | Nothing;
//       parameters?: ParametersNode | Nothing;
//     }
//   | Nothing {
//   if (!node) {
//     return nothing;
//   }

//   if (is<IdNode>(node, $Node.ID)) {
//     return {id: node};
//   }

//   if (is<InvokeNode>(node, $Node.INVOKE)) {
//     if (is<GroupNode>(node.group, $Node.GROUP) || is<ObjectNode>(node.group, $Node.OBJECT)) {
//       const instance = getUnderModifier(context, node.instance);

//       if (!instance) {
//         return nothing;
//       }

//       if (node.group.open.text === OBJECT_NODE_OPEN) {
//         const items = node.group.items.map((x) => parseGeneric(context, x.value));
//         const generics = genericsNode(node.group.open, items, node.group.close);

//         return {...instance, generics};
//       }

//       if (node.group.open.text === GROUP_NODE_OPEN) {
//         const items = node.group.items.map((x) => parseParameter(context, x.value));
//         const parameters = parametersNode(node.group.open, items, node.group.close);

//         return {...instance, parameters};
//       }
//     }
//   }

//   return nothing;
// }

// // todo remove it
// function parseGeneric(context: SyntaxContext, node: Node | Nothing): DeclarationNode | Nothing {
//   if (!node) {
//     return nothing;
//   }

//   const parts = getDeclarationParts(context, node);

//   if (!parts) {
//     return nothing;
//   }

//   return partsToDeclaration(parts);
// }

// // todo remove it
// function parseParameter(context: SyntaxContext, node: Node | Nothing): DeclarationNode | Nothing {
//   if (!node) {
//     return nothing;
//   }

//   const parts = getDeclarationParts(context, node);

//   if (!parts) {
//     return nothing;
//   }

//   return partsToDeclaration(parts);
// }

// function partsToDeclaration(parts: Partial<DeclarationNode>) {
//   return declarationNode(parts.modifier, parts.id, parts.generics, parts.parameters, parts.type, parts.assign);
// }
