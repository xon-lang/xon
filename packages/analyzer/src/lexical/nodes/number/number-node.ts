import {$SyntaxNode2, analyzerPackageType, SyntaxNode2} from '#analyzer';
import {Brand} from '#typing';

export type NumberNode = SyntaxNode2 & Brand<'Analyzer.NumberNode'>;

export const $NumberNode = analyzerPackageType<NumberNode>('NumberNode', $SyntaxNode2);
