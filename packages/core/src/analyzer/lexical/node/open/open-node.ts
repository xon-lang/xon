import {$LexicalNode, corePackageType, LexicalNode} from '#core';
import {Brand} from '#typing';

export type OpenNode = LexicalNode & Brand<'Core.OpenNode'>;

export const $OpenNode = corePackageType<OpenNode>('OpenNode', $LexicalNode);
