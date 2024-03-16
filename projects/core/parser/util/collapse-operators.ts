import {Nothing} from '../../lib/core';
import {OperatorType, operatorsOrders} from '../parser-config';
import {SyntaxContext} from '../syntax-context';
import {collapseInvoke} from './collapse-invoke';
import {collapseOperator} from './collapse-operator';

export function collapseOperators(context: SyntaxContext): Nothing {
  for (const operatorsOrder of operatorsOrders) {
    if (operatorsOrder.operatorType === OperatorType.INVOKE) {
      collapseInvoke(context);

      continue;
    }

    for (const operators of operatorsOrder.operators) {
      collapseOperator(context, operators, operatorsOrder.operatorType, operatorsOrder.recursiveType);
    }
  }
}
