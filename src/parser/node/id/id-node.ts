import '~/extensions';
import { String2 } from '~/lib/core';
import { declarationNode } from '~/parser/node/declaration/declaration-node';
import { keywordNode } from '~/parser/node/keyword/keyword-node';
import { ModelNode } from '~/parser/node/model/model-node';
import { ModifierNode, modifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { ParserContext } from '~/parser/parser-context';
import { is } from '~/parser/util/is';
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
import { SourceRange } from '~/source/source-range';
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

export function scanIdNode(context: ParserContext): Node | null {
  const { index, source, nodes: lastStatementNodes } = context;

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

  const range = context.getRange(sliced.length);

  if (lastStatementNodes.length === 0 && MODIFIERS.includes(sliced)) {
    const range = context.getRange(sliced.length);
    const modifier = modifierNode(range, sliced) as ModifierNode;

    return declarationNode(modifier, null, null, null, null);
  }

  if (KEYWORDS.includes(sliced)) {
    return keywordNode(range, sliced);
  }

  const id = idNode(range, sliced);

  if (is<ModifierNode>(context.nodes[0], NodeType.MODIFIER)) {
    return declarationNode(context.nodes[0], id, null, null, null);
  }

  if (is<ModelNode>(context.parent, NodeType.MODEL)) {
    return declarationNode(null, id, null, null, null);
  }

  return id;
}
