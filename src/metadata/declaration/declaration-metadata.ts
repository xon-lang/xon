import { IdToken } from '../../tree/id-token';
import { ModuleMetadata } from '../module/module-metadata';

export abstract class DeclarationMetadata {
  abstract id: IdToken;
  abstract module: ModuleMetadata;
}
