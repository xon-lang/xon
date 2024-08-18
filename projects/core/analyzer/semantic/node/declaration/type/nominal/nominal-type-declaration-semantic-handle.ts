import {$, is} from '../../../../../../$';
import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {functionTypeSemantic} from '../../../type/function/function-type-semantic';
import {parametersParse} from '../../../type/function/function-type-semantic-parser';
import {idTypeSemantic} from '../../../type/id/id-type-semantic';
import {typeSemanticParse} from '../../../type/type-semantic-parser';
import {declarationsParse} from '../../declaration-semantic-parser';
import {NominalTypeDeclarationSemantic} from './nominal-type-declaration-semantic';

export function nominalTypeDeclarationSemanticHandle(
  analyzer: SemanticAnalyzer,
  semantic: NominalTypeDeclarationSemantic,
  node: DeclarationNode,
): void {
  // todo use 'unknownType' type instead of 'nothing' ???
  // todo use 'Something' type instead of 'nothing' ???
  if (node.type) {
    semantic.baseType = typeSemanticParse(analyzer, node.type.value);
    for (const attribute of semantic.baseType.attributes().all()) {
      semantic.attributes.add(attribute);
    }
  }

  const resultType = idTypeSemantic(analyzer, node.id, semantic);

  if (node.generics) {
    const generics = parametersParse(analyzer, node, node.generics);
    semantic.type = functionTypeSemantic(analyzer, node.generics, generics, resultType);

    return;
  }

  semantic.type = resultType;

  if (node.attributes) {
    const attributes = declarationsParse(analyzer, node.attributes).filter((x) =>
      is(x, $.AttributeValueDeclarationSemantic),
    );

    for (const attribute of attributes) {
      semantic.attributes.add(attribute);
    }
  }

  if (node.parameters) {
    throw new Error('Not implemented');
  }
}
