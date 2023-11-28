import { Node } from '~/parser/node/node';
import { collapseOperator } from '~/parser/util/collapse-operator';
import { OperatorType, operatorsOrders } from '~/parser/util/operators';
import { collapseInvoke } from './collapse-invoke';

export function collapseLineNodes(nodes: Node[]): void {
  for (const operatorsOrder of operatorsOrders) {
    if (operatorsOrder.operatorType === OperatorType.INVOKE) {
      collapseInvoke(nodes);
    }

    for (const operators of operatorsOrder.operators) {
      const node = collapseOperator(nodes, operators, operatorsOrder.operatorType, operatorsOrder.recursiveType);

      if (node) {
        collapseLineNodes(nodes);
      }
    }
  }
}
