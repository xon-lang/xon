// this code was generated

import { AssertStatementContext, CommentStatementContext, DefinitionStatementContext, ExportStatementContext, ExpressionStatementContext, ForStatementContext, IfStatementContext, NlStatementContext, OperatorStatementContext, ParameterStatementContext, ReturnStatementContext, StatementContext, WhileStatementContext } from '../../grammar/xon-parser'
import { Issue } from '../../issue-service/issue'
import { none } from '../../lib/core'
import { AssertStatementTree } from './assert/assert-statement-tree'
import { DefinitionStatementTree } from './definition/definition-statement-tree'
import { ExportStatementTree } from './export/export-statement-tree'
import { ExpressionStatementTree } from './expression/expression-statement-tree'
import { ForStatementTree } from './for/for-statement-tree'
import { IfStatementTree } from './if/if-statement-tree'
import { OperatorStatementTree } from './operator/operator-statement-tree'
import { ParameterStatementTree } from './parameter/parameter-statement-tree'
import { ReturnStatementTree } from './return/return-statement-tree'
import { StatementTree } from './statement-tree'
import { WhileStatementTree } from './while/while-statement-tree'

export function getStatementTree(ctx: StatementContext): StatementTree {
  if (!ctx) {
    return none
  }
  if (ctx instanceof AssertStatementContext) {
    return new AssertStatementTree(ctx)
  }
  if (ctx instanceof ParameterStatementContext) {
    return new ParameterStatementTree(ctx)
  }
  if (ctx instanceof ExportStatementContext) {
    return new ExportStatementTree(ctx)
  }
  if (ctx instanceof ExpressionStatementContext) {
    return new ExpressionStatementTree(ctx)
  }
  if (ctx instanceof ForStatementContext) {
    return new ForStatementTree(ctx)
  }
  if (ctx instanceof IfStatementContext) {
    return new IfStatementTree(ctx)
  }
  if (ctx instanceof OperatorStatementContext) {
    return new OperatorStatementTree(ctx)
  }
  if (ctx instanceof ReturnStatementContext) {
    return new ReturnStatementTree(ctx)
  }
  if (ctx instanceof WhileStatementContext) {
    return new WhileStatementTree(ctx)
  }
  if (ctx instanceof DefinitionStatementContext) {
    return new DefinitionStatementTree(ctx)
  }
  Issue.errorFromContext(ctx, `Statement tree not found for '${ctx.constructor.name}'`)
}

export function getStatementTrees(statements: StatementContext[]): StatementTree[] {
  return statements?.filter(x=>!(x instanceof NlStatementContext || 
      x instanceof CommentStatementContext)).map(getStatementTree) || []
}

// this code was generated
