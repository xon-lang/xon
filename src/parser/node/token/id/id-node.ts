import { String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import '../../../../util/extension';
import { UNDERSCORE_CODE } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, token } from '../token-node';

export interface IdNode extends TokenNode {
  $: $Node.ID;
}

export function idNode(range: SourceRange, text: String2): IdNode {
  return token($Node.ID, range, text);
}

export function scanIdNode(context: SyntaxContext): IdNode | null {
  const { position, source } = context;

  if (source.text[position.index].charCodeAt(0) !== UNDERSCORE_CODE && !source.text.isLetter(position.index)) {
    return null;
  }

  const text = source.text.takeWhile(
    (x, i) => x.charCodeAt(0) === UNDERSCORE_CODE || source.text.isDigitOrLetter(i),
    position.index,
  );

  const range = context.getRange(text.length);

  return idNode(range, text);
}
