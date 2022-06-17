import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { StatementContext, StatementsContext } from '../grammar/xon-parser';
import { Number, String } from '../lib/core';
import { FormatterConfig } from './formatter-config';
import { getStatementFormatter } from './statement/statement-formatter-helper';

export function formatStatements(
  ctx: StatementsContext,
  indentCount: Number,
  config: FormatterConfig,
): String[] {
  return ctx.children?.map((x) => {
    if (x instanceof TerminalNode) {
      const nlCount = Math.min(1, x.text.match(/\n/g)?.length || 0);
      return config.nl.repeat(nlCount);
    }
    if (x instanceof StatementContext) {
      return getStatementFormatter(x, config)
        .indent(indentCount + 1)
        .toString();
    }
    throw new Error('Not implemented');
  });
}
