import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { ArrayTypeMetadata } from '../../expression/type/array/array-type-metadata';
import { ObjectTypeMetadata } from '../../expression/type/object/object-type-metadata';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { getTypeMetadata } from '../../expression/type/type-metadata-helper';
import { getValueMetadata } from '../../expression/value/value-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class DeclarationStatementMetadata implements StatementMetadata {
  constructor(public tree: DeclarationStatementTree, public scope: DeclarationScope) {
    if (tree.declaration instanceof DefinitionTree) {
      this.fillDefinitionMetadata(tree.declaration);
    } else if (tree.declaration instanceof ParameterTree) {
      this.fillParameterMetadata(tree.declaration);
    }
  }

  fillDefinitionMetadata(tree: DefinitionTree) {
    for (const parameter of tree.parameters) {
      this.fillParameterMetadata(parameter);
    }

    if (tree.base instanceof IdExpressionTree) {
      const baseMetadata = tree.metadata.scope.find(tree.base.name.text) as DefinitionMetadata;
      tree.base.metadata = baseMetadata;
      tree.metadata.base = baseMetadata;
    } else if (tree.base) {
      throw new Error('Not implemented');
    }

    for (const parameter of tree.body?.statements
      .filter((x) => x instanceof ParameterTree)
      .map((x) => x as ParameterTree) || []) {
      this.fillParameterMetadata(parameter);
    }
  }

  fillParameterMetadata(tree: ParameterTree, alternativeType?: TypeMetadata) {
    if (tree.value) {
      tree.metadata.value = getValueMetadata(tree.value, tree.metadata.scope);
    }

    if (tree.type) {
      tree.metadata.type = getTypeMetadata(tree.type, tree.metadata.scope);
    } else if (alternativeType) {
      tree.metadata.type = alternativeType;
    } else if (tree.value) {
      tree.metadata.type = tree.metadata.value.type();
    } else {
      tree.metadata.type = tree.metadata.scope.core.any.type;
    }

    if (tree.destructure.length) {
      this.fillDestructureParameterMetadata(tree);
    }
  }

  fillDestructureParameterMetadata(tree: ParameterTree) {
    for (const [index, parameter] of tree.destructure.entries()) {
      let type: TypeMetadata;
      if (tree.metadata.type instanceof ObjectTypeMetadata) {
        type = tree.metadata.type.attributesScope().find(parameter.name.text).type;
      } else if (tree.metadata.type instanceof ArrayTypeMetadata) {
        const commonType = tree.metadata.type.commonType;
        const items = tree.metadata.type.items;
        type = (items.length && items[index]) || commonType;
      }
      this.fillParameterMetadata(parameter, type);
    }
  }
}
