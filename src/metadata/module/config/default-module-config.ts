import { ModuleConfig } from '@/metadata/module/config/module-config';

export class DefaultModuleConfig extends ModuleConfig {
  coreModulePath = 'src/lib/@xon/core';
  defaultImports = ['src/lib/@xon/core'];
}

export const moduleConfig = new DefaultModuleConfig();
