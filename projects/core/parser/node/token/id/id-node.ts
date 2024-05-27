import {Nothing, String2} from '../../../../../lib/types';
import {DeclarationSemantic} from '../../../../semantic/declaration/declaration-semantic';
import {IdTypeSemantic} from '../../../../semantic/type/id/id-type-semantic';
import {IdValueSemantic} from '../../../../semantic/value/id/id-value-semantic';
import '../../../../util/extension';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node, ExpressionNode} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export type IdNode = TokenNode<$Node.ID> &
  ExpressionNode & {
    semantic?: IdValueSemantic | IdTypeSemantic | DeclarationSemantic | Nothing;
  };

export function idNode(range: TextRange, text: String2): IdNode {
  return tokenNode({$: $Node.ID, range, text});
}
