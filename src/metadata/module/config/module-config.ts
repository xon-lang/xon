import { String2 } from '../../../lib/core';

export abstract class ModuleConfig {
  includes: String2[] = [];
  excludes: String2[] = [];

  coreModulePath: String2 = '';
  defaultImports: String2[] = [];
}
