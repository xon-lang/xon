import {analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type GroupCloseNode = LexicalNode & Brand<'Analyzer.GroupCloseNode'>;

export const $GroupCloseNode = analyzerPackageType<GroupCloseNode>('GroupCloseNode', LexicalNode);
