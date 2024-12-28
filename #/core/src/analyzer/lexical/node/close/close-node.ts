import {$LexicalNode, corePackageType, LexicalNode} from '#core';

export type CloseNode = LexicalNode & {__branding?: null};

export const $CloseNode = corePackageType<CloseNode>('CloseNode', $LexicalNode);
