import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type StringOpenNode = LexicalNode2 & Brand<'Analyzer.StringOpenNode'>;

export const $StringOpenNode = analyzerPackageType<StringOpenNode>('StringOpenNode', $LexicalNode2);
