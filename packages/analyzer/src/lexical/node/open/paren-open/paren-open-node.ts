import {$OpenNode, OpenNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ParenOpenNode = OpenNode & Brand<'Analyzer.ParenOpenNode'>;

export const $ParenOpenNode = analyzerPackageType<ParenOpenNode>('ParenOpenNode', $OpenNode);
