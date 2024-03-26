import {workspace} from 'vscode';
import {Boolean2} from '../../core/lib/core';

export const LANGUAGE_NAME = 'xon';
export const LANGUAGE_EXTENSION = 'xon';

const workspace_config = () => workspace.getConfiguration(LANGUAGE_NAME);

export const WORKSPACE_CONFIG = {
  translOnSave: () => workspace_config().get<Boolean2>('translOnSave') ?? false,
  newFileNameCase: () => workspace_config().get<StringCase>('newFileNameCase') ?? 'kebab',
};

export const enum StringCase {
  CAMEL = 'camel', //twoWords
  CAPITAL = 'capital', //Two Words
  CONSTANT = 'constant', //TWO_WORDS
  DOT = 'dot', //two.words
  KEBAB = 'kebab', //two-words
  // NO = 'no', //two words
  PASCAL = 'pascal', //TwoWords
  PASCAL_SNAKE = 'pascal_snake', //Two_Words
  PATH = 'path', //two/words
  SENTENCE = 'sentence', //Two words
  SNAKE = 'snake', //two_words
  TRAIN = 'train', //Two-Words
}
