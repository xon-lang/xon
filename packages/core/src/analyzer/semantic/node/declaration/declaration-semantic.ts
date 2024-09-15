import {$} from '../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export type DeclarationKind =
  | $.DeclarationSemantic
  // types
  | $.TypeDeclarationSemantic
  | $.NominalTypeDeclarationSemantic
  | $.StructuralTypeDeclarationSemantic
  | $.ParameterTypeDeclarationSemantic
  // values
  | $.ValueDeclarationSemantic
  | $.AttributeValueDeclarationSemantic
  | $.ParameterValueDeclarationSemantic;

export type DeclarationSemantic = Semantic & {
  nodeLink: DeclarationNode;
  documentation?: String2 | Nothing;
  usages: TextResourceRange[];
  modifier?: String2 | Nothing;
  name: String2;
  type: TypeSemantic;

  eq(other: DeclarationSemantic): Boolean2;
};
