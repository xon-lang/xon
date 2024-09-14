import {$} from '../../../../$';
import {Nothing} from '../../../../../lib/types';
import {TextData} from '../../../../util/data/text-data';
import '../../../../util/extension';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {ExpressionNode} from '../../../node';
import {DeclarationSemantic} from '../../../semantic/node/declaration/declaration-semantic';
import {DocumentationIdSemantic} from '../../../semantic/node/documentation/documentation-id-semantic';
import {IdTypeSemantic} from '../../../semantic/node/type/id/id-type-semantic';
import {IdValueSemantic} from '../../../semantic/node/value/id/id-value-semantic';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type IdNode = LexicalNode<$.IdNode> &
  ExpressionNode & {
    semantic?: IdValueSemantic | IdTypeSemantic | DeclarationSemantic | DocumentationIdSemantic | Nothing;
  };

export function idNode(reference: TextResourceRange, text: TextData): IdNode {
  return lexicalNode({$: $.IdNode, reference, text});
}
