// Generated from XonLexer.g4 by ANTLR 4.9.0-SNAPSHOT

 
    import { XonLexerBase } from "./xon-lexer-base";


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonLexer extends XonLexerBase {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly OPEN = 3;
	public static readonly CLOSE = 4;
	public static readonly TOKEN = 5;
	public static readonly COMMA = 6;
	public static readonly NL = 7;
	public static readonly WS = 8;
	public static readonly LINE_COMMENT = 9;
	public static readonly BLOCK_COMMENT = 10;
	public static readonly LINE_JOINING = 11;
	public static readonly UNEXPECTED = 12;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OPEN", "CLOSE", "TOKEN", "COMMA", "NL", "WS", "LINE_COMMENT", "BLOCK_COMMENT", 
		"LINE_JOINING", "UNEXPECTED",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN", "CLOSE", "TOKEN", "COMMA", "NL", 
		"WS", "LINE_COMMENT", "BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonLexer._LITERAL_NAMES, XonLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(XonLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "XonLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return XonLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return XonLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 0:
			this.OPEN_action(_localctx, actionIndex);
			break;

		case 1:
			this.CLOSE_action(_localctx, actionIndex);
			break;

		case 4:
			this.NL_action(_localctx, actionIndex);
			break;
		}
	}
	private OPEN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.opened++;
			break;
		}
	}
	private CLOSE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened--;
			break;
		}
	}
	private NL_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.handleLineBreak()
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.TOKEN_sempred(_localctx, predIndex);
		}
		return true;
	}
	private TOKEN_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.isOperator();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E\x7F\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04 \n\x04\f\x04" +
		"\x0E\x04#\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04)\n\x04\f\x04\x0E" +
		"\x04,\v\x04\x03\x04\x03\x04\x06\x040\n\x04\r\x04\x0E\x041\x03\x04\x03" +
		"\x04\x03\x04\x07\x047\n\x04\f\x04\x0E\x04:\v\x04\x05\x04<\n\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x07\x06B\n\x06\f\x06\x0E\x06E\v\x06\x06\x06G" +
		"\n\x06\r\x06\x0E\x06H\x03\x06\x03\x06\x03\x07\x06\x07N\n\x07\r\x07\x0E" +
		"\x07O\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\bX\n\b\f\b\x0E\b[\v" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x07\td\n\t\f\t\x0E\tg\v\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x07\np\n\n\f\n\x0E\ns\v\n\x03" +
		"\n\x05\nv\n\n\x03\n\x03\n\x05\nz\n\n\x03\n\x03\n\x03\v\x03\v\x041e\x02" +
		"\x02\f\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F" +
		"\x02\v\x11\x02\f\x13\x02\r\x15\x02\x0E\x03\x02\v\x05\x02**]]}}\x05\x02" +
		"++__\x7F\x7F\x03\x022;\x06\x022;C\\aac|\x03\x02))\n\x02))^^ddhhppttvv" +
		"xx\x05\x02C\\aac|\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x02\x90\x02\x03" +
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x03\x17\x03\x02\x02\x02\x05\x1A\x03\x02\x02\x02\x07;\x03" +
		"\x02\x02\x02\t=\x03\x02\x02\x02\vF\x03\x02\x02\x02\rM\x03\x02\x02\x02" +
		"\x0FS\x03\x02\x02\x02\x11^\x03\x02\x02\x02\x13m\x03\x02\x02\x02\x15}\x03" +
		"\x02\x02\x02\x17\x18\t\x02\x02\x02\x18\x19\b\x02\x02\x02\x19\x04\x03\x02" +
		"\x02\x02\x1A\x1B\t\x03\x02\x02\x1B\x1C\b\x03\x03\x02\x1C\x06\x03\x02\x02" +
		"\x02\x1D!\t\x04\x02\x02\x1E \t\x05\x02\x02\x1F\x1E\x03\x02\x02\x02 #\x03" +
		"\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"<\x03\x02\x02\x02" +
		"#!\x03\x02\x02\x02$*\x07)\x02\x02%)\n\x06\x02\x02&\'\x07^\x02\x02\')\t" +
		"\x07\x02\x02(%\x03\x02\x02\x02(&\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03" +
		"\x02\x02\x02*+\x03\x02\x02\x02+-\x03\x02\x02\x02,*\x03\x02\x02\x02-<\x07" +
		")\x02\x02.0\v\x02\x02\x02/.\x03\x02\x02\x0201\x03\x02\x02\x0212\x03\x02" +
		"\x02\x021/\x03\x02\x02\x0223\x03\x02\x02\x023<\x06\x04\x02\x0248\t\b\x02" +
		"\x0257\t\x05\x02\x0265\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02" +
		"\x0289\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02;\x1D\x03\x02" +
		"\x02\x02;$\x03\x02\x02\x02;/\x03\x02\x02\x02;4\x03\x02\x02\x02<\b\x03" +
		"\x02\x02\x02=>\x07.\x02\x02>\n\x03\x02\x02\x02?C\t\t\x02\x02@B\x05\r\x07" +
		"\x02A@\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02" +
		"\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02F?\x03\x02\x02\x02GH\x03\x02\x02" +
		"\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\b\x06\x04" +
		"\x02K\f\x03\x02\x02\x02LN\t\n\x02\x02ML\x03\x02\x02\x02NO\x03\x02\x02" +
		"\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\b\x07\x05" +
		"\x02R\x0E\x03\x02\x02\x02ST\x07/\x02\x02TU\x07/\x02\x02UY\x03\x02\x02" +
		"\x02VX\n\t\x02\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02" +
		"YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\]\b\b\x05\x02" +
		"]\x10\x03\x02\x02\x02^_\x071\x02\x02_`\x07,\x02\x02`e\x03\x02\x02\x02" +
		"ad\x05\x11\t\x02bd\v\x02\x02\x02ca\x03\x02\x02\x02cb\x03\x02\x02\x02d" +
		"g\x03\x02\x02\x02ef\x03\x02\x02\x02ec\x03\x02\x02\x02fh\x03\x02\x02\x02" +
		"ge\x03\x02\x02\x02hi\x07,\x02\x02ij\x071\x02\x02jk\x03\x02\x02\x02kl\b" +
		"\t\x05\x02l\x12\x03\x02\x02\x02mq\x07^\x02\x02np\t\n\x02\x02on\x03\x02" +
		"\x02\x02ps\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02ry\x03\x02" +
		"\x02\x02sq\x03\x02\x02\x02tv\x07\x0F\x02\x02ut\x03\x02\x02\x02uv\x03\x02" +
		"\x02\x02vw\x03\x02\x02\x02wz\x07\f\x02\x02xz\x07\x0F\x02\x02yu\x03\x02" +
		"\x02\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\b\n\x05" +
		"\x02|\x14\x03\x02\x02\x02}~\v\x02\x02\x02~\x16\x03\x02\x02\x02\x12\x02" +
		"!(*18;CHOYcequy\x06\x03\x02\x02\x03\x03\x03\x03\x06\x04\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

