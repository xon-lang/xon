import { DefinitionMetadata } from '../../definition/definition-metadata';
import { ParameterMetadata } from '../../parameter/parameter-metadata';
import { DeclarationScope } from '../declaration-scope';

export class CoreDeclarationScope {
  get any(): DefinitionMetadata {
    return this.scope.filter('Any')[0] as DefinitionMetadata;
  }
  get boolean(): DefinitionMetadata {
    return this.scope.filter('Boolean')[0] as DefinitionMetadata;
  }
  get true(): ParameterMetadata {
    return this.scope.filter('true')[0] as ParameterMetadata;
  }
  get false(): ParameterMetadata {
    return this.scope.filter('false')[0] as ParameterMetadata;
  }
  get integer(): DefinitionMetadata {
    return this.scope.filter('Integer')[0] as DefinitionMetadata;
  }
  get float(): DefinitionMetadata {
    return this.scope.filter('Float')[0] as DefinitionMetadata;
  }
  get number(): DefinitionMetadata {
    return this.scope.filter('Number')[0] as DefinitionMetadata;
  }
  get none(): DefinitionMetadata {
    return this.scope.filter('null')[0] as DefinitionMetadata;
  }
  get char(): DefinitionMetadata {
    return this.scope.filter('Char')[0] as DefinitionMetadata;
  }
  get string(): DefinitionMetadata {
    return this.scope.filter('String')[0] as DefinitionMetadata;
  }
  get array(): DefinitionMetadata {
    return this.scope.filter('Array')[0] as DefinitionMetadata;
  }
  get unknown(): DefinitionMetadata {
    return this.scope.filter('Unknown')[0] as DefinitionMetadata;
  }

  constructor(public scope: DeclarationScope) {}
}
