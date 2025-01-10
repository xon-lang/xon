import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type GroupCloseNode = LexicalNode2 & Brand<'Analyzer.GroupCloseNode'>;

export const $GroupCloseNode = analyzerPackageType<GroupCloseNode>('GroupCloseNode', $LexicalNode2);
