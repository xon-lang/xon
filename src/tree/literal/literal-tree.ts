import { Any, Unknown, String, Number } from '@lib/core'
import { Tree } from '../tree'

export class LiteralTree extends Tree {
  value: String | Number | RegExp
}
