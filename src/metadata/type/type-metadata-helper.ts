import { Issue } from '~/issue/issue';
import { IntegerTypeMetadata } from '~/metadata/type/integer/integer-type-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';

// export function fillTypeMetadata(tree: ExpressionTree): TypeMetadata | null {
//   if (tree instanceof LiteralExpressionTree) {
//     let definition: DefinitionMetadata | null = null;
//     if (tree.literal instanceof IntegerLiteralTree) {
//       definition = tree.scope.core.integer;
//     } else if (tree.literal instanceof FloatLiteralTree) {
//       definition = tree.scope.core.float;
//     } else if (tree.literal instanceof StringLiteralTree) {
//       definition = tree.scope.core.string;
//     }
//     if (definition) {
//       tree.metadata = new LiteralTypeMetadata(tree.literal.value, definition);

//       return tree.metadata as TypeMetadata;
//     }
//   }

//   if (tree instanceof IdExpressionTree) {
//     const declarations = tree.scope.filter(tree.name.text);
//     if (declarations.length === 1) {
//       [tree.name.metadata] = declarations;
//       if (declarations[0] instanceof ParameterMetadata) {
//         tree.metadata = new ParameterTypeMetadata(declarations[0]);

//         return tree.metadata as TypeMetadata;
//       }
//       if (declarations[0] instanceof DefinitionMetadata) {
//         tree.metadata = new IdTypeMetadata(declarations[0]);

//         return tree.metadata as TypeMetadata;
//       }
//     } else if (declarations.length > 0) {
//       tree.name.addError('Too many declarations');
//     } else {
//       tree.name.addError('No declarations found');
//     }
//     tree.metadata = null;

//     return tree.metadata;
//   }
//   if (tree instanceof InfixExpressionTree) {
//     const left = fillTypeMetadata(tree.left);
//     const right = fillTypeMetadata(tree.right);
//     if (tree.name.text === '|' && left && right) {
//       tree.metadata = new UnionType(left, right);

//       return tree.metadata as TypeMetadata;
//     }
//     if (tree.name.text === '&' && left && right) {
//       tree.metadata = new IntersectionTypeMetadata(left, right);

//       return tree.metadata as TypeMetadata;
//     }

//     throw new Error('Not implemented');
//   }

//   if (tree instanceof MethodExpressionTree) {
//     tree.parameters.forEach((x) => {
//       x.metadata = getShadowParameterMetadata(x);
//       if (x.name) {
//         x.name.metadata = x.metadata;
//       }
//       tree.scope.add(x.metadata);
//       fillParameterMetadata(x, null);
//     });
//     const result = fillTypeMetadata(tree.value);
//     if (!result) return null;

//     tree.metadata = new MethodTypeMetadata(
//       tree.parameters.map((x) => x.metadata as ParameterMetadata),
//       result,
//     );

//     return tree.metadata as TypeMetadata;
//   }

//   if (tree instanceof InvokeExpressionTree) {
//     if (tree.ctx.arguments().open().OPEN_BRACKET() && tree.instance instanceof IdExpressionTree) {
//       const commonType = fillTypeMetadata(tree.instance);
//       if (!commonType) return null;

//       if (commonType instanceof ParameterTypeMetadata) {
//         tree.instance.name.metadata = commonType.parameter;
//       } else if (commonType instanceof IdTypeMetadata) {
//         tree.instance.name.metadata = commonType.declaration;
//       }
//       tree.metadata = new ArrayTypeMetadata(commonType, [], tree.scope.core.array);

//       return tree.metadata as TypeMetadata;
//     }
//   }

//   if (tree instanceof ArrayExpressionTree) {
//     if (tree.ctx.arguments().open().OPEN_BRACE()) {
//       const objectScope = new DeclarationScope();
//       const parameters = tree.arguments.map((x) => {
//         if (!x.name) {
//           x.addIssue(IssueLevel.error, 'No name argument');
//           tree.metadata = null;

//           return tree.metadata;
//         }
//         const metadata = new ParameterMetadata(null);
//         metadata.name = x.name.text;
//         metadata.tree = x.sourceSpan;
//         metadata.type = (x.value && fillValueMetadata(x.value).type()) ?? null;
//         tree.metadata = metadata;

//         return tree.metadata as ParameterMetadata;
//       });
//       parameters.filter((x) => x).forEach((x) => x && objectScope.add(x));
//       tree.metadata = new ObjectTypeMetadata(objectScope);

//       return tree.metadata as TypeMetadata;
//     }
//     if (tree.ctx.arguments().open().OPEN_BRACKET()) {
//       const items = tree.arguments.map((x) => (x.value && fillTypeMetadata(x.value)) ?? null);
//       let commonType: TypeMetadata | null;
//       if (items.length === 1) {
//         [commonType] = items;
//       } else if (items.length > 1) {
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         commonType = UnionType.fromTypes(items);
//       } else {
//         commonType = tree.scope.core.any.type;
//       }
//       if (commonType) {
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         tree.metadata = new ArrayTypeMetadata(commonType, items, tree.scope.core.array);

//         return tree.metadata as TypeMetadata;
//       }
//     }
//     throw new Error('Not implemented');
//   }

//   Issue.errorFromTree(tree, `Type expression metadata not found for '${tree.constructor.name}'`);
// }

export function getTypeMetadata(tree: ExpressionTree): TypeMetadata {
  if (tree.metadata) {
    if (tree.metadata instanceof TypeMetadata) {
      return tree.metadata;
    }
    Issue.errorFromTree(tree, `Wrong type metadata for "${tree.constructor.name}"`);
  }
  if (tree instanceof IntegerExpressionTree) tree.metadata = new IntegerTypeMetadata(tree.value);

  if (tree.metadata) return tree.metadata as TypeMetadata;

  Issue.errorFromTree(tree, `Type metadata not found for "${tree.constructor.name}"`);
}
