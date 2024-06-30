import {Nothing, String2} from '../../../../../lib/types';
import '../../../../util/extension';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node, ExpressionNode} from '../../../node';
import {DeclarationSemantic} from '../../../semantic/node/declaration/declaration-semantic';
import {DocumentationIdSemantic} from '../../../semantic/node/documentation/documentation-id-semantic';
import {IdTypeSemantic} from '../../../semantic/node/type/id/id-type-semantic';
import {IdValueSemantic} from '../../../semantic/node/value/id/id-value-semantic';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type IdNode = LexicalNode<$Node.ID> &
  ExpressionNode & {
    semantic?: IdValueSemantic | IdTypeSemantic | DeclarationSemantic | DocumentationIdSemantic | Nothing;
  };

export function idNode(range: TextRange, text: String2): IdNode {
  return lexicalNode({$: $Node.ID, range, text});
}
