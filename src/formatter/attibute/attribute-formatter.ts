import { AttributeContext } from '../../grammar/xon-parser';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';

export class AttributeFormatter extends Formatter {
  constructor(public ctx: AttributeContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return '';
  }
}
