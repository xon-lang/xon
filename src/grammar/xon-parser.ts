// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonParser extends Parser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly OPEN_BRACKET = 3;
	public static readonly CLOSE_BRACKET = 4;
	public static readonly OPEN_PAREN = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_BRACE = 7;
	public static readonly CLOSE_BRACE = 8;
	public static readonly ACTUAL = 9;
	public static readonly BREAK = 10;
	public static readonly CONTINUE = 11;
	public static readonly DO = 12;
	public static readonly ELSE = 13;
	public static readonly EXPECT = 14;
	public static readonly EXPORT = 15;
	public static readonly FOR = 16;
	public static readonly IF = 17;
	public static readonly IMPORT = 18;
	public static readonly RETURN = 19;
	public static readonly WHILE = 20;
	public static readonly ASSIGN = 21;
	public static readonly COLON = 22;
	public static readonly COMMA = 23;
	public static readonly DOT = 24;
	public static readonly GENERIC_LEFT = 25;
	public static readonly GENERIC_RIGHT = 26;
	public static readonly QUESTION = 27;
	public static readonly FLOAT_LITERAL = 28;
	public static readonly INTEGER_LITERAL = 29;
	public static readonly REGEX_LITERAL = 30;
	public static readonly STRING_LITERAL = 31;
	public static readonly PREPROCESSOR = 32;
	public static readonly ID = 33;
	public static readonly OPERATOR = 34;
	public static readonly NL = 35;
	public static readonly WS = 36;
	public static readonly BLOCK_COMMENT = 37;
	public static readonly LINE_COMMENT = 38;
	public static readonly UNEXPECTED = 39;
	public static readonly LINE_JOINING = 40;
	public static readonly RULE_source = 0;
	public static readonly RULE_definition = 1;
	public static readonly RULE_attribute = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_expr = 4;
	public static readonly RULE_literal = 5;
	public static readonly RULE_body = 6;
	public static readonly RULE_arrayItem = 7;
	public static readonly RULE_parameter = 8;
	public static readonly RULE_methodParameters = 9;
	public static readonly RULE_indexerParameters = 10;
	public static readonly RULE_generics = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "definition", "attribute", "statement", "expr", "literal", "body", 
		"arrayItem", "parameter", "methodParameters", "indexerParameters", "generics",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'import'", "'return'", "'while'", "'='", "':'", "','", 
		"'.'", "'<|'", "'|>'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "RETURN", "WHILE", 
		"ASSIGN", "COLON", "COMMA", "DOT", "GENERIC_LEFT", "GENERIC_RIGHT", "QUESTION", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "REGEX_LITERAL", "STRING_LITERAL", 
		"PREPROCESSOR", "ID", "OPERATOR", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", 
		"UNEXPECTED", "LINE_JOINING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonParser._LITERAL_NAMES, XonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XonParser._ATN, this);
	}
	// @RuleVersion(0)
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_source);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.GENERIC_LEFT) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.REGEX_LITERAL) | (1 << XonParser.STRING_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OPERATOR - 32)) | (1 << (XonParser.NL - 32)))) !== 0)) {
				{
				this.state = 27;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 24;
					this.definition();
					}
					break;

				case 2:
					{
					this.state = 25;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 26;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			_localctx._modifier = this.match(XonParser.ID);
			this.state = 33;
			_localctx._name = this.match(XonParser.ID);
			this.state = 35;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 34;
				this.generics();
				}
				break;
			}
			this.state = 38;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 37;
				this.methodParameters();
				}
				break;
			}
			this.state = 41;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 40;
				this.expr(0);
				}
				break;
			}
			this.state = 52;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 43;
				this.match(XonParser.NL);
				this.state = 44;
				this.match(XonParser.INDENT);
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 47;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.ID:
						{
						this.state = 45;
						this.attribute();
						}
						break;
					case XonParser.NL:
						{
						this.state = 46;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID || _la === XonParser.NL);
				this.state = 51;
				this.match(XonParser.DEDENT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_attribute);
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				_localctx._modifier = this.match(XonParser.ID);
				this.state = 55;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.ID || _la === XonParser.OPERATOR)) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.GENERIC_LEFT) {
					{
					this.state = 56;
					this.generics();
					}
				}

				this.state = 59;
				this.methodParameters();
				this.state = 61;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 60;
					this.expr(0);
					}
					break;
				}
				this.state = 64;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 63;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				_localctx._name = this.match(XonParser.ID);
				this.state = 68;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 67;
					this.generics();
					}
					break;
				}
				this.state = 71;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 70;
					this.methodParameters();
					}
					break;
				}
				this.state = 74;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 73;
					this.expr(0);
					}
					break;
				}
				this.state = 77;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 76;
					this.body();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.match(XonParser.IMPORT);
				this.state = 82;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 95;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 83;
					this.match(XonParser.COLON);
					this.state = 84;
					(_localctx as ImportStatementContext)._expr = this.expr(0);
					(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
					this.state = 89;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 85;
							this.match(XonParser.COMMA);
							this.state = 86;
							(_localctx as ImportStatementContext)._expr = this.expr(0);
							(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
							}
							}
						}
						this.state = 91;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					}
					this.state = 93;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						this.state = 92;
						this.match(XonParser.COMMA);
						}
						break;
					}
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 97;
				this.match(XonParser.EXPORT);
				this.state = 98;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				this.match(XonParser.FOR);
				this.state = 107;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 100;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 101;
						this.match(XonParser.COMMA);
						this.state = 102;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 105;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 109;
				this.expr(0);
				this.state = 110;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 112;
				this.match(XonParser.WHILE);
				this.state = 113;
				this.expr(0);
				this.state = 114;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 116;
				this.match(XonParser.DO);
				this.state = 117;
				this.body();
				this.state = 118;
				this.match(XonParser.WHILE);
				this.state = 119;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 121;
				this.match(XonParser.IF);
				this.state = 122;
				this.expr(0);
				this.state = 123;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 126;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 124;
					this.match(XonParser.ELSE);
					this.state = 125;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 128;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 129;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 130;
				this.match(XonParser.RETURN);
				this.state = 132;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 131;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 134;
				this.match(XonParser.ACTUAL);
				this.state = 135;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 136;
					this.match(XonParser.NL);
					}
					}
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 141;
				this.match(XonParser.EXPECT);
				this.state = 142;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 144;
				this.expr(0);
				this.state = 145;
				this.match(XonParser.ASSIGN);
				this.state = 146;
				this.expr(0);
				}
				break;

			case 12:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 148;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, XonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 152;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 153;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.GENERIC_LEFT - 3)) | (1 << (XonParser.FLOAT_LITERAL - 3)) | (1 << (XonParser.INTEGER_LITERAL - 3)) | (1 << (XonParser.REGEX_LITERAL - 3)) | (1 << (XonParser.STRING_LITERAL - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OPERATOR - 3)))) !== 0)) {
					{
					this.state = 154;
					this.arrayItem();
					this.state = 159;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 155;
							this.match(XonParser.COMMA);
							this.state = 156;
							this.arrayItem();
							}
							}
						}
						this.state = 161;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
					}
					this.state = 163;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 162;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 167;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 168;
				this.match(XonParser.OPEN_BRACE);
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 169;
					this.attribute();
					this.state = 174;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 170;
							this.match(XonParser.COMMA);
							this.state = 171;
							this.attribute();
							}
							}
						}
						this.state = 176;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 177;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 182;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 183;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 184;
				(_localctx as PrefixExpressionContext)._op = this.match(XonParser.OPERATOR);
				this.state = 185;
				this.expr(6);
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 186;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.ID);
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.GENERIC_LEFT) {
					{
					this.state = 187;
					this.generics();
					}
				}

				this.state = 190;
				this.methodParameters();
				this.state = 191;
				this.body();
				}
				break;

			case 8:
				{
				_localctx = new IndexerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.GENERIC_LEFT) {
					{
					this.state = 193;
					this.generics();
					}
				}

				this.state = 196;
				this.indexerParameters();
				this.state = 197;
				this.body();
				}
				break;

			case 9:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 199;
				this.match(XonParser.OPEN_PAREN);
				this.state = 200;
				this.expr(0);
				this.state = 201;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 249;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 247;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 205;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 206;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.ID || _la === XonParser.OPERATOR)) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 207;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 2:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 208;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 209;
						this.match(XonParser.OPEN_PAREN);
						this.state = 221;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.GENERIC_LEFT - 3)) | (1 << (XonParser.FLOAT_LITERAL - 3)) | (1 << (XonParser.INTEGER_LITERAL - 3)) | (1 << (XonParser.REGEX_LITERAL - 3)) | (1 << (XonParser.STRING_LITERAL - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OPERATOR - 3)))) !== 0)) {
							{
							this.state = 210;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 215;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 211;
									this.match(XonParser.COMMA);
									this.state = 212;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 217;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
							}
							this.state = 219;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 218;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 223;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 224;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 225;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 237;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.GENERIC_LEFT - 3)) | (1 << (XonParser.FLOAT_LITERAL - 3)) | (1 << (XonParser.INTEGER_LITERAL - 3)) | (1 << (XonParser.REGEX_LITERAL - 3)) | (1 << (XonParser.STRING_LITERAL - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OPERATOR - 3)))) !== 0)) {
							{
							this.state = 226;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 231;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 227;
									this.match(XonParser.COMMA);
									this.state = 228;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 233;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
							}
							this.state = 235;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 234;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 239;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 4:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 240;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 241;
						this.match(XonParser.QUESTION);
						}
						break;

					case 5:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 242;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 243;
						this.match(XonParser.DOT);
						this.state = 244;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.ID);
						}
						break;

					case 6:
						{
						_localctx = new GenericsExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 245;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 246;
						this.generics();
						}
						break;
					}
					}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_literal);
		try {
			this.state = 256;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 252;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 253;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 254;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 255;
				this.match(XonParser.REGEX_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 269;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 258;
				this.match(XonParser.ASSIGN);
				this.state = 259;
				this.statement();
				}
				break;
			case XonParser.NL:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 260;
				this.match(XonParser.NL);
				this.state = 261;
				this.match(XonParser.INDENT);
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 264;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.BREAK:
					case XonParser.CONTINUE:
					case XonParser.DO:
					case XonParser.EXPORT:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.RETURN:
					case XonParser.WHILE:
					case XonParser.GENERIC_LEFT:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
					case XonParser.OPERATOR:
						{
						this.state = 262;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 263;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.GENERIC_LEFT) | (1 << XonParser.FLOAT_LITERAL) | (1 << XonParser.INTEGER_LITERAL) | (1 << XonParser.REGEX_LITERAL) | (1 << XonParser.STRING_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OPERATOR - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
				this.state = 268;
				this.match(XonParser.DEDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayItem(): ArrayItemContext {
		let _localctx: ArrayItemContext = new ArrayItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_arrayItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 271;
				this.expr(0);
				this.state = 272;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 276;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			_localctx._name = this.match(XonParser.ID);
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 279;
				this.expr(0);
				this.state = 280;
				this.body();
				}
				break;

			case 2:
				{
				this.state = 282;
				this.expr(0);
				}
				break;

			case 3:
				{
				this.state = 283;
				this.body();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodParameters(): MethodParametersContext {
		let _localctx: MethodParametersContext = new MethodParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_methodParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.match(XonParser.OPEN_PAREN);
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 287;
				this.parameter();
				this.state = 292;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 288;
						this.match(XonParser.COMMA);
						this.state = 289;
						this.parameter();
						}
						}
					}
					this.state = 294;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 295;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 300;
			this.match(XonParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexerParameters(): IndexerParametersContext {
		let _localctx: IndexerParametersContext = new IndexerParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_indexerParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ID) {
				{
				this.state = 303;
				this.parameter();
				this.state = 308;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 304;
						this.match(XonParser.COMMA);
						this.state = 305;
						this.parameter();
						}
						}
					}
					this.state = 310;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 311;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 316;
			this.match(XonParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generics(): GenericsContext {
		let _localctx: GenericsContext = new GenericsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_generics);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(XonParser.GENERIC_LEFT);
			this.state = 319;
			this.parameter();
			this.state = 324;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 320;
					this.match(XonParser.COMMA);
					this.state = 321;
					this.parameter();
					}
					}
				}
				this.state = 326;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			}
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 327;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 330;
			this.match(XonParser.GENERIC_RIGHT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*\u014F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x03\x03" +
		"\x03\x03\x03\x05\x03&\n\x03\x03\x03\x05\x03)\n\x03\x03\x03\x05\x03,\n" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x032\n\x03\r\x03\x0E\x033\x03" +
		"\x03\x05\x037\n\x03\x03\x04\x03\x04\x03\x04\x05\x04<\n\x04\x03\x04\x03" +
		"\x04\x05\x04@\n\x04\x03\x04\x05\x04C\n\x04\x03\x04\x03\x04\x05\x04G\n" +
		"\x04\x03\x04\x05\x04J\n\x04\x03\x04\x05\x04M\n\x04\x03\x04\x05\x04P\n" +
		"\x04\x05\x04R\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07" +
		"\x05Z\n\x05\f\x05\x0E\x05]\v\x05\x03\x05\x05\x05`\n\x05\x05\x05b\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05j\n\x05\x03\x05" +
		"\x03\x05\x05\x05n\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\x81\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\x87\n\x05\x03\x05\x03\x05\x03\x05\x06\x05\x8C\n\x05\r\x05\x0E\x05" +
		"\x8D\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\x98\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"\xA0\n\x06\f\x06\x0E\x06\xA3\v\x06\x03\x06\x05\x06\xA6\n\x06\x05\x06\xA8" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xAF\n\x06\f\x06" +
		"\x0E\x06\xB2\v\x06\x03\x06\x05\x06\xB5\n\x06\x05\x06\xB7\n\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xBF\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\xC5\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06\xCE\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xD8\n\x06\f\x06\x0E\x06\xDB" +
		"\v\x06\x03\x06\x05\x06\xDE\n\x06\x05\x06\xE0\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x06\xE8\n\x06\f\x06\x0E\x06\xEB\v\x06" +
		"\x03\x06\x05\x06\xEE\n\x06\x05\x06\xF0\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xFA\n\x06\f\x06\x0E\x06\xFD" +
		"\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0103\n\x07\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x06\b\u010B\n\b\r\b\x0E\b\u010C\x03\b\x05\b\u0110" +
		"\n\b\x03\t\x03\t\x03\t\x05\t\u0115\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u011F\n\n\x03\v\x03\v\x03\v\x03\v\x07\v\u0125\n\v" +
		"\f\v\x0E\v\u0128\v\v\x03\v\x05\v\u012B\n\v\x05\v\u012D\n\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x03\f\x07\f\u0135\n\f\f\f\x0E\f\u0138\v\f\x03\f\x05" +
		"\f\u013B\n\f\x05\f\u013D\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r" +
		"\u0145\n\r\f\r\x0E\r\u0148\v\r\x03\r\x05\r\u014B\n\r\x03\r\x03\r\x03\r" +
		"\x02\x02\x03\n\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x03\x03\x02#$\x02\u0194\x02\x1F" +
		"\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x06Q\x03\x02\x02\x02\b\x97\x03" +
		"\x02\x02\x02\n\xCD\x03\x02\x02\x02\f\u0102\x03\x02\x02\x02\x0E\u010F\x03" +
		"\x02\x02\x02\x10\u0114\x03\x02\x02\x02\x12\u0118\x03\x02\x02\x02\x14\u0120" +
		"\x03\x02\x02\x02\x16\u0130\x03\x02\x02\x02\x18\u0140\x03\x02\x02\x02\x1A" +
		"\x1E\x05\x04\x03\x02\x1B\x1E\x05\b\x05\x02\x1C\x1E\x07%\x02\x02\x1D\x1A" +
		"\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1C\x03\x02\x02\x02\x1E!" +
		"\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x03\x03" +
		"\x02\x02\x02!\x1F\x03\x02\x02\x02\"#\x07#\x02\x02#%\x07#\x02\x02$&\x05" +
		"\x18\r\x02%$\x03\x02\x02\x02%&\x03\x02\x02\x02&(\x03\x02\x02\x02\')\x05" +
		"\x14\v\x02(\'\x03\x02\x02\x02()\x03\x02\x02\x02)+\x03\x02\x02\x02*,\x05" +
		"\n\x06\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02,6\x03\x02\x02\x02-.\x07" +
		"%\x02\x02.1\x07\x03\x02\x02/2\x05\x06\x04\x0202\x07%\x02\x021/\x03\x02" +
		"\x02\x0210\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02" +
		"\x02\x0245\x03\x02\x02\x0257\x07\x04\x02\x026-\x03\x02\x02\x0267\x03\x02" +
		"\x02\x027\x05\x03\x02\x02\x0289\x07#\x02\x029;\t\x02\x02\x02:<\x05\x18" +
		"\r\x02;:\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x05\x14" +
		"\v\x02>@\x05\n\x06\x02?>\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03\x02\x02" +
		"\x02AC\x05\x0E\b\x02BA\x03\x02\x02\x02BC\x03\x02\x02\x02CR\x03\x02\x02" +
		"\x02DF\x07#\x02\x02EG\x05\x18\r\x02FE\x03\x02\x02\x02FG\x03\x02\x02\x02" +
		"GI\x03\x02\x02\x02HJ\x05\x14\v\x02IH\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"JL\x03\x02\x02\x02KM\x05\n\x06\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02" +
		"MO\x03\x02\x02\x02NP\x05\x0E\b\x02ON\x03\x02\x02\x02OP\x03\x02\x02\x02" +
		"PR\x03\x02\x02\x02Q8\x03\x02\x02\x02QD\x03\x02\x02\x02R\x07\x03\x02\x02" +
		"\x02ST\x07\x14\x02\x02Ta\x05\n\x06\x02UV\x07\x18\x02\x02V[\x05\n\x06\x02" +
		"WX\x07\x19\x02\x02XZ\x05\n\x06\x02YW\x03\x02\x02\x02Z]\x03\x02\x02\x02" +
		"[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02" +
		"\x02^`\x07\x19\x02\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`b\x03\x02\x02" +
		"\x02aU\x03\x02\x02\x02ab\x03\x02\x02\x02b\x98\x03\x02\x02\x02cd\x07\x11" +
		"\x02\x02d\x98\x05\n\x06\x02em\x07\x12\x02\x02fi\x05\x12\n\x02gh\x07\x19" +
		"\x02\x02hj\x05\x12\n\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03\x02" +
		"\x02\x02kl\x07#\x02\x02ln\x03\x02\x02\x02mf\x03\x02\x02\x02mn\x03\x02" +
		"\x02\x02no\x03\x02\x02\x02op\x05\n\x06\x02pq\x05\x0E\b\x02q\x98\x03\x02" +
		"\x02\x02rs\x07\x16\x02\x02st\x05\n\x06\x02tu\x05\x0E\b\x02u\x98\x03\x02" +
		"\x02\x02vw\x07\x0E\x02\x02wx\x05\x0E\b\x02xy\x07\x16\x02\x02yz\x05\n\x06" +
		"\x02z\x98\x03\x02\x02\x02{|\x07\x13\x02\x02|}\x05\n\x06\x02}\x80\x05\x0E" +
		"\b\x02~\x7F\x07\x0F\x02\x02\x7F\x81\x05\x0E\b\x02\x80~\x03\x02\x02\x02" +
		"\x80\x81\x03\x02\x02\x02\x81\x98\x03\x02\x02\x02\x82\x98\x07\f\x02\x02" +
		"\x83\x98\x07\r\x02\x02\x84\x86\x07\x15\x02\x02\x85\x87\x05\n\x06\x02\x86" +
		"\x85\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x98\x03\x02\x02\x02\x88" +
		"\x89\x07\v\x02\x02\x89\x8B\x05\n\x06\x02\x8A\x8C\x07%\x02\x02\x8B\x8A" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x07\x10\x02\x02\x90\x91" +
		"\x05\n\x06\x02\x91\x98\x03\x02\x02\x02\x92\x93\x05\n\x06\x02\x93\x94\x07" +
		"\x17\x02\x02\x94\x95\x05\n\x06\x02\x95\x98\x03\x02\x02\x02\x96\x98\x05" +
		"\n\x06\x02\x97S\x03\x02\x02\x02\x97c\x03\x02\x02\x02\x97e\x03\x02\x02" +
		"\x02\x97r\x03\x02\x02\x02\x97v\x03\x02\x02\x02\x97{\x03\x02\x02\x02\x97" +
		"\x82\x03\x02\x02\x02\x97\x83\x03\x02\x02\x02\x97\x84\x03\x02\x02\x02\x97" +
		"\x88\x03\x02\x02\x02\x97\x92\x03\x02\x02\x02\x97\x96\x03\x02\x02\x02\x98" +
		"\t\x03\x02\x02\x02\x99\x9A\b\x06\x01\x02\x9A\xCE\x07\"\x02\x02\x9B\xA7" +
		"\x07\x05\x02\x02\x9C\xA1\x05\x10\t\x02\x9D\x9E\x07\x19\x02\x02\x9E\xA0" +
		"\x05\x10\t\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F" +
		"\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1" +
		"\x03\x02\x02\x02\xA4\xA6\x07\x19\x02\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6" +
		"\x03\x02\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\x9C\x03\x02\x02\x02\xA7\xA8" +
		"\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xCE\x07\x06\x02\x02\xAA\xB6" +
		"\x07\t\x02\x02\xAB\xB0\x05\x06\x04\x02\xAC\xAD\x07\x19\x02\x02\xAD\xAF" +
		"\x05\x06\x04\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE" +
		"\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0" +
		"\x03\x02\x02\x02\xB3\xB5\x07\x19\x02\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5" +
		"\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xAB\x03\x02\x02\x02\xB6\xB7" +
		"\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xCE\x07\n\x02\x02\xB9\xCE" +
		"\x05\f\x07\x02\xBA\xBB\x07$\x02\x02\xBB\xCE\x05\n\x06\b\xBC\xCE\x07#\x02" +
		"\x02\xBD\xBF\x05\x18\r\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02" +
		"\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x05\x14\v\x02\xC1\xC2\x05\x0E\b\x02" +
		"\xC2\xCE\x03\x02\x02\x02\xC3\xC5\x05\x18\r\x02\xC4\xC3\x03\x02\x02\x02" +
		"\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x05\x16\f\x02" +
		"\xC7\xC8\x05\x0E\b\x02\xC8\xCE\x03\x02\x02\x02\xC9\xCA\x07\x07\x02\x02" +
		"\xCA\xCB\x05\n\x06\x02\xCB\xCC\x07\b\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD" +
		"\x99\x03\x02\x02\x02\xCD\x9B\x03\x02\x02\x02\xCD\xAA\x03\x02\x02\x02\xCD" +
		"\xB9\x03\x02\x02\x02\xCD\xBA\x03\x02\x02\x02\xCD\xBC\x03\x02\x02\x02\xCD" +
		"\xBE\x03\x02\x02\x02\xCD\xC4\x03\x02\x02\x02\xCD\xC9\x03\x02\x02\x02\xCE" +
		"\xFB\x03\x02\x02\x02\xCF\xD0\f\x07\x02\x02\xD0\xD1\t\x02\x02\x02\xD1\xFA" +
		"\x05\n\x06\b\xD2\xD3\f\x0E\x02\x02\xD3\xDF\x07\x07\x02\x02\xD4\xD9\x05" +
		"\n\x06\x02\xD5\xD6\x07\x19\x02\x02\xD6\xD8\x05\n\x06\x02\xD7\xD5\x03\x02" +
		"\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02" +
		"\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDE\x07\x19" +
		"\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE0\x03\x02" +
		"\x02\x02\xDF\xD4\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02" +
		"\x02\x02\xE1\xFA\x07\b\x02\x02\xE2\xE3\f\r\x02\x02\xE3\xEF\x07\x05\x02" +
		"\x02\xE4\xE9\x05\n\x06\x02\xE5\xE6\x07\x19\x02\x02\xE6\xE8\x05\n\x06\x02" +
		"\xE7\xE5\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02" +
		"\xE9\xEA\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02" +
		"\xEC\xEE\x07\x19\x02\x02\xED\xEC\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02" +
		"\xEE\xF0\x03\x02\x02\x02\xEF\xE4\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02" +
		"\xF0\xF1\x03\x02\x02\x02\xF1\xFA\x07\x06\x02\x02\xF2\xF3\f\v\x02\x02\xF3" +
		"\xFA\x07\x1D\x02\x02\xF4\xF5\f\n\x02\x02\xF5\xF6\x07\x1A\x02\x02\xF6\xFA" +
		"\x07#\x02\x02\xF7\xF8\f\t\x02\x02\xF8\xFA\x05\x18\r\x02\xF9\xCF\x03\x02" +
		"\x02\x02\xF9\xD2\x03\x02\x02\x02\xF9\xE2\x03\x02\x02\x02\xF9\xF2\x03\x02" +
		"\x02\x02\xF9\xF4\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFD\x03\x02" +
		"\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\v\x03\x02" +
		"\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0103\x07\x1F\x02\x02\xFF\u0103\x07" +
		"\x1E\x02\x02\u0100\u0103\x07!\x02\x02\u0101\u0103\x07 \x02\x02\u0102\xFE" +
		"\x03\x02\x02\x02\u0102\xFF\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02" +
		"\u0102\u0101\x03\x02\x02\x02\u0103\r\x03\x02\x02\x02\u0104\u0105\x07\x17" +
		"\x02\x02\u0105\u0110\x05\b\x05\x02\u0106\u0107\x07%\x02\x02\u0107\u010A" +
		"\x07\x03\x02\x02\u0108\u010B\x05\b\x05\x02\u0109\u010B\x07%\x02\x02\u010A" +
		"\u0108\x03\x02\x02\x02\u010A\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02" +
		"\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E\u0110\x07\x04\x02\x02\u010F\u0104\x03\x02" +
		"\x02\x02\u010F\u0106\x03\x02\x02\x02\u0110\x0F\x03\x02\x02\x02\u0111\u0112" +
		"\x05\n\x06\x02\u0112\u0113\x07\x18\x02\x02\u0113\u0115\x03\x02\x02\x02" +
		"\u0114\u0111\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03" +
		"\x02\x02\x02\u0116\u0117\x05\n\x06\x02\u0117\x11\x03\x02\x02\x02\u0118" +
		"\u011E\x07#\x02\x02\u0119\u011A\x05\n\x06\x02\u011A\u011B\x05\x0E\b\x02" +
		"\u011B\u011F\x03\x02\x02\x02\u011C\u011F\x05\n\x06\x02\u011D\u011F\x05" +
		"\x0E\b\x02\u011E\u0119\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E" +
		"\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\x13\x03\x02\x02" +
		"\x02\u0120\u012C\x07\x07\x02\x02\u0121\u0126\x05\x12\n\x02\u0122\u0123" +
		"\x07\x19\x02\x02\u0123\u0125\x05\x12\n\x02\u0124\u0122\x03\x02\x02\x02" +
		"\u0125\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03" +
		"\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129" +
		"\u012B\x07\x19\x02\x02\u012A\u0129\x03\x02\x02\x02\u012A\u012B\x03\x02" +
		"\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u0121\x03\x02\x02\x02\u012C" +
		"\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x07\b\x02" +
		"\x02\u012F\x15\x03\x02\x02\x02\u0130\u013C\x07\x05\x02\x02\u0131\u0136" +
		"\x05\x12\n\x02\u0132\u0133\x07\x19\x02\x02\u0133\u0135\x05\x12\n\x02\u0134" +
		"\u0132\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02" +
		"\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138" +
		"\u0136\x03\x02\x02\x02\u0139\u013B\x07\x19\x02\x02\u013A\u0139\x03\x02" +
		"\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C" +
		"\u0131\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02" +
		"\x02\x02\u013E\u013F\x07\x06\x02\x02\u013F\x17\x03\x02\x02\x02\u0140\u0141" +
		"\x07\x1B\x02\x02\u0141\u0146\x05\x12\n\x02\u0142\u0143\x07\x19\x02\x02" +
		"\u0143\u0145\x05\x12\n\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0148\x03" +
		"\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147" +
		"\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014B\x07\x19" +
		"\x02\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B" +
		"\u014C\x03\x02\x02\x02\u014C\u014D\x07\x1C\x02\x02\u014D\x19\x03\x02\x02" +
		"\x02:\x1D\x1F%(+136;?BFILOQ[_aim\x80\x86\x8D\x97\xA1\xA5\xA7\xB0\xB4\xB6" +
		"\xBE\xC4\xCD\xD9\xDD\xDF\xE9\xED\xEF\xF9\xFB\u0102\u010A\u010C\u010F\u0114" +
		"\u011E\u0126\u012A\u012C\u0136\u013A\u013C\u0146\u014A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
}


