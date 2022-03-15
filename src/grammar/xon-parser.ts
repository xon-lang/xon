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
	public static readonly AND = 21;
	public static readonly AS = 22;
	public static readonly IS_NOT = 23;
	public static readonly IS = 24;
	public static readonly NOT = 25;
	public static readonly OR = 26;
	public static readonly ASSIGN = 27;
	public static readonly COLON = 28;
	public static readonly COMMA = 29;
	public static readonly DOT = 30;
	public static readonly GENERIC_LEFT = 31;
	public static readonly GENERIC_RIGHT = 32;
	public static readonly LAMBDA = 33;
	public static readonly QUESTION = 34;
	public static readonly FLOAT_LITERAL = 35;
	public static readonly INTEGER_LITERAL = 36;
	public static readonly STRING_LITERAL = 37;
	public static readonly PREPROCESSOR = 38;
	public static readonly ID = 39;
	public static readonly OPERATOR = 40;
	public static readonly NL = 41;
	public static readonly WS = 42;
	public static readonly BLOCK_COMMENT = 43;
	public static readonly LINE_COMMENT = 44;
	public static readonly UNEXPECTED = 45;
	public static readonly LINE_JOINING = 46;
	public static readonly RULE_source = 0;
	public static readonly RULE_definition = 1;
	public static readonly RULE_attribute = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_expr = 4;
	public static readonly RULE_literal = 5;
	public static readonly RULE_body = 6;
	public static readonly RULE_parameter = 7;
	public static readonly RULE_parameters = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "definition", "attribute", "statement", "expr", "literal", "body", 
		"parameter", "parameters",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'import'", "'return'", "'while'", "'and'", "'as'", "'is not'", 
		"'is'", "'not'", "'or'", "'='", "':'", "','", "'.'", "'<|'", "'|>'", "'=>'", 
		"'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "RETURN", "WHILE", 
		"AND", "AS", "IS_NOT", "IS", "NOT", "OR", "ASSIGN", "COLON", "COMMA", 
		"DOT", "GENERIC_LEFT", "GENERIC_RIGHT", "LAMBDA", "QUESTION", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", "OPERATOR", 
		"NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED", "LINE_JOINING",
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
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)) | (1 << (XonParser.NL - 35)))) !== 0)) {
				{
				this.state = 22;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 18;
					this.definition();
					}
					break;

				case 2:
					{
					this.state = 19;
					this.attribute();
					}
					break;

				case 3:
					{
					this.state = 20;
					this.statement();
					}
					break;

				case 4:
					{
					this.state = 21;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 26;
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
			this.state = 27;
			_localctx._modifier = this.match(XonParser.ID);
			this.state = 28;
			_localctx._name = this.match(XonParser.ID);
			this.state = 30;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 29;
				this.parameters();
				}
				break;
			}
			this.state = 33;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 32;
				this.expr(0);
				}
				break;
			}
			this.state = 44;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 35;
				this.match(XonParser.NL);
				this.state = 36;
				this.match(XonParser.INDENT);
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 39;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.ID:
						{
						this.state = 37;
						this.attribute();
						}
						break;
					case XonParser.NL:
						{
						this.state = 38;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 41;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.ID || _la === XonParser.NL);
				this.state = 43;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			_localctx._name = this.match(XonParser.ID);
			this.state = 48;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 47;
				this.parameters();
				}
				break;
			}
			this.state = 51;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 50;
				this.expr(0);
				}
				break;
			}
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 53;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.match(XonParser.IMPORT);
				this.state = 57;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 58;
					this.match(XonParser.COLON);
					this.state = 59;
					(_localctx as ImportStatementContext)._expr = this.expr(0);
					(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
					this.state = 64;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 60;
							this.match(XonParser.COMMA);
							this.state = 61;
							(_localctx as ImportStatementContext)._expr = this.expr(0);
							(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
							}
							}
						}
						this.state = 66;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
					}
					this.state = 68;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 67;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.match(XonParser.EXPORT);
				this.state = 73;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 74;
				this.match(XonParser.FOR);
				this.state = 82;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 75;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 76;
						this.match(XonParser.COMMA);
						this.state = 77;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 80;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 84;
				this.expr(0);
				this.state = 85;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 87;
				this.match(XonParser.WHILE);
				this.state = 88;
				this.expr(0);
				this.state = 89;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 91;
				this.match(XonParser.DO);
				this.state = 92;
				this.body();
				this.state = 93;
				this.match(XonParser.WHILE);
				this.state = 94;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 96;
				this.match(XonParser.IF);
				this.state = 97;
				this.expr(0);
				this.state = 98;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 99;
					this.match(XonParser.ELSE);
					this.state = 100;
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
				this.state = 103;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 104;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 105;
				this.match(XonParser.RETURN);
				this.state = 107;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 106;
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
				this.state = 109;
				this.match(XonParser.ACTUAL);
				this.state = 110;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 111;
					this.match(XonParser.NL);
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 116;
				this.match(XonParser.EXPECT);
				this.state = 117;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 119;
				this.expr(0);
				this.state = 120;
				this.body();
				}
				break;

			case 12:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 122;
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
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 126;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 127;
				this.match(XonParser.OPEN_PAREN);
				this.state = 128;
				this.expr(0);
				this.state = 129;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 3:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 131;
				this.parameters();
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 132;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 133;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.NOT || _la === XonParser.OPERATOR)) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 134;
				this.expr(4);
				}
				break;

			case 6:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 135;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.ID);
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 136;
				this.parameters();
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.NOT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)))) !== 0)) {
					{
					this.state = 137;
					(_localctx as MethodExpressionContext)._type = this.expr(0);
					}
				}

				this.state = 140;
				this.match(XonParser.LAMBDA);
				this.state = 141;
				(_localctx as MethodExpressionContext)._value = this.expr(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 155;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 145;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 146;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.AND - 21)) | (1 << (XonParser.AS - 21)) | (1 << (XonParser.IS_NOT - 21)) | (1 << (XonParser.IS - 21)) | (1 << (XonParser.OR - 21)) | (1 << (XonParser.OPERATOR - 21)))) !== 0))) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 147;
						(_localctx as InfixExpressionContext)._right = this.expr(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 148;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 149;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 150;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 151;
						this.match(XonParser.DOT);
						this.state = 152;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.ID);
						}
						break;

					case 4:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 153;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 154;
						this.parameters();
						}
						break;
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
			this.state = 163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 160;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 161;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 162;
				this.match(XonParser.STRING_LITERAL);
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
			this.state = 176;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
			case XonParser.COLON:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 165;
				_la = this._input.LA(1);
				if (!(_la === XonParser.ASSIGN || _la === XonParser.COLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 166;
				this.statement();
				}
				break;
			case XonParser.NL:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.match(XonParser.NL);
				this.state = 168;
				this.match(XonParser.INDENT);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 171;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
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
					case XonParser.NOT:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
					case XonParser.OPERATOR:
						{
						this.state = 169;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 170;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)) | (1 << (XonParser.NL - 35)))) !== 0));
				this.state = 175;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			_localctx._name = this.expr(0);
			this.state = 180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 179;
				_localctx._type = this.expr(0);
				}
				break;
			}
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.ASSIGN) {
				{
				this.state = 182;
				this.match(XonParser.ASSIGN);
				this.state = 183;
				_localctx._value = this.expr(0);
				}
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.NOT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.FLOAT_LITERAL - 35)) | (1 << (XonParser.INTEGER_LITERAL - 35)) | (1 << (XonParser.STRING_LITERAL - 35)) | (1 << (XonParser.PREPROCESSOR - 35)) | (1 << (XonParser.ID - 35)) | (1 << (XonParser.OPERATOR - 35)))) !== 0)) {
				{
				this.state = 187;
				this.parameter();
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 188;
						this.match(XonParser.COMMA);
						this.state = 189;
						this.parameter();
						}
						}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 195;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 200;
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
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\xCD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x02\x07" +
		"\x02\x19\n\x02\f\x02\x0E\x02\x1C\v\x02\x03\x03\x03\x03\x03\x03\x05\x03" +
		"!\n\x03\x03\x03\x05\x03$\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03" +
		"*\n\x03\r\x03\x0E\x03+\x03\x03\x05\x03/\n\x03\x03\x04\x03\x04\x05\x04" +
		"3\n\x04\x03\x04\x05\x046\n\x04\x03\x04\x05\x049\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05A\n\x05\f\x05\x0E\x05D\v\x05\x03" +
		"\x05\x05\x05G\n\x05\x05\x05I\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05Q\n\x05\x03\x05\x03\x05\x05\x05U\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05h\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05n\n\x05\x03\x05\x03\x05\x03\x05\x06" +
		"\x05s\n\x05\r\x05\x0E\x05t\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05~\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x8D" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\x92\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x9E\n" +
		"\x06\f\x06\x0E\x06\xA1\v\x06\x03\x07\x03\x07\x03\x07\x05\x07\xA6\n\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x06\b\xAE\n\b\r\b\x0E\b\xAF\x03\b" +
		"\x05\b\xB3\n\b\x03\t\x03\t\x05\t\xB7\n\t\x03\t\x03\t\x05\t\xBB\n\t\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\xC1\n\n\f\n\x0E\n\xC4\v\n\x03\n\x05\n\xC7\n" +
		"\n\x05\n\xC9\n\n\x03\n\x03\n\x03\n\x02\x02\x03\n\v\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x05\x04\x02\x1B\x1B" +
		"**\x05\x02\x17\x1A\x1C\x1C**\x03\x02\x1D\x1E\x02\xF7\x02\x1A\x03\x02\x02" +
		"\x02\x04\x1D\x03\x02\x02\x02\x060\x03\x02\x02\x02\b}\x03\x02\x02\x02\n" +
		"\x91\x03\x02\x02\x02\f\xA5\x03\x02\x02\x02\x0E\xB2\x03\x02\x02\x02\x10" +
		"\xB4\x03\x02\x02\x02\x12\xBC\x03\x02\x02\x02\x14\x19\x05\x04\x03\x02\x15" +
		"\x19\x05\x06\x04\x02\x16\x19\x05\b\x05\x02\x17\x19\x07+\x02\x02\x18\x14" +
		"\x03\x02\x02\x02\x18\x15\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x17" +
		"\x03\x02\x02\x02\x19\x1C\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B" +
		"\x03\x02\x02\x02\x1B\x03\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1D\x1E" +
		"\x07)\x02\x02\x1E \x07)\x02\x02\x1F!\x05\x12\n\x02 \x1F\x03\x02\x02\x02" +
		" !\x03\x02\x02\x02!#\x03\x02\x02\x02\"$\x05\n\x06\x02#\"\x03\x02\x02\x02" +
		"#$\x03\x02\x02\x02$.\x03\x02\x02\x02%&\x07+\x02\x02&)\x07\x03\x02\x02" +
		"\'*\x05\x06\x04\x02(*\x07+\x02\x02)\'\x03\x02\x02\x02)(\x03\x02\x02\x02" +
		"*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-/\x07\x04\x02\x02.%\x03\x02\x02\x02./\x03\x02\x02\x02/\x05\x03\x02\x02" +
		"\x0202\x07)\x02\x0213\x05\x12\n\x0221\x03\x02\x02\x0223\x03\x02\x02\x02" +
		"35\x03\x02\x02\x0246\x05\n\x06\x0254\x03\x02\x02\x0256\x03\x02\x02\x02" +
		"68\x03\x02\x02\x0279\x05\x0E\b\x0287\x03\x02\x02\x0289\x03\x02\x02\x02" +
		"9\x07\x03\x02\x02\x02:;\x07\x14\x02\x02;H\x05\n\x06\x02<=\x07\x1E\x02" +
		"\x02=B\x05\n\x06\x02>?\x07\x1F\x02\x02?A\x05\n\x06\x02@>\x03\x02\x02\x02" +
		"AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02CF\x03\x02\x02\x02" +
		"DB\x03\x02\x02\x02EG\x07\x1F\x02\x02FE\x03\x02\x02\x02FG\x03\x02\x02\x02" +
		"GI\x03\x02\x02\x02H<\x03\x02\x02\x02HI\x03\x02\x02\x02I~\x03\x02\x02\x02" +
		"JK\x07\x11\x02\x02K~\x05\n\x06\x02LT\x07\x12\x02\x02MP\x05\x10\t\x02N" +
		"O\x07\x1F\x02\x02OQ\x05\x10\t\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02" +
		"QR\x03\x02\x02\x02RS\x07)\x02\x02SU\x03\x02\x02\x02TM\x03\x02\x02\x02" +
		"TU\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x05\n\x06\x02WX\x05\x0E\b\x02X" +
		"~\x03\x02\x02\x02YZ\x07\x16\x02\x02Z[\x05\n\x06\x02[\\\x05\x0E\b\x02\\" +
		"~\x03\x02\x02\x02]^\x07\x0E\x02\x02^_\x05\x0E\b\x02_`\x07\x16\x02\x02" +
		"`a\x05\n\x06\x02a~\x03\x02\x02\x02bc\x07\x13\x02\x02cd\x05\n\x06\x02d" +
		"g\x05\x0E\b\x02ef\x07\x0F\x02\x02fh\x05\x0E\b\x02ge\x03\x02\x02\x02gh" +
		"\x03\x02\x02\x02h~\x03\x02\x02\x02i~\x07\f\x02\x02j~\x07\r\x02\x02km\x07" +
		"\x15\x02\x02ln\x05\n\x06\x02ml\x03\x02\x02\x02mn\x03\x02\x02\x02n~\x03" +
		"\x02\x02\x02op\x07\v\x02\x02pr\x05\n\x06\x02qs\x07+\x02\x02rq\x03\x02" +
		"\x02\x02st\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02" +
		"\x02\x02vw\x07\x10\x02\x02wx\x05\n\x06\x02x~\x03\x02\x02\x02yz\x05\n\x06" +
		"\x02z{\x05\x0E\b\x02{~\x03\x02\x02\x02|~\x05\n\x06\x02}:\x03\x02\x02\x02" +
		"}J\x03\x02\x02\x02}L\x03\x02\x02\x02}Y\x03\x02\x02\x02}]\x03\x02\x02\x02" +
		"}b\x03\x02\x02\x02}i\x03\x02\x02\x02}j\x03\x02\x02\x02}k\x03\x02\x02\x02" +
		"}o\x03\x02\x02\x02}y\x03\x02\x02\x02}|\x03\x02\x02\x02~\t\x03\x02\x02" +
		"\x02\x7F\x80\b\x06\x01\x02\x80\x92\x07(\x02\x02\x81\x82\x07\x07\x02\x02" +
		"\x82\x83\x05\n\x06\x02\x83\x84\x07\b\x02\x02\x84\x92\x03\x02\x02\x02\x85" +
		"\x92\x05\x12\n\x02\x86\x92\x05\f\x07\x02\x87\x88\t\x02\x02\x02\x88\x92" +
		"\x05\n\x06\x06\x89\x92\x07)\x02\x02\x8A\x8C\x05\x12\n\x02\x8B\x8D\x05" +
		"\n\x06\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03" +
		"\x02\x02\x02\x8E\x8F\x07#\x02\x02\x8F\x90\x05\n\x06\x03\x90\x92\x03\x02" +
		"\x02\x02\x91\x7F\x03\x02\x02\x02\x91\x81\x03\x02\x02\x02\x91\x85\x03\x02" +
		"\x02\x02\x91\x86\x03\x02\x02\x02\x91\x87\x03\x02\x02\x02\x91\x89\x03\x02" +
		"\x02\x02\x91\x8A\x03\x02\x02\x02\x92\x9F\x03\x02\x02\x02\x93\x94\f\x05" +
		"\x02\x02\x94\x95\t\x03\x02\x02\x95\x9E\x05\n\x06\x06\x96\x97\f\t\x02\x02" +
		"\x97\x9E\x07$\x02\x02\x98\x99\f\b\x02\x02\x99\x9A\x07 \x02\x02\x9A\x9E" +
		"\x07)\x02\x02\x9B\x9C\f\x07\x02\x02\x9C\x9E\x05\x12\n\x02\x9D\x93\x03" +
		"\x02\x02\x02\x9D\x96\x03\x02\x02\x02\x9D\x98\x03\x02\x02\x02\x9D\x9B\x03" +
		"\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03" +
		"\x02\x02\x02\xA0\v\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA6\x07" +
		"&\x02\x02\xA3\xA6\x07%\x02\x02\xA4\xA6\x07\'\x02\x02\xA5\xA2\x03\x02\x02" +
		"\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\r\x03\x02\x02" +
		"\x02\xA7\xA8\t\x04\x02\x02\xA8\xB3\x05\b\x05\x02\xA9\xAA\x07+\x02\x02" +
		"\xAA\xAD\x07\x03\x02\x02\xAB\xAE\x05\b\x05\x02\xAC\xAE\x07+\x02\x02\xAD" +
		"\xAB\x03\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF" +
		"\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1" +
		"\xB3\x07\x04\x02\x02\xB2\xA7\x03\x02\x02\x02\xB2\xA9\x03\x02\x02\x02\xB3" +
		"\x0F\x03\x02\x02\x02\xB4\xB6\x05\n\x06\x02\xB5\xB7\x05\n\x06\x02\xB6\xB5" +
		"\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB9" +
		"\x07\x1D\x02\x02\xB9\xBB\x05\n\x06\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB" +
		"\x03\x02\x02\x02\xBB\x11\x03\x02\x02\x02\xBC\xC8\x07\x05\x02\x02\xBD\xC2" +
		"\x05\x10\t\x02\xBE\xBF\x07\x1F\x02\x02\xBF\xC1\x05\x10\t\x02\xC0\xBE\x03" +
		"\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03" +
		"\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC7\x07" +
		"\x1F\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03" +
		"\x02\x02\x02\xC8\xBD\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03" +
		"\x02\x02\x02\xCA\xCB\x07\x06\x02\x02\xCB\x13\x03\x02\x02\x02\"\x18\x1A" +
		" #)+.258BFHPTgmt}\x8C\x91\x9D\x9F\xA5\xAD\xAF\xB2\xB6\xBA\xC2\xC6\xC8";
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
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
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
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
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
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
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
export class GroupExpressionContext extends ExprContext {
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
export class ArrayExpressionContext extends ExprContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
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
export class InvokeExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
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
	public NOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPERATOR, 0); }
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public IS_NOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS_NOT, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(XonParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OR, 0); }
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
	public _type!: ExprContext;
	public _value!: ExprContext;
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public LAMBDA(): TerminalNode { return this.getToken(XonParser.LAMBDA, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
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
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
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


export class ParameterContext extends ParserRuleContext {
	public _name!: ExprContext;
	public _type!: ExprContext;
	public _value!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ParametersContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_parameters; }
}


