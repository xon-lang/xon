import { SourceRange } from '../../util/source-range';
import { Metadata } from '../metadata';
import { TypeMetadata } from '../type/type-metadata';

export abstract class DeclarationMetadata extends Metadata {
    abstract sourceRange: SourceRange
    abstract name: String
    abstract type(): TypeMetadata
}
