import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type GroupOpenNode = LexicalNode2 & Brand<'Analyzer.GroupOpenNode'>;

export const $GroupOpenNode = analyzerPackageType<GroupOpenNode>('GroupOpenNode', $LexicalNode2);
