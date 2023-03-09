import { Issue } from '~/issue/issue';
import { AttributeDeclarationMetadata } from '~/metadata/declaration/attribute/attribute-metadata';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { ModelDeclarationMetadata } from '~/metadata/declaration/model/model-declaration-metadata';
import { ObjectDeclarationMetadata } from '~/metadata/declaration/object/object-declaration-metadata';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { BodyTree } from '~/tree/expression/body/body-expression-tree';
import { SourceTree } from '~/tree/source/source-tree';
import { isDeclarationStatement } from '~/tree/statement/statement-tree-helper';

// export function getShadowSourceMetadata(tree: SourceTree): DeclarationMetadata[] {
//   const declarationTrees = tree.statements
//     .filter(isDeclarationStatement)
//     .filter((x) => !x.declaration.metadata)
//     .map((x) => x.declaration);

//   const declarations: DeclarationMetadata[] = [];
//   for (const declarationTree of declarationTrees) {
//     if (!declarationTree.modifier) {
//       declarationTree.metadata = getShadowParameterMetadata(declarationTree);
//     } else if (declarationTree.modifier?.text === 'operator') {
//       declarationTree.metadata = getShadowOperatorMetadata(declarationTree);
//     } else {
//       declarationTree.metadata = getShadowDefinitionMetadata(declarationTree);
//     }

//     if (declarationTree.metadata instanceof DestructureMetadata) {
//       declarationTree.metadata.parameters.forEach((x) => tree.scope.add(x));
//     } else if (tree.parent instanceof ModuleTree && declarationTree.modifier) {
//       tree.parent.scope.add(declarationTree.metadata);
//     } else {
//       tree.scope.add(declarationTree.metadata);
//     }

//     declarations.push(declarationTree.metadata);
//   }

//   return declarations;
// }

// export function getShadowDefinitionMetadata(tree: DeclarationTree): DefinitionMetadata {
//   const metadata = new DefinitionMetadata(tree);

//   for (const parameter of tree.parameters) {
//     parameter.metadata = getShadowParameterMetadata(parameter);
//     metadata.parameters.push(parameter.metadata);
//     tree.scope.add(parameter.metadata);
//   }

//   if (tree.body) {
//     const declarations = getShadowSourceMetadata(tree.body);
//     metadata.attributes = declarations.filter((x) => x instanceof ParameterMetadata);
//   }

//   return metadata;
// }

// export function getShadowOperatorMetadata(tree: DeclarationTree): ParameterMetadata {
//   const metadata = new OperatorMetadata(tree);

//   for (const parameter of tree.parameters) {
//     parameter.metadata = getShadowParameterMetadata(parameter);
//     metadata.parameters.push(parameter.metadata);
//     tree.scope.add(parameter.metadata);
//   }

//   if (tree.body) {
//     getShadowSourceMetadata(tree.body);
//   }

//   return metadata;
// }

// export function getShadowParameterMetadata(tree: DeclarationTree): ParameterMetadata {
//   if (tree.body) {
//     getShadowSourceMetadata(tree.body);
//   }

//   if (tree.destructure.length) {
//     const metadata = new DestructureMetadata(tree);
//     for (const parameter of tree.destructure) {
//       parameter.metadata = getShadowParameterMetadata(parameter);
//       // metadata.parameters.push(parameter.metadata);
//     }

//     return metadata;
//   }

//   const metadata = new ParameterMetadata(tree);
//   metadata.modifier = tree.modifier?.text;

//   for (const parameter of tree.parameters) {
//     metadata.parameters.push(getShadowParameterMetadata(parameter));
//   }

//   metadata.parameters.forEach((x) => tree.scope.add(x));

//   return metadata;
// }

// export function fillDeclarationMetadata(tree: DeclarationTree): void {
//   if (tree.modifier?.text === 'operator') {
//     fillOperatorMetadata(tree, null);
//   } else if (tree.modifier?.text === 'model' || tree.modifier?.text === 'object') {
//     fillDefinitionMetadata(tree);
//   } else {
//     fillParameterMetadata(tree, null);
//   }
// }

// export function fillDefinitionMetadata(tree: DeclarationTree): void {
//   for (const parameter of tree.parameters) {
//     fillParameterMetadata(parameter, null);
//   }

//   // fix base type should be TypeMetadata
//   if (tree.type instanceof IdExpressionTree) {
//     const declarations = tree.scope.filter(tree.type.name.text);
//     if (declarations.length === 1) {
//       tree.type.metadata = new IdTypeMetadata(declarations[0] as DefinitionMetadata);
//       if (tree.metadata instanceof DefinitionMetadata) {
//         tree.metadata.base = declarations[0] as DefinitionMetadata;
//       }
//     } else if (declarations.length > 0) {
//       tree.type.addError('Too many declarations');
//     } else {
//       tree.type.addError('No declarations found');
//     }
//   } else if (tree.type) {
//     tree.type.addError('Base class should be an IdExpression');
//   }

//   for (const parameter of tree.body?.statements
//     .filterInstance<DeclarationStatementTree>()
//     .filter((x) => x.declaration instanceof DeclarationTree)
//     .map((x) => x.declaration as DeclarationTree) ?? []) {
//     fillParameterMetadata(parameter, null);
//   }
// }

// export function fillOperatorMetadata(tree: DeclarationTree, alternativeType: TypeMetadata | null): void {
//   tree.parameters.forEach((x) => fillParameterMetadata(x, null));

//   if (tree.value) {
//     fillValueMetadata(tree.value);
//   }

