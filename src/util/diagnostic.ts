import { String } from '../lib/core';

export class Diagnostic {
  constructor(private code: String) {}

  issues() {
    try {
      const issues = [];
      return issues;
    } catch (error) {}
  }
}
