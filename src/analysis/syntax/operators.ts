import { String2 } from '~/lib/core';

export interface OperatorsOrder {
  operators: String2[][];
  operatorType: OperatorType;
  recursiveType: RecursiveType;
}

export enum OperatorType {
  PREFIX = 0,
  POSTFIX = 1,
  INFIX = 2,
  INVOKE = 3,
}

export enum RecursiveType {
  LEFT = 0,
  RIGHT = 1,
}

export const operatorsOrders: OperatorsOrder[] = [
  {
    operators: ['. ::'],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: [],
    operatorType: OperatorType.INVOKE,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: ['+ - !'],
    operatorType: OperatorType.PREFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: ['? !'],
    operatorType: OperatorType.POSTFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: ['^', '* / %', '+ -', '..', '< <= >= >', '== !=', 'is as in', '&', '|'],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: [':'],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.RIGHT,
  },
  {
    operators: ['='],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.RIGHT,
  },
].map((x) => {
  return {
    operators: x.operators.map((s) => s.split(' ')),
    operatorType: x.operatorType,
    recursiveType: x.recursiveType,
  };
});
