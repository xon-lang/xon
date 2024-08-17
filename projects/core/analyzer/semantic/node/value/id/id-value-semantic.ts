import {$} from '../../../../../$';
import {Nothing, String2} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type IdValueSemantic = ValueSemantic<$.IdValueSemantic> & {
  name: String2;
  declaration?: ValueDeclarationSemantic | Nothing;
};

export function idValueSemantic(
  nodeLink: Node | Nothing,
  name: String2,
  declaration: ValueDeclarationSemantic | Nothing,
  type: TypeSemantic,
): IdValueSemantic {
  if (nodeLink && declaration) {
    declaration.usages.push(nodeLink.reference);
  }

  return {
    $: $.IdValueSemantic,
    nodeLink,
    name,
    type,
    declaration,
  };
}
