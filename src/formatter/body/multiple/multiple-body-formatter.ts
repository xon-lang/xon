import { MultipleBodyContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { formatStatements } from '../../formatter-util';
import { BodyFormatter } from '../body-formatter';

export class MultipleBodyFormatter extends BodyFormatter {
  constructor(public ctx: MultipleBodyContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return formatStatements(this.ctx.statement(), this.indentCount, this.config);
  }
}
