/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { String2 } from '../lib/core';

export interface IssueMessage {
  actual: String2;
  expect: String2 | null;
}

export const ISSUE_MESSAGE = {
  unexpectedNode: () => ({
    actual: 'Unexpected node',
    expect: null,
  }),
  notImplemented: () => ({
    actual: 'Error not implemented',
    expect: 'Create a valid error message',
  }),
  expectCloseToken: (open: String2, close: String2) => ({
    actual: `Token '${open}' has no close pair '${close}'`,
    expect: `Add close token '${close}'`,
  }),
};
