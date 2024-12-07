import {$LexicalNode, corePackageType, LexicalNode} from '#core';

export type CloseNode = LexicalNode;

export const $CloseNode = corePackageType<CloseNode>('CloseNode', $LexicalNode);
