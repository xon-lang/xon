import {workspace} from 'vscode';

export const LANGUAGE_NAME = 'xon';

export function config() {
  return workspace.getConfiguration(LANGUAGE_NAME);
}
