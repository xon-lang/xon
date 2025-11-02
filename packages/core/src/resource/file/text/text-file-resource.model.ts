import {$CoreType, $FileResource, Brand, FileResource, Text, TextEncodingType} from '#core';

export type TextFileResource = FileResource &
  Brand<'Core.TextFileResource'> & {
    encoding: TextEncodingType;

    content(): Text;
  };

export const $TextFileResource = () => $CoreType<TextFileResource>('TextFileResource', $FileResource());
