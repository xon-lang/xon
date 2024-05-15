import {Array2, Nothing, String2} from '../lib/core';
import {TextResource} from '../util/resource/text/text-resource';
import {Formatter} from './formatter';

export interface FormatterManager {
  resource: TextResource;
  formatters: Array2<Formatter>;

  addFormatter(formatter: Formatter): Nothing;
  getFormattedText(): String2;
}

export function createFormatterManager(source: TextResource) {
  const manager: FormatterManager = {
    resource: source,
    formatters: [],

    addFormatter(formatter: Formatter): Nothing {
      this.formatters.push(formatter);
    },

    getFormattedText(): String2 {
      let index = 0;
      let formattedText = '';
      const formatters = this.formatters.sortBy((x) => x.range.start.index);

      for (const {range, text} of formatters) {
        index = range.stop.index;
        formattedText += this.resource.data.slice(index, range.start.index) + text;
      }

      formattedText += this.resource.data.slice(index, this.resource.data.length);

      return formattedText;
    },
  };

  return manager;
}