//   if (tree.metadata) {
//     if (tree.type) {
//       tree.metadata.type = fillTypeMetadata(tree.type);
//       tree.type.metadata = tree.metadata.type;
//     } else if (alternativeType) {
//       tree.metadata.type = alternativeType;
//     } else if (tree.value && tree.metadata instanceof ParameterMetadata) {
//       tree.metadata.type = (tree.value.metadata as ValueMetadata).type();
//     } else {
//       tree.metadata.type = tree.scope.core.any.type;
//     }
//   }

//   if (tree.hasParameters && tree.metadata?.type) {
//     tree.metadata.type = new MethodTypeMetadata(
//       tree.parameters.map((x) => x.metadata as ParameterMetadata),
//       tree.metadata.type,
//     );
//   }
// }

// export function fillParameterMetadata(tree: DeclarationTree, alternativeType: TypeMetadata | null): void {
//   tree.parameters.forEach((x) => fillParameterMetadata(x, null));

//   if (tree.value && (tree.metadata instanceof ParameterMetadata || tree.metadata instanceof DestructureMetadata)) {
//     tree.value.metadata = fillValueMetadata(tree.value);
//   }
//   if (tree.metadata) {
//     if (tree.type) {
//       tree.metadata.type = fillTypeMetadata(tree.type);
//     } else if (alternativeType) {
//       tree.metadata.type = alternativeType;
//     } else if (
//       tree.value &&
//       (tree.metadata instanceof ParameterMetadata || tree.metadata instanceof DestructureMetadata)
//     ) {
//       tree.metadata.type = (tree.value.metadata as ValueMetadata).type();
//     } else {
//       tree.metadata.type = tree.scope.core?.any.type || null;
//     }
//   }

//   if (tree.hasParameters && tree.metadata?.type) {
//     tree.metadata.type = new MethodTypeMetadata(
//       tree.parameters.map((x) => x.metadata as ParameterMetadata),
//       tree.metadata.type,
//     );
//   }

//   if (tree.destructure.length) {
//     fillDestructureParameterMetadata(tree);
//   }
// }

// export function fillDestructureParameterMetadata(tree: DeclarationTree): void {
//   for (const [index, parameter] of tree.destructure.entries()) {
//     let type: TypeMetadata | null = null;
//     if (tree.metadata?.type instanceof ObjectTypeMetadata && parameter.name) {
//       const declarations = tree.metadata.type.scope()?.filter(parameter.name?.text) || [];
//       if (declarations.length === 1 && parameter.metadata) {
//         // eslint-disable-next-line prefer-destructuring
//         type = declarations[0].type;
//         // think about it, we already set sourceSpan this is second time
//         parameter.metadata.sourceSpan = declarations[0].sourceSpan;
//       } else if (declarations.length > 0) {
//         parameter.name.addError('Too many declarations');
//       } else {
//         parameter.name.addError('No declarations found');
//       }
//     } else if (tree.metadata?.type instanceof ArrayTypeMetadata) {
//       const { commonType } = tree.metadata.type;
//       const { items } = tree.metadata.type;
//       type = (items.length && items[index]) || commonType;
//     }
//     fillParameterMetadata(parameter, type);
//   }
// }

// export function getDeclarationMetadata(tree: SourceTree): DeclarationMetadata[] {
//   const declarationTrees = tree.statements
//     .filter(isDeclarationStatement)
//     .map((x) => x.declaration)
//     .filter(isDefinitionDeclaration);

//   const declarations: DeclarationMetadata[] = [];
//   for (const declarationTree of declarationTrees) {
//     if (!declarationTree.modifier) {
//       declarationTree.metadata = getShadowParameterMetadata(declarationTree);
//     } else if (declarationTree.modifier?.text === 'operator') {
//       declarationTree.metadata = getShadowOperatorMetadata(declarationTree);
//     } else {
//       declarationTree.metadata = getShadowDefinitionMetadata(declarationTree);
//     }

//     if (declarationTree.metadata instanceof DestructureMetadata) {
//       declarationTree.metadata.parameters.forEach((x) => tree.scope.add(x));
//     } else if (tree.parent instanceof ModuleTree && declarationTree.modifier) {
//       tree.parent.scope.add(declarationTree.metadata);
//     } else {
//       tree.scope.add(declarationTree.metadata);
//     }

//     declarations.push(declarationTree.metadata);
//   }

//   return declarations;
// }

export function getSourceDeclarationMetadata(tree: SourceTree): DeclarationMetadata[] {
  const declarations = tree.expressions.filter(isDeclarationStatement).map((x) => x.declaration);

  return declarations.map(getDeclarationMetadata);
}

export function getDeclarationMetadata(tree: DeclarationTree): DeclarationMetadata {
  if (tree.modifier && tree.value instanceof BodyTree) {
    const bodyAttribute = tree.value.statements.filter(isDeclarationStatement).map((x) => x.declaration);
    const attributes = bodyAttribute.map(getDeclarationMetadata).filter(isAttributeDeclarationMetadata);
    // if (tree.type instanceof IdExpressionTree) {
    // }
    if (tree.modifier.text === 'model') return new ModelDeclarationMetadata(tree, null, attributes);
    if (tree.modifier.text === 'object') return new ObjectDeclarationMetadata(tree, null, attributes);
  } else {
    return new AttributeDeclarationMetadata(tree);
  }
  Issue.errorFromTree(tree, `Declaration metadata not found for "${tree.constructor.name}"`);
}

export const isAttributeDeclarationMetadata = (
  declaration: DeclarationMetadata,
): declaration is AttributeDeclarationMetadata => declaration instanceof AttributeDeclarationMetadata;
