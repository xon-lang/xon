export abstract class TypeMetadata {
  abstract is(other: TypeMetadata): boolean;
  abstract toString(): string;

  private _signature: string;
  get signature(): string {
    if (!this._signature) return this._signature;
    return (this._signature = this.toString());
  }
}
