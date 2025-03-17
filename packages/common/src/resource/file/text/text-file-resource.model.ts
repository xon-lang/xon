import {$CommonType, $FileResource, FileResource, TextEncodingType} from '#common';
import {Brand} from '#typing';

export type TextFileResource = FileResource &
  Brand<'Common.TextFileResource'> & {
    encoding: TextEncodingType;
  };

export const $TextFileResource = () => $CommonType<TextFileResource>('TextFileResource', $FileResource());
