import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { NodeType } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface NlNode extends LexicalNode {
  $: NodeType.NL;
}

export function nlNode(start: Integer, stop: Integer, text: String2): NlNode {
  return {
    $: NodeType.NL,
    start,
    stop,
    text,
  };
}

const CRLF = '\r\n';
const CRLFWS = '\r\n ';

export function scanNlNode({ text, index }: LexicalAnalysis): NlNode | null {
  if (!CRLFWS.includes(text[index])) {
    return null;
  }

  let lastNlIndex = -1;

  for (let i = index; i < text.length; i++) {
    if (CRLF.includes(text[i])) {
      lastNlIndex = i;
      continue;
    }
    if (text[i] === ' ') {
      continue;
    }

    break;
  }

  if (lastNlIndex < 0) {
    return null;
  }

  return nlNode(index, lastNlIndex, text.slice(index, lastNlIndex + 1));
}
