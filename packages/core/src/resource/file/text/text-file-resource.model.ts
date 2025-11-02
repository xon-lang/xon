import {$CoreType, $FileResource, FileResource, Text, TextEncodingType} from '#core';
import {Brand} from '#typing';

export type TextFileResource = FileResource &
  Brand<'Core.TextFileResource'> & {
    encoding: TextEncodingType;

    content(): Text;
  };

export const $TextFileResource = () => $CoreType<TextFileResource>('TextFileResource', $FileResource());
