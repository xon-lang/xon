// import {Integer, nothing} from '../../../../../lib/types';
// import {ASSIGN} from '../../../parser-config';
// import {$Node, is, isNonOperatorExpression, nodeFindMap} from '../../node';
// import {SyntaxParseFn} from '../../statement/statement-node-collapse';
// import {OperatorNode} from '../../token/operator/operator-node';
// import {assignNode} from './assign-node';

// function assignNodeParse(): SyntaxParseFn {
//   return (analyzer: SyntaxAnalyzer, startIndex: Integer) => {
//     return nodeFindMap(analyzer.nodes, startIndex, false, (node, index, nodes) => {
//       if (
//         !is(node, $Node.OPERATOR) ||
//         node.text !== ASSIGN ||
//         (index !== 0 && !is(nodes[index - 1], $Node.OPERATOR))
//       ) {
//         return nothing;
//       }

//       const value = nodes[index + 1];

//       if (!isNonOperatorExpression(value)) {
//         return nothing;
//       }

//       return {node: assignNode(analyzer, node, value), index: index};
//     });
//   };
// }
