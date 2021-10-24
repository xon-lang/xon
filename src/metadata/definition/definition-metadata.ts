export abstract class DefinitionMetadata {
  public abstract name: string;
  public abstract equals(other: DefinitionMetadata): boolean;
}
