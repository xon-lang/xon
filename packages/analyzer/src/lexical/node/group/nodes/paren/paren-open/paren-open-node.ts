import {$GroupOpenNode, GroupOpenNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ParenOpenNode = GroupOpenNode & Brand<'Analyzer.ParenOpenNode'>;

export const $ParenOpenNode = analyzerPackageType<ParenOpenNode>('ParenOpenNode', $GroupOpenNode);
