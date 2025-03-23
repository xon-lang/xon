import {$AnalyzerType, $ExpressionNode, DeclarationSemantic, ExpressionNode, IdTypeSemantic} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type IdNode = ExpressionNode &
  Brand<'Analyzer.IdNode'> & {
    semantic?: IdTypeSemantic | DeclarationSemantic | Nothing;
  };

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $ExpressionNode());
