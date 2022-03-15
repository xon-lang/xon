// this code was generated

import { none, None, String } from '../lib/core'
import { SourceRange } from './source-range'
import { Token } from 'antlr4ts'

export function getIdToken(token: (Token | None)): IdToken {
  return token && new IdToken(token) || none
}

export class IdToken {
  sourceRange: SourceRange
  text: String

  constructor(token: Token) {
    this.sourceRange = SourceRange.fromToken(token)
    this.text = token.text
  }

  toString(): String {
    return this.text
  }
}

// this code was generated
