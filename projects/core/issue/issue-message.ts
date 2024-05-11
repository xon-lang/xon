import {Nothing, String2, nothing} from '../lib/core';

export interface IssueMessage {
  actual: String2;
  expect: String2 | Nothing;
}

export const ISSUE_MESSAGE = {
  notImplemented: () => ({
    actual: 'Error not implemented',
    expect: 'Create a valid error message',
  }),

  unknownSymbol: () => ({
    actual: 'Unknown symbol',
    expect: nothing,
  }),

  unexpectedExpression: () => ({
    actual: 'Unexpected expression',
    expect: nothing,
  }),
  expectCloseToken: (open: String2) => ({
    actual: `Token '${open}' has no close pair`,
    expect: nothing,
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

  wrongType: () => ({
    actual: `Wrong type`,
    expect: nothing,
  }),

  cannotResolveType: () => ({
    actual: `Cannot resolve type`,
    expect: nothing,
  }),

  noTypeRequiredForConst: () => ({
    actual: `No type required for const`,
    expect: nothing,
  }),

  cannotBeUsedAsAType: () => ({
    actual: `Cannot be used as a type`,
    expect: nothing,
  }),

  noValueAllowed: () => ({
    actual: `No value allowed`,
    expect: nothing,
  }),

  noAttributesAllowed: () => ({
    actual: `No attributes allowed`,
    expect: nothing,
  }),

  cannotEvaluate: () => ({
    actual: `Cannot evaluate`,
    expect: nothing,
  }),

  cannotFindResource: (path: String2) => ({
    actual: `Cannot find resource '${[path]}'`,
    expect: nothing,
  }),

  importValueShouldBeString: () => ({
    actual: `Import value should be string`,
    expect: nothing,
  }),
};
