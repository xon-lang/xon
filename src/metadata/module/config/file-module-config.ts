import { String } from '../lib/core';

export abstract class FileModuleConfig {
  includes: String[] = [];
  excludes: String[] = [];

  coreModulePath: String;
  defaultImports: String[] = [];
}
