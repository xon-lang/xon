import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type GroupOpenNode = LexicalNode & Brand<'Analyzer.GroupOpenNode'>;

export const $GroupOpenNode = analyzerPackageType<GroupOpenNode>('GroupOpenNode', $LexicalNode);
