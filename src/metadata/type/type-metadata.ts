import { ClassDeclarationMetadata } from '../declaration/class/class-declaration-metadata';

export abstract class TypeMetadata {
  abstract name: string;
  abstract declaration: ClassDeclarationMetadata;
}
