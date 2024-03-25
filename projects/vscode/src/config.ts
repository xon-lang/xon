import {workspace} from 'vscode';

export const LANGUAGE_NAME = 'xon';
export const LANGUAGE_EXTENSION = 'xon';

export function config() {
  return workspace.getConfiguration(LANGUAGE_NAME);
}
