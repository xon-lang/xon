import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { none } from '../../../lib/core';
import { ArrayExpressionTree } from '../../../tree/expression/array/array-expression-tree';
import { ExpressionTree } from '../../../tree/expression/expression-tree';
import { GroupExpressionTree } from '../../../tree/expression/group/group-expression-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '../../../tree/expression/infix/infix-expression-tree';
import { InvokeExpressionTree } from '../../../tree/expression/invoke/invoke-expression-tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { FloatLiteralTree } from '../../../tree/literal/float/float-literal-tree';
import { IntegerLiteralTree } from '../../../tree/literal/integer/integer-literal-tree';
import { StringLiteralTree } from '../../../tree/literal/string/string-literal-tree';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import {
  fillParameterMetadata,
  getParameterMetadata,
} from '../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { getValueMetadata } from '../value/value-metadata-helper';
import { ArrayTypeMetadata } from './array/array-type-metadata';
import { DefinitionTypeMetadata } from './definition/definition-type-metadata';
import { IntersectionTypeMetadata } from './intersection/intersection-type-metadata';
import { LiteralTypeMetadata } from './literal/literal-type-metadata';
import { MethodTypeMetadata } from './method/method-type-metadata';
import { ObjectTypeMetadata } from './object/object-type-metadata';
import { ParameterTypeMetadata } from './parameter/parameter-type-metadata';
import { TypeMetadata } from './type-metadata';
import { UnionTypeMetadata } from './union/union-type-metadata';

export function getTypeMetadata(tree: ExpressionTree, scope: DeclarationScope): TypeMetadata {
  if (tree instanceof GroupExpressionTree) return getTypeMetadata(tree.expression, scope);
  if (tree instanceof LiteralExpressionTree) {
    let definition: DefinitionMetadata;
    if (tree.literal instanceof IntegerLiteralTree) {
      definition = scope.core.integer;
    } else if (tree.literal instanceof FloatLiteralTree) {
      definition = scope.core.float;
    } else if (tree.literal instanceof StringLiteralTree) {
      definition = scope.core.string;
    }
    return new LiteralTypeMetadata(tree.literal.value, definition);
  }

  if (tree instanceof IdExpressionTree) {
    const declarations = scope.filter(tree.name.text);
    if (declarations.length === 1) {
      if (declarations[0] instanceof ParameterMetadata) {
        return new ParameterTypeMetadata(declarations[0]);
      }
      if (declarations[0] instanceof DefinitionMetadata) {
        return new DefinitionTypeMetadata(declarations[0]);
      }
    } else if (declarations.length > 0) {
      tree.name.addError('Too many declarations');
    } else {
      tree.name.addError('No declarations found');
    }
  }
  if (tree instanceof InfixExpressionTree) {
    const left = getTypeMetadata(tree.left, scope);
    const right = getTypeMetadata(tree.right, scope);
    if (tree.name.text === 'or') {
      return new UnionTypeMetadata(left, right);
    }
    if (tree.name.text === 'and') {
      return new IntersectionTypeMetadata(left, right);
    }

    throw new Error('Not implemented');
  }

  if (tree instanceof MethodExpressionTree) {
    const innerScope = scope.create();
    tree.parameters.map((x) => (x.metadata = getParameterMetadata(x, innerScope)));
    tree.parameters.forEach((x) => innerScope.add(x.metadata));
    tree.parameters.forEach((x) => fillParameterMetadata(x));
    const result = getTypeMetadata(tree.value, innerScope);
    return new MethodTypeMetadata(
      tree.parameters.map((x) => x.metadata),
      result,
    );
  }

  if (tree instanceof InvokeExpressionTree) {
    if (tree.hasBracket && tree.instance instanceof IdExpressionTree) {
      const items = [];
      const commonType = getTypeMetadata(tree.instance, scope);
      return new ArrayTypeMetadata(commonType, items);
    }
  }

  if (tree instanceof ArrayExpressionTree) {
    if (tree.ctx.arguments().OPEN_BRACE()) {
      const objectScope = new DeclarationScope();
      const parameters = tree.arguments.map((x) => {
        if (!x.name) {
          x.addIssue(IssueLevel.error, 'No name argument');
          return none;
        }
        const metadata = new ParameterMetadata(x.name, scope);
        metadata.type = getValueMetadata(x.value, scope).type();
        metadata.value = getValueMetadata(x.value, scope);
        return metadata;
      });
      parameters.filter((x) => x).forEach((x) => objectScope.add(x));
      return new ObjectTypeMetadata(objectScope);
    }
    if (tree.ctx.arguments().OPEN_BRACKET()) {
      const items = tree.arguments.map((x) => getTypeMetadata(x.value, scope));
      let commonType: TypeMetadata;
      if (items.length === 1) {
        commonType = items[0];
      } else if (items.length > 1) {
        commonType = UnionTypeMetadata.fromTypes(items);
      } else {
        commonType = scope.core.any.type;
      }

      return new ArrayTypeMetadata(commonType, items);
    }
    throw new Error('Not implemented');
  }

  Issue.errorFromTree(tree, `Type expression metadata not found for '${tree.constructor.name}'`);
}
