import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type CommaNode = LexicalNode2 & Brand<'Analyzer.CommaNode'>;

export const $CommaNode = analyzerPackageType<CommaNode>('CommaNode', $LexicalNode2);
