import {Nothing, String2, nothing} from '../../../../lib/core';
import {Semantic} from '../../../../semantic/semantic';
import {SourceRange} from '../../../../source/source-range';
import '../../../../util/extension';
import {UNDERSCORE} from '../../../syntax-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface IdNode extends TokenNode {
  $: $Node.ID;
}

export function idNode(range: SourceRange, text: String2): IdNode {
  return tokenNode($Node.ID, range, text);
}

export function scanIdNode(context: SyntaxContext): IdNode | Nothing {
  const {position, source} = context;

  if (source.text[position.index] !== UNDERSCORE && !source.text.isLetter(position.index)) {
    return nothing;
  }

  const text = source.text.takeWhile((x, i) => x === UNDERSCORE || source.text.isLetterOrDigit(i), position.index);

  const range = context.getRange(text.length, false);

  return idNode(range, text);
}
