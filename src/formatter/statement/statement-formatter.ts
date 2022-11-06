import { Formatter } from '~/formatter';
import { StatementContext } from '~/grammar';

export abstract class StatementFormatter extends Formatter {
  ctx: StatementContext;
}
