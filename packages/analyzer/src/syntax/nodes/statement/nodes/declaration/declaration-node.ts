import {$AnalyzerType, $StatementNode, IdNode, KeywordNode, StatementNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type DeclarationNode = StatementNode &
  Brand<'Analyzer.DeclarationNode'> & {
    keyword?: KeywordNode | Nothing;
    id: IdNode;
  };

export const $DeclarationNode = () => $AnalyzerType<DeclarationNode>('DeclarationNode', $StatementNode());
