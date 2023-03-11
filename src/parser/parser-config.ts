import { String2 } from '~/lib/core';

export interface ParserConfig {
  code: String2;
  location: String2;
  operatorsOrders: OperatorsOrder[];
}

export interface OperatorsOrder {
  operators: String2[];
  operatorType: OperatorType;
  recursiveType: RecursiveType;
}

export enum OperatorType {
  PREFIX = 0,
  POSTFIX = 1,
  INFIX = 2,
  INVOKE = 3,
  BODY = 4,
  MODIFIER = 5,
}

export enum RecursiveType {
  LEFT = 0,
  RIGHT = 1,
}

export const operatorsOrders: OperatorsOrder[] = [
  {
    operators: ['prefix postfix infix'],
    operatorType: OperatorType.MODIFIER,
    recursiveType: RecursiveType.RIGHT,
  },
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
    operators: ['if then else for do while break continue export import return'],
    operatorType: OperatorType.PREFIX,
    recursiveType: RecursiveType.RIGHT,
  },
  {
    operators: [': ='],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.RIGHT,
  },
  {
    operators: [],
    operatorType: OperatorType.BODY,
    recursiveType: RecursiveType.LEFT,
  },
];
