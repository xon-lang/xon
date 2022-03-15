// this code was generated

import { AttributeContext } from '../../grammar/xon-parser'
import { none } from '../../lib/core'
import { AttributeTree } from './attribute-tree'

export function getAttributeTree(ctx: AttributeContext): AttributeTree {
  if (!ctx) {
    return none
  }
  return new AttributeTree(ctx)
}

export function getAttributeTrees(contexts): AttributeTree[] {
  return contexts?.map((x) => getAttributeTree(x)) || []
}

// this code was generated
