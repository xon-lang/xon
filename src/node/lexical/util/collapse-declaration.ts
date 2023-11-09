// import { InfixNode } from '~/node/lexical/infix/infix-node';
// import { ModifierNode } from '~/node/lexical/modifier/modifier-node';
// import { ASSIGN_TOKEN } from '~/node/lexical/operators';
// import { Node, NodeType, is } from '~/node/node';

// export function collapseDeclaration(nodes: Node[]): void {
//   const firstNode = nodes[0];

//   if (is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
//     const secondNode = nodes[1];

//     if (is<InfixNode>(secondNode, NodeType.INFIX)) {
//       const {operator, left, right} = secondNode;

//       if (operator.text === ASSIGN_TOKEN) {
//         if (is<InfixNode>(left, NodeType.INFIX)) {
//           const {operator, left, right} = left;
//         }
//       }
//     }
//   }
// }

// function
