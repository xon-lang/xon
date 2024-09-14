import {workspace} from 'vscode';
import {String2} from '../../lib/types';
import * as packageJson from '../package.json';

export const LANGUAGE_NAME = 'xon';
export const FILE_EXTENSION = 'xon';

const CONFIG_PROPERTIES = packageJson.contributes.configuration.properties.xon.properties;

type ExtensionConfig = {
  [Key in keyof typeof CONFIG_PROPERTIES]: {
    name: Key;
    default: (typeof CONFIG_PROPERTIES)[Key]['default'];
    get: () => (typeof CONFIG_PROPERTIES)[Key]['default'];
  };
};

export const EXTENSION_CONFIG: ExtensionConfig = {
  translateOnSave: {
    name: 'translateOnSave',
    default: CONFIG_PROPERTIES.translateOnSave.default,
    get: () => extensionConfig(EXTENSION_CONFIG.translateOnSave),
  },

  newFileNameCase: {
    name: 'newFileNameCase',
    default: CONFIG_PROPERTIES.newFileNameCase.default,
    get: () => extensionConfig(EXTENSION_CONFIG.newFileNameCase),
  },
};

function extensionConfig<T>(section: {name: String2; default: T}): T {
  return workspace.getConfiguration(LANGUAGE_NAME).get<T>(section.name) ?? section.default;
}

export const enum StringCase {
  CAMEL = 'camel', // twoWords
  CAPITAL = 'capital', // Two Words
  CONSTANT = 'constant', // TWO_WORDS
  DOT = 'dot', // two.words
  KEBAB = 'kebab', // two-words
  //  NO = 'no', // two words
  PASCAL = 'pascal', // TwoWords
  PASCAL_SNAKE = 'pascal_snake', // Two_Words
  PATH = 'path', // two/words
  SENTENCE = 'sentence', // Two words
  SNAKE = 'snake', // two_words
  TRAIN = 'train', // Two-Words
}
