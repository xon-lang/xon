import { String2 } from '../../lib/core';
import { infixNode } from '../node/infix/infix-node';
import { $Node, Node } from '../node/node';
import { OperatorNode } from '../node/operator/operator-node';
import { postfixNode } from '../node/postfix/postfix-node';
import { prefixNode } from '../node/prefix/prefix-node';
import { OperatorType, RecursiveType } from '../syntax-config';
import { SyntaxContext } from '../syntax-context';
import { is } from './is';

export function collapseOperator(
  context: SyntaxContext,
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): void {
  for (let i = 0; i < context.nodes.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : context.nodes.length - i - 1;
    const operator = context.nodes[index];

    if (!is<OperatorNode>(operator, $Node.OPERATOR) || !operators.includes(operator.text)) {
      continue;
    }

    const left = context.nodes[index - 1];
    const right: Node | null = context.nodes[index + 1] ?? null;

    if (
      operatorType === OperatorType.PREFIX &&
      !is<OperatorNode>(right, $Node.OPERATOR) &&
      (index === 0 || is<OperatorNode>(left, $Node.OPERATOR))
    ) {
      const prefix = prefixNode(context, operator, right);
      context.nodes.splice(index, 2, prefix);
      // handlePrefixNode(context, prefix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.POSTFIX &&
      !is<OperatorNode>(left, $Node.OPERATOR) &&
      (index === context.nodes.length - 1 || is<OperatorNode>(right, $Node.OPERATOR))
    ) {
      const postfix = postfixNode(context, operator, left);
      context.nodes.splice(index - 1, 2, postfix);

      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.INFIX &&
      !is<OperatorNode>(left, $Node.OPERATOR) &&
      !is<OperatorNode>(right, $Node.OPERATOR)
    ) {
      const infix = infixNode(context, operator, left, right);
      context.nodes.splice(index - 1, 3, infix);
      // handleInfixNode(context, infix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }
  }
}

// function handleInfixNode(context: SyntaxContext, node: InfixNode): void {
//   if (node.operator.text === TYPE_TOKEN) {
//     if (
//       is<PrefixNode>(node.left, $Node.PREFIX) &&
//       node.left.operator.text === MODEL_MODIFIER &&
//       is<IdNode>(node.left.value, $Node.ID)
//     ) {
//       const name = node.left.value.text;
//       const type = context.declarations.findLast((x) => x.name === name);

//       if (!type) {
//         throw new Error('Not implemented');
//       }

//       // : Something
//       if (is<IdNode>(node.right, $Node.ID)) {
//         const baseName = node.right.text;
//         const baseDeclaration = context.declarations.findLast((x) => x.name === baseName);

//         if (!baseDeclaration) {
//           throw new Error('Not implemented');
//         }

//         const baseType = valueSemantic(baseDeclaration, []);

//         if (!baseType) {
//           throw new Error('Not implemented');
//         }

//         type.restriction = baseType;

//         return;
//       }

//       // : Array{T}
//       if (is<InvokeNode>(node.right, $Node.INVOKE) && is<IdNode>(node.right.instance, $Node.ID)) {
//         const baseName = node.right.instance.text;
//         const baseDeclaration = context.declarations.findLast((x) => x.name === baseName);

//         if (!baseDeclaration) {
//           throw new Error('Not implemented');
//         }

//         const baseType = valueSemantic(baseDeclaration, []);

//         baseType.arguments = node.right.group.items
//           .filter<IdNode>((x): x is IdNode => is<IdNode>(x, $Node.ID))
//           .map((x) => context.declarations.findLast((t) => t.name === x.text)!)
//           .map((x) => valueSemantic(x, []));

//         if (baseType.arguments.some((x) => x === null)) {
//           throw new Error('Not implemented');
//         }

//         type.restriction = baseType;
//         type.attributes = mergeAttributes(baseType.declaration, type);

//         return;
//       }
//     }

//     // length: Integer
//     if (
//       is<IdNode>(node.left, $Node.ID) &&
//       is<IdNode>(node.right, $Node.ID) &&
//       context.parentStatement.modelDeclarationSemantic
//     ) {
//       const name = node.left.text;
//       const typeName = node.right.text;
//       const type = context.declarations.findLast((x) => x.name === typeName);

//       if (!type) {
//         throw new Error('Not implemented');
//       }

//       context.parentStatement.modelDeclarationSemantic.attributes[name] = [type];
//     }
//   }
// }

// function addModelDeclaration(context: SyntaxContext, idNode: IdNode): void {
//   const declaration: DeclarationSemantic = {
//     $: $Semantic.MODEL,
//     name: idNode.text,
//     source: context.source,
//     position: idNode.range.start,
//     usages: [],
//     restriction: nothing,
//     parameters: [],
//     attributes: {},
//   };

//   context.modelDeclarationType = declaration;
//   context.declarations.push(declaration);
// }

// function mergeAttributes(base: DeclarationSemantic, type: DeclarationSemantic): Record<String2, DeclarationSemantic[]> {
//   return { ...base.attributes, ...type.attributes };
// }
