import {$LexicalNode, corePackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type OpenNode = LexicalNode & Brand<'Core.OpenNode'>;

export const $OpenNode = corePackageType<OpenNode>('OpenNode', $LexicalNode);
