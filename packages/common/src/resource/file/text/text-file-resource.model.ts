import {$CommonType, $FileResource, FileResource, Text, TextEncodingType} from '#common';
import {Brand} from '#typing';

export type TextFileResource = FileResource &
  Brand<'Common.TextFileResource'> & {
    encoding: TextEncodingType;

    content(): Text;
  };

export const $TextFileResource = () => $CommonType<TextFileResource>('TextFileResource', $FileResource());
