import { Number2 } from '~/lib/core';

export class LinePosition {
  constructor(public line: Number2, public column: Number2, public index: Number2) {}
}

export const defaultLinePosition = new LinePosition(0, 0, 0);