export class DefinitionContext extends ParserRuleContext {
	public _modifier!: Token;
	public _name!: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public methodParameters(): MethodParametersContext | undefined {
		return this.tryGetRuleContext(0, MethodParametersContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class AttributeContext extends ParserRuleContext {
	public _modifier!: Token;
	public _name!: Token;
	public methodParameters(): MethodParametersContext | undefined {
		return this.tryGetRuleContext(0, MethodParametersContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPERATOR, 0); }
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attribute; }
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ImportStatementContext extends StatementContext {
	public _path!: ExprContext;
	public _expr!: ExprContext;
	public _members: ExprContext[] = [];
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExportStatementContext extends StatementContext {
	public _path!: ExprContext;
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ForStatementContext extends StatementContext {
	public _value!: ParameterContext;
	public _index!: ParameterContext;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(XonParser.COMMA, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class WhileStatementContext extends StatementContext {
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DoWhileStatementContext extends StatementContext {
	public DO(): TerminalNode { return this.getToken(XonParser.DO, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IfStatementContext extends StatementContext {
	public _thenBody!: BodyContext;
	public _elseBody!: BodyContext;
	public IF(): TerminalNode { return this.getToken(XonParser.IF, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(XonParser.ELSE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public BREAK(): TerminalNode { return this.getToken(XonParser.BREAK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ContinueStatementContext extends StatementContext {
	public CONTINUE(): TerminalNode { return this.getToken(XonParser.CONTINUE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(XonParser.RETURN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssertStatementContext extends StatementContext {
	public _actual!: ExprContext;
	public _expect!: ExprContext;
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class PreprocessorExpressionContext extends ExprContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExprContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public arrayItem(): ArrayItemContext[];
	public arrayItem(i: number): ArrayItemContext;
	public arrayItem(i?: number): ArrayItemContext | ArrayItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayItemContext);
		} else {
			return this.getRuleContext(i, ArrayItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExprContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InvokeExpressionContext extends ExprContext {
	public _instance!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExprContext {
	public _instance!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullableExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExprContext {
	public _name!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class GenericsExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public generics(): GenericsContext {
		return this.getRuleContext(0, GenericsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public OPERATOR(): TerminalNode { return this.getToken(XonParser.OPERATOR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPERATOR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExprContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExprContext {
	public methodParameters(): MethodParametersContext {
		return this.getRuleContext(0, MethodParametersContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexerExpressionContext extends ExprContext {
	public indexerParameters(): IndexerParametersContext {
		return this.getRuleContext(0, IndexerParametersContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExprContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerLiteralContext extends LiteralContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(XonParser.INTEGER_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FLOAT_LITERAL(): TerminalNode { return this.getToken(XonParser.FLOAT_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(XonParser.STRING_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RegexLiteralContext extends LiteralContext {
	public REGEX_LITERAL(): TerminalNode { return this.getToken(XonParser.REGEX_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
	public copyFrom(ctx: BodyContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleBodyContext extends BodyContext {
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MultipleBodyContext extends BodyContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ArrayItemContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_arrayItem; }
}


export class ParameterContext extends ParserRuleContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class MethodParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_methodParameters; }
}


export class IndexerParametersContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_indexerParameters; }
}


export class GenericsContext extends ParserRuleContext {
	public GENERIC_LEFT(): TerminalNode { return this.getToken(XonParser.GENERIC_LEFT, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public GENERIC_RIGHT(): TerminalNode { return this.getToken(XonParser.GENERIC_RIGHT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_generics; }
}


