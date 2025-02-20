import {$AnalyzerType, $InfixNode, InfixNode, TypeOperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type TypeInfixNode = InfixNode &
  Brand<'Analyzer.TypeInfixNode'> & {
    operator: TypeOperatorNode;
  };

export const $TypeInfixNode = () => $AnalyzerType<TypeInfixNode>('TypeInfixNode', $InfixNode());
