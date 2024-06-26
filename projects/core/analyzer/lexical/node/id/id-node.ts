import {Nothing, String2} from '../../../../../lib/types';
import '../../../../util/extension';
import {TextRange} from '../../../../util/resource/text/text-range';
import {DeclarationSemantic} from '../../../semantic/declaration/declaration-semantic';
import {IdTypeSemantic} from '../../../semantic/type/id/id-type-semantic';
import {IdValueSemantic} from '../../../semantic/value/id/id-value-semantic';
import {$Node, ExpressionNode} from '../../../syntax/node';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type IdNode = LexicalNode<$Node.ID> &
  ExpressionNode & {
    semantic?: IdValueSemantic | IdTypeSemantic | DeclarationSemantic | Nothing;
  };

export function idNode(range: TextRange, text: String2): IdNode {
  return lexicalNode({$: $Node.ID, range, text});
}
