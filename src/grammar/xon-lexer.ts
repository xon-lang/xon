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
	public static readonly INTEGER = 5;
	public static readonly STRING = 6;
	public static readonly OPERATOR = 7;
	public static readonly ID = 8;
	public static readonly COMMA = 9;
	public static readonly NL = 10;
	public static readonly WS = 11;
	public static readonly LINE_COMMENT = 12;
	public static readonly BLOCK_COMMENT = 13;
	public static readonly LINE_JOINING = 14;
	public static readonly UNEXPECTED = 15;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OPEN", "CLOSE", "INTEGER", "STRING", "OPERATOR", "ID", "COMMA", "NL", 
		"WS", "LINE_COMMENT", "BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN", "CLOSE", "INTEGER", "STRING", "OPERATOR", 
		"ID", "COMMA", "NL", "WS", "LINE_COMMENT", "BLOCK_COMMENT", "LINE_JOINING", 
		"UNEXPECTED",
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

		case 7:
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
		case 4:
			return this.OPERATOR_sempred(_localctx, predIndex);
		}
		return true;
	}
	private OPERATOR_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.isOperator();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x11\x85\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x07\x04&\n\x04\f\x04\x0E\x04)\v\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x07\x05/\n\x05\f\x05\x0E\x052\v\x05\x03\x05\x03\x05\x03\x06\x06" +
		"\x067\n\x06\r\x06\x0E\x068\x03\x06\x03\x06\x03\x07\x03\x07\x07\x07?\n" +
		"\x07\f\x07\x0E\x07B\v\x07\x03\b\x03\b\x03\t\x03\t\x07\tH\n\t\f\t\x0E\t" +
		"K\v\t\x06\tM\n\t\r\t\x0E\tN\x03\t\x03\t\x03\n\x06\nT\n\n\r\n\x0E\nU\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v^\n\v\f\v\x0E\va\v\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x07\fj\n\f\f\f\x0E\fm\v\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x07\rv\n\r\f\r\x0E\ry\v\r\x03\r\x05\r|\n\r" +
		"\x03\r\x03\r\x05\r\x80\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x048k\x02\x02\x0F" +
		"\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F\x02\v" +
		"\x11\x02\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02\x11\x03" +
		"\x02\v\x05\x02**]]}}\x05\x02++__\x7F\x7F\x03\x022;\x06\x022;C\\aac|\x03" +
		"\x02))\n\x02))^^ddhhppttvvxx\x05\x02C\\aac|\x04\x02\f\f\x0F\x0F\x04\x02" +
		"\v\v\"\"\x02\x93\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
		"\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
		"\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03" +
		"\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x03\x1D\x03\x02\x02\x02\x05 \x03" +
		"\x02\x02\x02\x07#\x03\x02\x02\x02\t*\x03\x02\x02\x02\v6\x03\x02\x02\x02" +
		"\r<\x03\x02\x02\x02\x0FC\x03\x02\x02\x02\x11L\x03\x02\x02\x02\x13S\x03" +
		"\x02\x02\x02\x15Y\x03\x02\x02\x02\x17d\x03\x02\x02\x02\x19s\x03\x02\x02" +
		"\x02\x1B\x83\x03\x02\x02\x02\x1D\x1E\t\x02\x02\x02\x1E\x1F\b\x02\x02\x02" +
		"\x1F\x04\x03\x02\x02\x02 !\t\x03\x02\x02!\"\b\x03\x03\x02\"\x06\x03\x02" +
		"\x02\x02#\'\t\x04\x02\x02$&\t\x05\x02\x02%$\x03\x02\x02\x02&)\x03\x02" +
		"\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(\b\x03\x02\x02\x02)\'\x03" +
		"\x02\x02\x02*0\x07)\x02\x02+/\n\x06\x02\x02,-\x07^\x02\x02-/\t\x07\x02" +
		"\x02.+\x03\x02\x02\x02.,\x03\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02\x02" +
		"\x0201\x03\x02\x02\x0213\x03\x02\x02\x0220\x03\x02\x02\x0234\x07)\x02" +
		"\x024\n\x03\x02\x02\x0257\v\x02\x02\x0265\x03\x02\x02\x0278\x03\x02\x02" +
		"\x0289\x03\x02\x02\x0286\x03\x02\x02\x029:\x03\x02\x02\x02:;\x06\x06\x02" +
		"\x02;\f\x03\x02\x02\x02<@\t\b\x02\x02=?\t\x05\x02\x02>=\x03\x02\x02\x02" +
		"?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02A\x0E\x03\x02\x02" +
		"\x02B@\x03\x02\x02\x02CD\x07.\x02\x02D\x10\x03\x02\x02\x02EI\t\t\x02\x02" +
		"FH\x05\x13\n\x02GF\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02" +
		"IJ\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02LE\x03\x02\x02\x02" +
		"MN\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x03\x02\x02\x02" +
		"PQ\b\t\x04\x02Q\x12\x03\x02\x02\x02RT\t\n\x02\x02SR\x03\x02\x02\x02TU" +
		"\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x03\x02\x02\x02" +
		"WX\b\n\x05\x02X\x14\x03\x02\x02\x02YZ\x07/\x02\x02Z[\x07/\x02\x02[_\x03" +
		"\x02\x02\x02\\^\n\t\x02\x02]\\\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03" +
		"\x02\x02\x02_`\x03\x02\x02\x02`b\x03\x02\x02\x02a_\x03\x02\x02\x02bc\b" +
		"\v\x05\x02c\x16\x03\x02\x02\x02de\x071\x02\x02ef\x07,\x02\x02fk\x03\x02" +
		"\x02\x02gj\x05\x17\f\x02hj\v\x02\x02\x02ig\x03\x02\x02\x02ih\x03\x02\x02" +
		"\x02jm\x03\x02\x02\x02kl\x03\x02\x02\x02ki\x03\x02\x02\x02ln\x03\x02\x02" +
		"\x02mk\x03\x02\x02\x02no\x07,\x02\x02op\x071\x02\x02pq\x03\x02\x02\x02" +
		"qr\b\f\x05\x02r\x18\x03\x02\x02\x02sw\x07^\x02\x02tv\t\n\x02\x02ut\x03" +
		"\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x\x7F" +
		"\x03\x02\x02\x02yw\x03\x02\x02\x02z|\x07\x0F\x02\x02{z\x03\x02\x02\x02" +
		"{|\x03\x02\x02\x02|}\x03\x02\x02\x02}\x80\x07\f\x02\x02~\x80\x07\x0F\x02" +
		"\x02\x7F{\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02" +
		"\x80\x81\x03\x02\x02\x02\x81\x82\b\r\x05\x02\x82\x1A\x03\x02\x02\x02\x83" +
		"\x84\v\x02\x02\x02\x84\x1C\x03\x02\x02\x02\x11\x02\'.08@INU_ikw{\x7F\x06" +
		"\x03\x02\x02\x03\x03\x03\x03\t\x04\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

