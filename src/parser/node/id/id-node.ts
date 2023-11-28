import '~/extensions';
import { String2 } from '~/lib/core';
import { KeywordNode, keywordNode } from '~/parser/node/keyword/keyword-node';
import { ModifierNode, modifierNode } from '~/parser/node/modifier/modifier-node';
import { ParserContext } from '~/parser/parser-context';
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
} from '~/parser/util/operators';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface IdNode extends TokenNode {
  $: NodeType.ID;
}

export function idNode(text: String2): Partial<IdNode> {
  return {
    $: NodeType.ID,
    text,
  };
}

export function scanIdNode(context: ParserContext): Partial<IdNode | ModifierNode | KeywordNode> | null {
  const { index, source, lastStatementNodes } = context;

  const code = source.characters[index];
  const isFirstCharForId =
    code === UNDERSCORE_CODE ||
    (code >= UPPER_A_CODE && code <= UPPER_Z_CODE) ||
    (code >= LOWER_A_CODE && code <= LOWER_Z_CODE);

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
  }, index);

  if (lastStatementNodes.length === 0 && MODIFIERS.includes(sliced)) {
    return modifierNode(sliced);
  }

  if (KEYWORDS.includes(sliced)) {
    return keywordNode(sliced);
  }

  return idNode(sliced);
}
