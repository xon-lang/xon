import '../../../extensions';
import { String2 } from '../../../lib/core';
import { KeywordNode, keywordNode } from '../../../parser/node/keyword/keyword-node';
import { ModifierNode, modifierNode } from '../../../parser/node/modifier/modifier-node';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import {
  DIGIT_0_CODE,
  DIGIT_9_CODE,
  KEYWORDS,
  LOWER_A_CODE,
  LOWER_Z_CODE,
  MODIFIERS,
  UNDERSCORE_CODE,
  UPPER_A_CODE,
  UPPER_Z_CODE,
} from '../../parser-config';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface IdNode extends TokenNode {
  $: NodeType.ID;
}

export function idNode(range: SourceRange, text: String2): IdNode {
  return {
    $: NodeType.ID,
    range,
    text,
  };
}

export function scanIdNode(context: ParserContext): ModifierNode | IdNode | KeywordNode | null {
  const { position, source, nodes: lastStatementNodes } = context;

  const firstCharCode = source.characters[position.index];
  const isFirstCharForId =
    firstCharCode === UNDERSCORE_CODE ||
    (firstCharCode >= UPPER_A_CODE && firstCharCode <= UPPER_Z_CODE) ||
    (firstCharCode >= LOWER_A_CODE && firstCharCode <= LOWER_Z_CODE);

  if (!isFirstCharForId) {
    return null;
  }

  const sliced = source.text.takeWhile((x) => {
    const code = x.charCodeAt(0);

    return (
      code === UNDERSCORE_CODE ||
      (code >= UPPER_A_CODE && code <= UPPER_Z_CODE) ||
      (code >= LOWER_A_CODE && code <= LOWER_Z_CODE) ||
      (code >= DIGIT_0_CODE && code <= DIGIT_9_CODE)
    );
  }, position.index);

  const range = context.getRange(sliced.length);

  if (lastStatementNodes.length === 0 && MODIFIERS.includes(sliced)) {
    return modifierNode(range, sliced) as ModifierNode;
  }

  if (KEYWORDS.includes(sliced)) {
    return keywordNode(range, sliced);
  }

  const id = idNode(range, sliced);

  return id;
}
