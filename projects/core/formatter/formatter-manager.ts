import {Nothing, String2} from '../lib/core';
import {Source} from '../source/source';
import {Formatter} from './formatter';

export interface FormatterManager {
  source: Source;
  formatters: Formatter[];

  addFormatter(formatter: Formatter): Nothing;
  getFormattedText(): String2;
}

export function createFormatterManager(source: Source) {
  const manager: FormatterManager = {
    source,
    formatters: [],

    addFormatter(formatter: Formatter): Nothing {
      this.formatters.push(formatter);
    },

    getFormattedText(): String2 {
      let index = 0;
      let formattedText = '';
      // todo remove it and add formatters in order
      const formatters = this.formatters.sortBy((x) => x.range.start.index);

      for (const {range, text} of formatters) {
        formattedText += this.source.text.slice(index, range.start.index) + text;
        index = range.stop.index;
      }

      formattedText += this.source.text.slice(index, this.source.text.length);

      return formattedText;
    },
  };

  return manager;
}
