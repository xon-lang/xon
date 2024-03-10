import {Nothing, String2, nothing} from '../lib/core';

export interface IssueMessage {
  actual: String2;
  expect: String2 | Nothing;
}

export const ISSUE_MESSAGE = {
  unknownTokens: () => ({
    actual: 'Unknown tokens',
    expect: nothing,
  }),

  unexpectedExpression: () => ({
    actual: 'Unexpected expression',
    expect: nothing,
  }),

  notImplemented: () => ({
    actual: 'Error not implemented',
    expect: 'Create a valid error message',
  }),

  expectCloseToken: (open: String2, close: String2) => ({
    actual: `Token '${open}' has no close pair '${close}'`,
    expect: `Add close token '${close}'`,
  }),

  // Semantic
  declarationNotFound: (name: String2) => ({
    actual: `Declaration '${name}' not found`,
    expect: nothing,
  }),

  tooManyDeclarationsFoundWithName: (name: String2) => ({
    actual: `Too many declarations found with '${name}'`,
    expect: nothing,
  }),

  shouldBeSingleItem: () => ({
    actual: `Should be single item`,
    expect: nothing,
  }),

  shouldBeInteger: () => ({
    actual: `Should be integer`,
    expect: nothing,
  }),

  shouldBeMemberName: () => ({
    actual: `Should be member name`,
    expect: nothing,
  }),
};
