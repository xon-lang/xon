import {$LexicalNode, LexicalNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type StringOpenNode = LexicalNode & Brand<'Analyzer.StringOpenNode'>;

export const $StringOpenNode = analyzerPackageType<StringOpenNode>('StringOpenNode', $LexicalNode);
