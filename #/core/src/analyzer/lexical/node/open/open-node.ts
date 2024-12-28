import {$LexicalNode, corePackageType, LexicalNode} from '#core';

export type OpenNode = LexicalNode & {__branding?: null};

export const $OpenNode = corePackageType<OpenNode>('OpenNode', $LexicalNode);
