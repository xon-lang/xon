import { Node } from '~/parser/node/node';
import { OperatorType, operatorsOrders } from '~/parser/util/operators';
import { collapseInvoke } from './collapse-invoke';
import { collapseOperators } from './collapse-operators';
import { findOperatorIndex } from './find-operator-index';

export function collapseLineNodes(nodes: Node[]): void {
  for (const operatorsOrder of operatorsOrders) {
    if (operatorsOrder.operatorType === OperatorType.INVOKE) {
      collapseInvoke(nodes);
    }

    for (const operators of operatorsOrder.operators) {
      const operatorIndex = findOperatorIndex(
        nodes,
        operators,
        operatorsOrder.operatorType,
        operatorsOrder.recursiveType,
      );

      if (operatorIndex >= 0) {
        collapseOperators(nodes, operatorsOrder.operatorType, operatorIndex);
        collapseLineNodes(nodes);
      }
    }
  }
}
