import { String } from '../../../lib/core';

export abstract class ModuleConfig {
  includes: String[] = [];
  excludes: String[] = [];

  coreModulePath: String;
  defaultImports: String[] = [];
}
