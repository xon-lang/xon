import {$LexicalNode, corePackageType, LexicalNode} from '#core';

export type OpenNode = LexicalNode;

export const $OpenNode = corePackageType<OpenNode>('OpenNode', $LexicalNode);
