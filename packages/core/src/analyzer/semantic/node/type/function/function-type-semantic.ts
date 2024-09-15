import {$, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2} from '../../../../../../../lib/src/types';
import {Node} from '../../../../node';
import {DeclarationScope} from '../../../declaration-scope';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {ParameterTypeDeclarationSemantic} from '../../declaration/type/parameter/parameter-type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from '../../declaration/value/attribute/attribute-value-declaration-semantic';
import {ParameterValueDeclarationSemantic} from '../../declaration/value/parameter/parameter-value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface FunctionTypeSemantic extends TypeSemantic {
  $: $.FunctionTypeSemantic;
  parameters: (ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic)[];
  result: TypeSemantic;
}

export function functionTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  parameters: (ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic)[],
  result: TypeSemantic,
): FunctionTypeSemantic {
  return {
    $: $.FunctionTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.functionTypeName,
    ),
    parameters,
    result,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      return false;
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      throw new Error('Not implemented');
    },
  };
}
