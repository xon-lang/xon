import { SingleBodyContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { BodyFormatter } from '../body-formatter';

export class SingleBodyFormatter extends BodyFormatter {
  constructor(public ctx: SingleBodyContext, public config: FormatterConfig) {
    super();
  }

  toString() {
   return ''
  }
}
