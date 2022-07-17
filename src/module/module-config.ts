import { String } from '../lib/core';

export abstract class ModuleConfig {
  coreModulePath: String;
  defaultImports: String[] = [];
}
