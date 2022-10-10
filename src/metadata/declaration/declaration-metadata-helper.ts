import { DeclarationTree } from '../../tree/declaration/declaration-tree';
import { IdExpressionTree } from '../../tree/expression/id/id-expression-tree';
import { ModuleTree } from '../../tree/module/module-tree';
import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationStatementTree } from '../../tree/statement/declaration/declaration-statement-tree';
import { ArrayTypeMetadata } from '../expression/type/array/array-type-metadata';
import { DefinitionTypeMetadata } from '../expression/type/definition/definition-type-metadata';
import { MethodTypeMetadata } from '../expression/type/method/method-type-metadata';
import { ObjectTypeMetadata } from '../expression/type/object/object-type-metadata';
import { TypeMetadata } from '../expression/type/type-metadata';
import { fillTypeMetadata } from '../expression/type/type-metadata-helper';
import { ValueMetadata } from '../expression/value/value-metadata';
import { fillValueMetadata } from '../expression/value/value-metadata-helper';
import { DeclarationMetadata } from './declaration-metadata';
import { DefinitionMetadata } from './definition/definition-metadata';
import { DestructureMetadata } from './destructure/destructure-metadata';
import { ModuleDeclarationMetadata } from './module/module-declaration-metadata';
import { OperatorMetadata } from './operator/operator-metadata';
import { ParameterMetadata } from './parameter/parameter-metadata';


export function getShadowModuleMetadata(tree: ModuleTree): ModuleDeclarationMetadata {
  const metadata = new ModuleDeclarationMetadata(tree);

  for (const parameter of tree.parameters) {
    parameter.metadata = getShadowParameterMetadata(parameter);
    metadata.parameters.push(parameter.metadata);
    tree.scope.add(parameter.metadata);
  }

  if (tree.body) {
    const declarations = getShadowSourceMetadata(tree.body);
    metadata.attributes = declarations.filter((x) => x instanceof ParameterMetadata);
  }

  return metadata;
}

export function getShadowSourceMetadata(tree: SourceTree): DeclarationMetadata[] {
  const declarationTrees = tree.statements
    .filter((x) => x instanceof DeclarationStatementTree && !x.declaration.metadata)
    .map((x) => (x as DeclarationStatementTree).declaration);

  const declarations = [];
  for (const declarationTree of declarationTrees) {
    if (!declarationTree.modifier) {
      declarationTree.metadata = getShadowParameterMetadata(declarationTree);
    } else if (declarationTree.modifier?.text === 'operator') {
      declarationTree.metadata = getShadowOperatorMetadata(declarationTree);
    } else {
      declarationTree.metadata = getShadowDefinitionMetadata(declarationTree);
    }

    if (declarationTree.metadata instanceof DestructureMetadata) {
      declarationTree.metadata.parameters.forEach((x) => tree.scope.add(x));
    } else {
      if (tree.parent instanceof ModuleTree && declarationTree.modifier) {
        tree.parent.scope.add(declarationTree.metadata);
      } else {
        tree.scope.add(declarationTree.metadata);
      }
    }

    declarations.push(declarationTree.metadata);
  }
  return declarations;
}

export function getShadowDefinitionMetadata(tree: DeclarationTree): DefinitionMetadata {
  const metadata = new DefinitionMetadata(tree);

  for (const parameter of tree.parameters) {
    parameter.metadata = getShadowParameterMetadata(parameter);
    metadata.parameters.push(parameter.metadata);
    tree.scope.add(parameter.metadata);
  }

  if (tree.body) {
    const declarations = getShadowSourceMetadata(tree.body);
    metadata.attributes = declarations.filter((x) => x instanceof ParameterMetadata);
  }

  return metadata;
}

export function getShadowOperatorMetadata(tree: DeclarationTree): ParameterMetadata {
  const metadata = new OperatorMetadata(tree);

  for (const parameter of tree.parameters) {
    parameter.metadata = getShadowParameterMetadata(parameter);
    metadata.parameters.push(parameter.metadata);
    tree.scope.add(parameter.metadata);
  }

  if (tree.body) {
    getShadowSourceMetadata(tree.body);
  }

  return metadata;
}

export function getShadowParameterMetadata(tree: DeclarationTree): ParameterMetadata {
  if (tree.body) {
    getShadowSourceMetadata(tree.body);
  }

  if (tree.destructure.length) {
    const metadata = new DestructureMetadata(tree);
    for (const parameter of tree.destructure) {
      parameter.metadata = getShadowParameterMetadata(parameter);
      metadata.parameters.push(parameter.metadata);
    }
    return metadata;
  }

  const metadata = new ParameterMetadata(tree);
  metadata.modifier = tree.modifier?.text;

  for (const parameter of tree.parameters) {
    metadata.parameters.push(getShadowParameterMetadata(parameter));
  }

  metadata.parameters.forEach((x) => tree.scope.add(x));
  return metadata;
}

