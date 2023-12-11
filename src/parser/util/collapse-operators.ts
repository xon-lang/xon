import { ParserContext } from '../../parser/parser-context';
import { collapseOperator } from '../../parser/util/collapse-operator';
import { collapseInvoke } from './collapse-invoke';
import { OperatorType, operatorsOrders } from './config';

export function collapseOperators(context: ParserContext): void {
  for (const operatorsOrder of operatorsOrders) {
    if (operatorsOrder.operatorType === OperatorType.INVOKE) {
      collapseInvoke(context);
    }

    for (const operators of operatorsOrder.operators) {
      const node = collapseOperator(context, operators, operatorsOrder.operatorType, operatorsOrder.recursiveType);

      if (node) {
        collapseOperators(context);
      }
    }
  }
}
