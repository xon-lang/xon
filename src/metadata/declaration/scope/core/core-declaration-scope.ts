import { moduleConfig } from '../../../../module/default-module-config';
import { ImportProvider } from '../../../import-provider';
import { DefinitionMetadata } from '../../definition/definition-metadata';
import { ParameterMetadata } from '../../parameter/parameter-metadata';
import { DeclarationScope } from '../declaration-scope';

export class CoreDeclarationScope extends DeclarationScope {
  get any(): DefinitionMetadata {
    return this.filter('Any')[0] as DefinitionMetadata;
  }
  get boolean(): DefinitionMetadata {
    return this.filter('Boolean')[0] as DefinitionMetadata;
  }
  get true(): ParameterMetadata {
    return this.filter('true')[0] as ParameterMetadata;
  }
  get false(): ParameterMetadata {
    return this.filter('false')[0] as ParameterMetadata;
  }
  get integer(): DefinitionMetadata {
    return this.filter('Integer')[0] as DefinitionMetadata;
  }
  get float(): DefinitionMetadata {
    return this.filter('Float')[0] as DefinitionMetadata;
  }
  get number(): DefinitionMetadata {
    return this.filter('Number')[0] as DefinitionMetadata;
  }
  get none(): DefinitionMetadata {
    return this.filter('None')[0] as DefinitionMetadata;
  }
  get char(): DefinitionMetadata {
    return this.filter('Char')[0] as DefinitionMetadata;
  }
  get string(): DefinitionMetadata {
    return this.filter('String')[0] as DefinitionMetadata;
  }
  get array(): DefinitionMetadata {
    return this.filter('Array')[0] as DefinitionMetadata;
  }
  get unknown(): DefinitionMetadata {
    return this.filter('Unknown')[0] as DefinitionMetadata;
  }

  constructor() {
    super();

    const scope = new ImportProvider(moduleConfig.coreModulePath).scope();
    this.declarations = scope.declarations;
  }
}