export function fillDeclarationMetadata(tree: DeclarationTree) {
  if (tree.modifier?.text === 'operator') {
    fillOperatorMetadata(tree);
  } else if (tree.modifier?.text === 'model' || tree.modifier?.text === 'object') {
    fillDefinitionMetadata(tree);
  } else {
    fillParameterMetadata(tree);
  }
}

export function fillDefinitionMetadata(tree: DeclarationTree) {
  for (const parameter of tree.parameters) {
    fillParameterMetadata(parameter);
  }

  // todo fix base type should be TypeMetadata
  if (tree.type instanceof IdExpressionTree) {
    const declarations = tree.scope.filter(tree.type.name.text);
    if (declarations.length === 1) {
      tree.type.metadata = new DefinitionTypeMetadata(declarations[0] as DefinitionMetadata);
      if (tree.metadata instanceof DefinitionMetadata) {
        tree.metadata.base = declarations[0] as DefinitionMetadata;
      }
    } else if (declarations.length > 0) {
      tree.type.addError('Too many declarations');
    } else {
      tree.type.addError('No declarations found');
    }
  } else if (tree.type) {
    tree.type.addError('Base class should be an IdExpression');
  }

  for (const parameter of tree.body?.statements
    .filter(
      (x) => x instanceof DeclarationStatementTree && x.declaration instanceof DeclarationTree,
    )
    .map((x) => (x as DeclarationStatementTree).declaration as DeclarationTree) || []) {
    fillParameterMetadata(parameter);
  }
}

export function fillOperatorMetadata(tree: DeclarationTree, alternativeType?: TypeMetadata) {
  tree.parameters.forEach((x) => fillParameterMetadata(x));

  if (tree.value) {
    fillValueMetadata(tree.value);
  }

  if (tree.type) {
    tree.metadata.type = fillTypeMetadata(tree.type);
    tree.type.metadata = tree.metadata.type;
  } else if (alternativeType) {
    tree.metadata.type = alternativeType;
  } else if (tree.value && tree.metadata instanceof ParameterMetadata) {
    tree.metadata.type = (tree.value.metadata as ValueMetadata).type();
  } else {
    tree.metadata.type = tree.scope.core.any.type;
  }

  if (tree.hasParameters) {
    tree.metadata.type = new MethodTypeMetadata(
      tree.parameters.map((x) => x.metadata as ParameterMetadata),
      tree.metadata.type,
    );
  }
}

export function fillParameterMetadata(tree: DeclarationTree, alternativeType?: TypeMetadata) {
  tree.parameters.forEach((x) => fillParameterMetadata(x));

  if (
    tree.value &&
    (tree.metadata instanceof ParameterMetadata || tree.metadata instanceof DestructureMetadata)
  ) {
    tree.value.metadata = fillValueMetadata(tree.value);
  }

  if (tree.type) {
    tree.metadata.type = fillTypeMetadata(tree.type);
  } else if (alternativeType) {
    tree.metadata.type = alternativeType;
  } else if (
    tree.value &&
    (tree.metadata instanceof ParameterMetadata || tree.metadata instanceof DestructureMetadata)
  ) {
    tree.metadata.type = (tree.value.metadata as ValueMetadata).type();
  } else {
    tree.metadata.type = tree.scope.core?.any.type || null;
  }

  if (tree.hasParameters) {
    tree.metadata.type = new MethodTypeMetadata(
      tree.parameters.map((x) => x.metadata as ParameterMetadata),
      tree.metadata.type,
    );
  }

  if (tree.destructure.length) {
    fillDestructureParameterMetadata(tree);
  }
}

export function fillDestructureParameterMetadata(tree: DeclarationTree) {
  for (const [index, parameter] of tree.destructure.entries()) {
    let type: TypeMetadata;
    if (tree.metadata.type instanceof ObjectTypeMetadata) {
      const declarations = tree.metadata.type.attributesScope()?.filter(parameter.name.text) || [];
      if (declarations.length === 1) {
        type = declarations[0].type;
        // todo think about it, we already set sourceRange this is second time
        parameter.metadata.sourceRange = declarations[0].sourceRange;
      } else if (declarations.length > 0) {
        parameter.name.addError('Too many declarations');
      } else {
        parameter.name.addError('No declarations found');
      }
    } else if (tree.metadata.type instanceof ArrayTypeMetadata) {
      const commonType = tree.metadata.type.commonType;
      const items = tree.metadata.type.items;
      type = (items.length && items[index]) || commonType;
    }
    fillParameterMetadata(parameter, type);
  }
}
