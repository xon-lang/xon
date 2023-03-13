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
	public static readonly NL = 3;
	public static readonly LINE_COMMENT = 4;
	public static readonly TOKEN = 5;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"NL", "LINE_COMMENT", "TOKEN",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "NL", "LINE_COMMENT", "TOKEN",
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
			this.NL_action(_localctx, actionIndex);
			break;
		}
	}
	private NL_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.handleLineBreak()
			break;
		}
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07#\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x07\x02\f\n\x02" +
		"\f\x02\x0E\x02\x0F\v\x02\x06\x02\x11\n\x02\r\x02\x0E\x02\x12\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1B\n\x03\f\x03\x0E\x03\x1E" +
		"\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x02\x02\x02\x05\x03\x02\x05\x05" +
		"\x02\x06\x07\x02\x07\x03\x02\x04\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x02" +
		"%\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
		"\x02\x03\x10\x03\x02\x02\x02\x05\x16\x03\x02\x02\x02\x07!\x03\x02\x02" +
		"\x02\t\r\t\x02\x02\x02\n\f\t\x03\x02\x02\v\n\x03\x02\x02\x02\f\x0F\x03" +
		"\x02\x02\x02\r\v\x03\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E\x11\x03\x02" +
		"\x02\x02\x0F\r\x03\x02\x02\x02\x10\t\x03\x02\x02\x02\x11\x12\x03\x02\x02" +
		"\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x14\x03\x02\x02" +
		"\x02\x14\x15\b\x02\x02\x02\x15\x04\x03\x02\x02\x02\x16\x17\x07/\x02\x02" +
		"\x17\x18\x07/\x02\x02\x18\x1C\x03\x02\x02\x02\x19\x1B\n\x02\x02\x02\x1A" +
		"\x19\x03\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C" +
		"\x1D\x03\x02\x02\x02\x1D\x1F\x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1F" +
		" \b\x03\x03\x02 \x06\x03\x02\x02\x02!\"\v\x02\x02\x02\"\b\x03\x02\x02" +
		"\x02\x06\x02\r\x12\x1C\x04\x03\x02\x02\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

