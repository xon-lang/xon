import {workspace} from 'vscode';
import {Boolean2} from '../../lib/types';

export const LANGUAGE_NAME = 'xon';
export const FILE_EXTENSION = 'xon';

const workspaceConfig = () => workspace.getConfiguration(LANGUAGE_NAME);

export const WORKSPACE_CONFIG = {
  translOnSave: () => workspaceConfig().get<Boolean2>('translOnSave') ?? false,
  newFileNameCase: () => workspaceConfig().get<StringCase>('newFileNameCase') ?? 'kebab',
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
