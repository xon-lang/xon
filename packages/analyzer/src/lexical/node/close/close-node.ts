import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CloseNode = LexicalNode & Brand<'Core.CloseNode'>;

export const $CloseNode = analyzerPackageType<CloseNode>('CloseNode', $LexicalNode);
