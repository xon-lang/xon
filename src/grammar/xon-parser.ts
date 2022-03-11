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
	public static readonly DO = 11;
	public static readonly ELSE = 12;
	public static readonly EXPECT = 13;
	public static readonly EXPORT = 14;
	public static readonly FOR = 15;
	public static readonly IF = 16;
	public static readonly IMPORT = 17;
	public static readonly IN = 18;
	public static readonly IS = 19;
	public static readonly RETURN = 20;
	public static readonly SET = 21;
	public static readonly WHILE = 22;
	public static readonly ASSIGN = 23;
	public static readonly COLON = 24;
	public static readonly COMMA = 25;
	public static readonly DOT = 26;
	public static readonly GENERIC_LEFT = 27;
	public static readonly GENERIC_RIGHT = 28;
	public static readonly HASH = 29;
	public static readonly QUESTION = 30;
	public static readonly FLOAT_LITERAL = 31;
	public static readonly INTEGER_LITERAL = 32;
	public static readonly REGEX_LITERAL = 33;
	public static readonly STRING_LITERAL = 34;
	public static readonly PREPROCESSOR = 35;
	public static readonly ID = 36;
	public static readonly OPERATOR = 37;
	public static readonly NL = 38;
	public static readonly WS = 39;
	public static readonly BLOCK_COMMENT = 40;
	public static readonly LINE_COMMENT = 41;
	public static readonly UNEXPECTED = 42;
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
	public static readonly RULE_id = 11;
	public static readonly RULE_generics = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "definition", "attribute", "statement", "expr", "literal", "body", 
		"arrayItem", "parameter", "methodParameters", "indexerParameters", "id", 
		"generics",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'do'", "'else'", "'expect'", "'export'", "'for'", 
		"'if'", "'import'", "'in'", "'is'", "'return'", "'set'", "'while'", "'='", 
		"':'", "','", "'.'", "'<|'", "'|>'", "'#'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "DO", "ELSE", 
		"EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "IN", "IS", "RETURN", "SET", 
		"WHILE", "ASSIGN", "COLON", "COMMA", "DOT", "GENERIC_LEFT", "GENERIC_RIGHT", 
		"HASH", "QUESTION", "FLOAT_LITERAL", "INTEGER_LITERAL", "REGEX_LITERAL", 
		"STRING_LITERAL", "PREPROCESSOR", "ID", "OPERATOR", "NL", "WS", "BLOCK_COMMENT", 
		"LINE_COMMENT", "UNEXPECTED",
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
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.GENERIC_LEFT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.REGEX_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OPERATOR - 32)) | (1 << (XonParser.NL - 32)))) !== 0)) {
				{
				this.state = 29;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 26;
					this.definition();
					}
					break;

				case 2:
					{
					this.state = 27;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 28;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 33;
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
			this.state = 34;
			_localctx._modifier = this.match(XonParser.ID);
			this.state = 35;
			this.id();
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 36;
				this.generics();
				}
				break;
			}
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 39;
				this.methodParameters();
				}
				break;
			}
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 42;
				this.expr(0);
				}
				break;
			}
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 45;
				this.match(XonParser.NL);
				this.state = 46;
				this.match(XonParser.INDENT);
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 49;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IN:
					case XonParser.IS:
					case XonParser.ID:
						{
						this.state = 47;
						this.attribute();
						}
						break;
					case XonParser.NL:
						{
						this.state = 48;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 51;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.IN - 18)) | (1 << (XonParser.IS - 18)) | (1 << (XonParser.ID - 18)) | (1 << (XonParser.NL - 18)))) !== 0));
				this.state = 53;
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
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				_localctx._modifier = this.match(XonParser.ID);
				this.state = 57;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.IN - 18)) | (1 << (XonParser.IS - 18)) | (1 << (XonParser.ID - 18)) | (1 << (XonParser.OPERATOR - 18)))) !== 0))) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.GENERIC_LEFT) {
					{
					this.state = 58;
					this.generics();
					}
				}

				this.state = 61;
				this.methodParameters();
				this.state = 63;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 62;
					this.expr(0);
					}
					break;
				}
				this.state = 66;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 65;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 68;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.IN - 18)) | (1 << (XonParser.IS - 18)) | (1 << (XonParser.ID - 18)))) !== 0))) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 70;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 69;
					this.generics();
					}
					break;
				}
				this.state = 73;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 72;
					this.methodParameters();
					}
					break;
				}
				this.state = 76;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 75;
					this.expr(0);
					}
					break;
				}
				this.state = 79;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 78;
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
			this.state = 151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 83;
				this.match(XonParser.IMPORT);
				this.state = 84;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 97;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 85;
					this.match(XonParser.COLON);
					this.state = 86;
					(_localctx as ImportStatementContext)._expr = this.expr(0);
					(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
					this.state = 91;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 87;
							this.match(XonParser.COMMA);
							this.state = 88;
							(_localctx as ImportStatementContext)._expr = this.expr(0);
							(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
							}
							}
						}
						this.state = 93;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					}
					this.state = 95;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						this.state = 94;
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
				this.state = 99;
				this.match(XonParser.EXPORT);
				this.state = 100;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 101;
				this.match(XonParser.FOR);
				this.state = 109;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 102;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 103;
						this.match(XonParser.COMMA);
						this.state = 104;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 107;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 111;
				this.expr(0);
				this.state = 112;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 114;
				this.match(XonParser.WHILE);
				this.state = 115;
				this.expr(0);
				this.state = 116;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 118;
				this.match(XonParser.DO);
				this.state = 119;
				this.body();
				this.state = 120;
				this.match(XonParser.WHILE);
				this.state = 121;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 123;
				this.match(XonParser.IF);
				this.state = 124;
				this.expr(0);
				this.state = 125;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 128;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 126;
					this.match(XonParser.ELSE);
					this.state = 127;
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
				this.state = 130;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 131;
				this.match(XonParser.RETURN);
				this.state = 133;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 132;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 135;
				this.match(XonParser.ACTUAL);
				this.state = 136;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 137;
					this.match(XonParser.NL);
					}
					}
					this.state = 140;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 142;
				this.match(XonParser.EXPECT);
				this.state = 143;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 145;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 146;
				this.expr(0);
				this.state = 147;
				this.match(XonParser.ASSIGN);
				this.state = 148;
				this.expr(0);
				}
				break;

			case 12:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 150;
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
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 154;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 155;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.GENERIC_LEFT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.REGEX_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OPERATOR - 32)))) !== 0)) {
					{
					this.state = 156;
					this.arrayItem();
					this.state = 161;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 157;
							this.match(XonParser.COMMA);
							this.state = 158;
							this.arrayItem();
							}
							}
						}
						this.state = 163;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
					}
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 164;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 169;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 170;
				this.match(XonParser.OPEN_BRACE);
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.IN - 18)) | (1 << (XonParser.IS - 18)) | (1 << (XonParser.ID - 18)))) !== 0)) {
					{
					this.state = 171;
					this.attribute();
					this.state = 176;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 172;
							this.match(XonParser.COMMA);
							this.state = 173;
							this.attribute();
							}
							}
						}
						this.state = 178;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
					}
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 179;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 184;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 185;
				(_localctx as PrefixExpressionContext)._op = this.match(XonParser.OPERATOR);
				this.state = 186;
				this.expr(6);
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 187;
				this.literal();
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.GENERIC_LEFT) {
					{
					this.state = 188;
					this.generics();
					}
				}

				this.state = 191;
				this.methodParameters();
				this.state = 192;
				this.body();
				}
				break;

			case 7:
				{
				_localctx = new IndexerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.GENERIC_LEFT) {
					{
					this.state = 194;
					this.generics();
					}
				}

				this.state = 197;
				this.indexerParameters();
				this.state = 198;
				this.body();
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 200;
				this.match(XonParser.OPEN_PAREN);
				this.state = 201;
				this.expr(0);
				this.state = 202;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 250;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 248;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 206;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 207;
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
						this.state = 208;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 2:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 209;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 210;
						this.match(XonParser.OPEN_PAREN);
						this.state = 222;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.GENERIC_LEFT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.REGEX_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OPERATOR - 32)))) !== 0)) {
							{
							this.state = 211;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 216;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 212;
									this.match(XonParser.COMMA);
									this.state = 213;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 218;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
							}
							this.state = 220;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 219;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 224;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 3:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 225;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 226;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 238;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.GENERIC_LEFT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.REGEX_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OPERATOR - 32)))) !== 0)) {
							{
							this.state = 227;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 232;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 228;
									this.match(XonParser.COMMA);
									this.state = 229;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 234;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
							}
							this.state = 236;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 235;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 240;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 4:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 241;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 242;
						this.match(XonParser.QUESTION);
						}
						break;

					case 5:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 243;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 244;
						this.match(XonParser.DOT);
						this.state = 245;
						this.id();
						}
						break;

					case 6:
						{
						_localctx = new GenericsExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 246;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 247;
						this.generics();
						}
						break;
					}
					}
				}
				this.state = 252;
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
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 253;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 254;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 255;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 256;
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
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 259;
				this.match(XonParser.ASSIGN);
				this.state = 260;
				this.statement();
				}
				break;
			case XonParser.NL:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 261;
				this.match(XonParser.NL);
				this.state = 262;
				this.match(XonParser.INDENT);
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 265;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.BREAK:
					case XonParser.DO:
					case XonParser.EXPORT:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.IN:
					case XonParser.IS:
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
						this.state = 263;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 264;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 267;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.GENERIC_LEFT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.REGEX_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OPERATOR - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
				this.state = 269;
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
			this.state = 275;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 272;
				this.expr(0);
				this.state = 273;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 277;
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
			this.state = 279;
			this.id();
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 280;
				this.expr(0);
				this.state = 281;
				this.body();
				}
				break;

			case 2:
				{
				this.state = 283;
				this.expr(0);
				}
				break;

			case 3:
				{
				this.state = 284;
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
			this.state = 287;
			this.match(XonParser.OPEN_PAREN);
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.IN - 18)) | (1 << (XonParser.IS - 18)) | (1 << (XonParser.ID - 18)))) !== 0)) {
				{
				this.state = 288;
				this.parameter();
				this.state = 293;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 289;
						this.match(XonParser.COMMA);
						this.state = 290;
						this.parameter();
						}
						}
					}
					this.state = 295;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 296;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 301;
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
			this.state = 303;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.IN - 18)) | (1 << (XonParser.IS - 18)) | (1 << (XonParser.ID - 18)))) !== 0)) {
				{
				this.state = 304;
				this.parameter();
				this.state = 309;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 305;
						this.match(XonParser.COMMA);
						this.state = 306;
						this.parameter();
						}
						}
					}
					this.state = 311;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 312;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 317;
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			_localctx._name = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.IN - 18)) | (1 << (XonParser.IS - 18)) | (1 << (XonParser.ID - 18)))) !== 0))) {
				_localctx._name = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public generics(): GenericsContext {
		let _localctx: GenericsContext = new GenericsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_generics);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(XonParser.GENERIC_LEFT);
			this.state = 322;
			this.parameter();
			this.state = 327;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 323;
					this.match(XonParser.COMMA);
					this.state = 324;
					this.parameter();
					}
					}
				}
				this.state = 329;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			}
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 330;
				this.match(XonParser.COMMA);
				}
			}

			this.state = 333;
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
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03,\u0152\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02" +
		"\x03\x03\x03\x03\x03\x03\x05\x03(\n\x03\x03\x03\x05\x03+\n\x03\x03\x03" +
		"\x05\x03.\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x034\n\x03\r\x03\x0E" +
		"\x035\x03\x03\x05\x039\n\x03\x03\x04\x03\x04\x03\x04\x05\x04>\n\x04\x03" +
		"\x04\x03\x04\x05\x04B\n\x04\x03\x04\x05\x04E\n\x04\x03\x04\x03\x04\x05" +
		"\x04I\n\x04\x03\x04\x05\x04L\n\x04\x03\x04\x05\x04O\n\x04\x03\x04\x05" +
		"\x04R\n\x04\x05\x04T\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x07\x05\\\n\x05\f\x05\x0E\x05_\v\x05\x03\x05\x05\x05b\n\x05\x05\x05" +
		"d\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05l\n\x05" +
		"\x03\x05\x03\x05\x05\x05p\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\x83\n\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\x88\n\x05\x03\x05\x03\x05\x03\x05\x06\x05\x8D\n\x05\r\x05\x0E\x05" +
		"\x8E\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05\x9A\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x07\x06\xA2\n\x06\f\x06\x0E\x06\xA5\v\x06\x03\x06\x05\x06\xA8\n\x06\x05" +
		"\x06\xAA\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xB1\n\x06" +
		"\f\x06\x0E\x06\xB4\v\x06\x03\x06\x05\x06\xB7\n\x06\x05\x06\xB9\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xC0\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06\xC6\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\xCF\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xD9\n\x06\f\x06\x0E\x06\xDC\v" +
		"\x06\x03\x06\x05\x06\xDF\n\x06\x05\x06\xE1\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06\xE9\n\x06\f\x06\x0E\x06\xEC\v\x06\x03" +
		"\x06\x05\x06\xEF\n\x06\x05\x06\xF1\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xFB\n\x06\f\x06\x0E\x06\xFE\v" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0104\n\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x06\b\u010C\n\b\r\b\x0E\b\u010D\x03\b\x05\b\u0111" +
		"\n\b\x03\t\x03\t\x03\t\x05\t\u0116\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u0120\n\n\x03\v\x03\v\x03\v\x03\v\x07\v\u0126\n\v" +
		"\f\v\x0E\v\u0129\v\v\x03\v\x05\v\u012C\n\v\x05\v\u012E\n\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x03\f\x07\f\u0136\n\f\f\f\x0E\f\u0139\v\f\x03\f\x05" +
		"\f\u013C\n\f\x05\f\u013E\n\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u0148\n\x0E\f\x0E\x0E\x0E\u014B\v\x0E\x03\x0E\x05" +
		"\x0E\u014E\n\x0E\x03\x0E\x03\x0E\x03\x0E\x02\x02\x03\n\x0F\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x02\x05\x04\x02\x14\x15&\'\x04\x02\x14\x15&&\x03\x02" +
		"&\'\x02\u0195\x02!\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06S\x03\x02\x02" +
		"\x02\b\x99\x03\x02\x02\x02\n\xCE\x03\x02\x02\x02\f\u0103\x03\x02\x02\x02" +
		"\x0E\u0110\x03\x02\x02\x02\x10\u0115\x03\x02\x02\x02\x12\u0119\x03\x02" +
		"\x02\x02\x14\u0121\x03\x02\x02\x02\x16\u0131\x03\x02\x02\x02\x18\u0141" +
		"\x03\x02\x02\x02\x1A\u0143\x03\x02\x02\x02\x1C \x05\x04\x03\x02\x1D \x05" +
		"\b\x05\x02\x1E \x07(\x02\x02\x1F\x1C\x03\x02\x02\x02\x1F\x1D\x03\x02\x02" +
		"\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"" +
		"\x03\x02\x02\x02\"\x03\x03\x02\x02\x02#!\x03\x02\x02\x02$%\x07&\x02\x02" +
		"%\'\x05\x18\r\x02&(\x05\x1A\x0E\x02\'&\x03\x02\x02\x02\'(\x03\x02\x02" +
		"\x02(*\x03\x02\x02\x02)+\x05\x14\v\x02*)\x03\x02\x02\x02*+\x03\x02\x02" +
		"\x02+-\x03\x02\x02\x02,.\x05\n\x06\x02-,\x03\x02\x02\x02-.\x03\x02\x02" +
		"\x02.8\x03\x02\x02\x02/0\x07(\x02\x0203\x07\x03\x02\x0214\x05\x06\x04" +
		"\x0224\x07(\x02\x0231\x03\x02\x02\x0232\x03\x02\x02\x0245\x03\x02\x02" +
		"\x0253\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x0279\x07\x04\x02" +
		"\x028/\x03\x02\x02\x0289\x03\x02\x02\x029\x05\x03\x02\x02\x02:;\x07&\x02" +
		"\x02;=\t\x02\x02\x02<>\x05\x1A\x0E\x02=<\x03\x02\x02\x02=>\x03\x02\x02" +
		"\x02>?\x03\x02\x02\x02?A\x05\x14\v\x02@B\x05\n\x06\x02A@\x03\x02\x02\x02" +
		"AB\x03\x02\x02\x02BD\x03\x02\x02\x02CE\x05\x0E\b\x02DC\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02ET\x03\x02\x02\x02FH\t\x03\x02\x02GI\x05\x1A\x0E\x02" +
		"HG\x03\x02\x02\x02HI\x03\x02\x02\x02IK\x03\x02\x02\x02JL\x05\x14\v\x02" +
		"KJ\x03\x02\x02\x02KL\x03\x02\x02\x02LN\x03\x02\x02\x02MO\x05\n\x06\x02" +
		"NM\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PR\x05\x0E\b\x02" +
		"QP\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02S:\x03\x02\x02\x02" +
		"SF\x03\x02\x02\x02T\x07\x03\x02\x02\x02UV\x07\x13\x02\x02Vc\x05\n\x06" +
		"\x02WX\x07\x1A\x02\x02X]\x05\n\x06\x02YZ\x07\x1B\x02\x02Z\\\x05\n\x06" +
		"\x02[Y\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02" +
		"\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02`b\x07\x1B\x02\x02a`\x03\x02" +
		"\x02\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02cW\x03\x02\x02\x02cd\x03\x02" +
		"\x02\x02d\x9A\x03\x02\x02\x02ef\x07\x10\x02\x02f\x9A\x05\n\x06\x02go\x07" +
		"\x11\x02\x02hk\x05\x12\n\x02ij\x07\x1B\x02\x02jl\x05\x12\n\x02ki\x03\x02" +
		"\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x07\x14\x02\x02np\x03\x02" +
		"\x02\x02oh\x03\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x05\n" +
		"\x06\x02rs\x05\x0E\b\x02s\x9A\x03\x02\x02\x02tu\x07\x18\x02\x02uv\x05" +
		"\n\x06\x02vw\x05\x0E\b\x02w\x9A\x03\x02\x02\x02xy\x07\r\x02\x02yz\x05" +
		"\x0E\b\x02z{\x07\x18\x02\x02{|\x05\n\x06\x02|\x9A\x03\x02\x02\x02}~\x07" +
		"\x12\x02\x02~\x7F\x05\n\x06\x02\x7F\x82\x05\x0E\b\x02\x80\x81\x07\x0E" +
		"\x02\x02\x81\x83\x05\x0E\b\x02\x82\x80\x03\x02\x02\x02\x82\x83\x03\x02" +
		"\x02\x02\x83\x9A\x03\x02\x02\x02\x84\x9A\x07\f\x02\x02\x85\x87\x07\x16" +
		"\x02\x02\x86\x88\x05\n\x06\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02" +
		"\x02\x02\x88\x9A\x03\x02\x02\x02\x89\x8A\x07\v\x02\x02\x8A\x8C\x05\n\x06" +
		"\x02\x8B\x8D\x07(\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02" +
		"\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03\x02\x02" +
		"\x02\x90\x91\x07\x0F\x02\x02\x91\x92\x05\n\x06\x02\x92\x9A\x03\x02\x02" +
		"\x02\x93\x9A\x07%\x02\x02\x94\x95\x05\n\x06\x02\x95\x96\x07\x19\x02\x02" +
		"\x96\x97\x05\n\x06\x02\x97\x9A\x03\x02\x02\x02\x98\x9A\x05\n\x06\x02\x99" +
		"U\x03\x02\x02\x02\x99e\x03\x02\x02\x02\x99g\x03\x02\x02\x02\x99t\x03\x02" +
		"\x02\x02\x99x\x03\x02\x02\x02\x99}\x03\x02\x02\x02\x99\x84\x03\x02\x02" +
		"\x02\x99\x85\x03\x02\x02\x02\x99\x89\x03\x02\x02\x02\x99\x93\x03\x02\x02" +
		"\x02\x99\x94\x03\x02\x02\x02\x99\x98\x03\x02\x02\x02\x9A\t\x03\x02\x02" +
		"\x02\x9B\x9C\b\x06\x01\x02\x9C\xCF\x05\x18\r\x02\x9D\xA9\x07\x05\x02\x02" +
		"\x9E\xA3\x05\x10\t\x02\x9F\xA0\x07\x1B\x02\x02\xA0\xA2\x05\x10\t\x02\xA1" +
		"\x9F\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3" +
		"\xA4\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6" +
		"\xA8\x07\x1B\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8" +
		"\xAA\x03\x02\x02\x02\xA9\x9E\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA" +
		"\xAB\x03\x02\x02\x02\xAB\xCF\x07\x06\x02\x02\xAC\xB8\x07\t\x02\x02\xAD" +
		"\xB2\x05\x06\x04\x02\xAE\xAF\x07\x1B\x02\x02\xAF\xB1\x05\x06\x04\x02\xB0" +
		"\xAE\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2" +
		"\xB3\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5" +
		"\xB7\x07\x1B\x02\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7" +
		"\xB9\x03\x02\x02\x02\xB8\xAD\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9" +
		"\xBA\x03\x02\x02\x02\xBA\xCF\x07\n\x02\x02\xBB\xBC\x07\'\x02\x02\xBC\xCF" +
		"\x05\n\x06\b\xBD\xCF\x05\f\x07\x02\xBE\xC0\x05\x1A\x0E\x02\xBF\xBE\x03" +
		"\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x05" +
		"\x14\v\x02\xC2\xC3\x05\x0E\b\x02\xC3\xCF\x03\x02\x02\x02\xC4\xC6\x05\x1A" +
		"\x0E\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02" +
		"\x02\x02\xC7\xC8\x05\x16\f\x02\xC8\xC9\x05\x0E\b\x02\xC9\xCF\x03\x02\x02" +
		"\x02\xCA\xCB\x07\x07\x02\x02\xCB\xCC\x05\n\x06\x02\xCC\xCD\x07\b\x02\x02" +
		"\xCD\xCF\x03\x02\x02\x02\xCE\x9B\x03\x02\x02\x02\xCE\x9D\x03\x02\x02\x02" +
		"\xCE\xAC\x03\x02\x02\x02\xCE\xBB\x03\x02\x02\x02\xCE\xBD\x03\x02\x02\x02" +
		"\xCE\xBF\x03\x02\x02\x02\xCE\xC5\x03\x02\x02\x02\xCE\xCA\x03\x02\x02\x02" +
		"\xCF\xFC\x03\x02\x02\x02\xD0\xD1\f\x07\x02\x02\xD1\xD2\t\x04\x02\x02\xD2" +
		"\xFB\x05\n\x06\b\xD3\xD4\f\r\x02\x02\xD4\xE0\x07\x07\x02\x02\xD5\xDA\x05" +
		"\n\x06\x02\xD6\xD7\x07\x1B\x02\x02\xD7\xD9\x05\n\x06\x02\xD8\xD6\x03\x02" +
		"\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02" +
		"\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDF\x07\x1B" +
		"\x02\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1\x03\x02" +
		"\x02\x02\xE0\xD5\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02" +
		"\x02\x02\xE2\xFB\x07\b\x02\x02\xE3\xE4\f\f\x02\x02\xE4\xF0\x07\x05\x02" +
		"\x02\xE5\xEA\x05\n\x06\x02\xE6\xE7\x07\x1B\x02\x02\xE7\xE9\x05\n\x06\x02" +
		"\xE8\xE6\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02" +
		"\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02" +
		"\xED\xEF\x07\x1B\x02\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02" +
		"\xEF\xF1\x03\x02\x02\x02\xF0\xE5\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02" +
		"\xF1\xF2\x03\x02\x02\x02\xF2\xFB\x07\x06\x02\x02\xF3\xF4\f\v\x02\x02\xF4" +
		"\xFB\x07 \x02\x02\xF5\xF6\f\n\x02\x02\xF6\xF7\x07\x1C\x02\x02\xF7\xFB" +
		"\x05\x18\r\x02\xF8\xF9\f\t\x02\x02\xF9\xFB\x05\x1A\x0E\x02\xFA\xD0\x03" +
		"\x02\x02\x02\xFA\xD3\x03\x02\x02\x02\xFA\xE3\x03\x02\x02\x02\xFA\xF3\x03" +
		"\x02\x02\x02\xFA\xF5\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03" +
		"\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\v\x03" +
		"\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0104\x07\"\x02\x02\u0100\u0104" +
		"\x07!\x02\x02\u0101\u0104\x07$\x02\x02\u0102\u0104\x07#\x02\x02\u0103" +
		"\xFF\x03\x02\x02\x02\u0103\u0100\x03\x02\x02\x02\u0103\u0101\x03\x02\x02" +
		"\x02\u0103\u0102\x03\x02\x02\x02\u0104\r\x03\x02\x02\x02\u0105\u0106\x07" +
		"\x19\x02\x02\u0106\u0111\x05\b\x05\x02\u0107\u0108\x07(\x02\x02\u0108" +
		"\u010B\x07\x03\x02\x02\u0109\u010C\x05\b\x05\x02\u010A\u010C\x07(\x02" +
		"\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u010D" +
		"\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02" +
		"\u010E\u010F\x03\x02\x02\x02\u010F\u0111\x07\x04\x02\x02\u0110\u0105\x03" +
		"\x02\x02\x02\u0110\u0107\x03\x02\x02\x02\u0111\x0F\x03\x02\x02\x02\u0112" +
		"\u0113\x05\n\x06\x02\u0113\u0114\x07\x1A\x02\x02\u0114\u0116\x03\x02\x02" +
		"\x02\u0115\u0112\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117" +
		"\x03\x02\x02\x02\u0117\u0118\x05\n\x06\x02\u0118\x11\x03\x02\x02\x02\u0119" +
		"\u011F\x05\x18\r\x02\u011A\u011B\x05\n\x06\x02\u011B\u011C\x05\x0E\b\x02" +
		"\u011C\u0120\x03\x02\x02\x02\u011D\u0120\x05\n\x06\x02\u011E\u0120\x05" +
		"\x0E\b\x02\u011F\u011A\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F" +
		"\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\x13\x03\x02\x02" +
		"\x02\u0121\u012D\x07\x07\x02\x02\u0122\u0127\x05\x12\n\x02\u0123\u0124" +
		"\x07\x1B\x02\x02\u0124\u0126\x05\x12\n\x02\u0125\u0123\x03\x02\x02\x02" +
		"\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03" +
		"\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A" +
		"\u012C\x07\x1B\x02\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02" +
		"\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D\u0122\x03\x02\x02\x02\u012D" +
		"\u012E\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0130\x07\b\x02" +
		"\x02\u0130\x15\x03\x02\x02\x02\u0131\u013D\x07\x05\x02\x02\u0132\u0137" +
		"\x05\x12\n\x02\u0133\u0134\x07\x1B\x02\x02\u0134\u0136\x05\x12\n\x02\u0135" +
		"\u0133\x03\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02" +
		"\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139" +
		"\u0137\x03\x02\x02\x02\u013A\u013C\x07\x1B\x02\x02\u013B\u013A\x03\x02" +
		"\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D" +
		"\u0132\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x03\x02" +
		"\x02\x02\u013F\u0140\x07\x06\x02\x02\u0140\x17\x03\x02\x02\x02\u0141\u0142" +
		"\t\x03\x02\x02\u0142\x19\x03\x02\x02\x02\u0143\u0144\x07\x1D\x02\x02\u0144" +
		"\u0149\x05\x12\n\x02\u0145\u0146\x07\x1B\x02\x02\u0146\u0148\x05\x12\n" +
		"\x02\u0147\u0145\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147" +
		"\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02" +
		"\u014B\u0149\x03\x02\x02\x02\u014C\u014E\x07\x1B\x02\x02\u014D\u014C\x03" +
		"\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F" +
		"\u0150\x07\x1E\x02\x02\u0150\x1B\x03\x02\x02\x02:\x1F!\'*-358=ADHKNQS" +
		"]acko\x82\x87\x8E\x99\xA3\xA7\xA9\xB2\xB6\xB8\xBF\xC5\xCE\xDA\xDE\xE0" +
		"\xEA\xEE\xF0\xFA\xFC\u0103\u010B\u010D\u0110\u0115\u011F\u0127\u012B\u012D" +
		"\u0137\u013B\u013D\u0149\u014D";
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
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
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
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
export class PreprocessorStatementContext extends StatementContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
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
export class IdExpressionContext extends ExprContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
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
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
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
export class LiteralExpressionContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
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


export class IdContext extends ParserRuleContext {
	public _name!: Token;
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
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


