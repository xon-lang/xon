import {$LexicalNode, corePackageType, LexicalNode} from '#core';
import {Brand} from '#typing';

export type CloseNode = LexicalNode & Brand<'Core.CloseNode'>;

export const $CloseNode = corePackageType<CloseNode>('CloseNode', $LexicalNode);
