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
	public static readonly RETURN = 18;
	public static readonly WHILE = 19;
	public static readonly ASSIGN = 20;
	public static readonly COMMA = 21;
	public static readonly META = 22;
	public static readonly COLON = 23;
	public static readonly QUESTION = 24;
	public static readonly DOT = 25;
	public static readonly LAMBDA = 26;
	public static readonly FLOAT_LITERAL = 27;
	public static readonly INTEGER_LITERAL = 28;
	public static readonly STRING_LITERAL = 29;
	public static readonly PREPROCESSOR = 30;
	public static readonly ID = 31;
	public static readonly OP = 32;
	public static readonly NL = 33;
	public static readonly LINE_COMMENT = 34;
	public static readonly WS = 35;
	public static readonly BLOCK_COMMENT = 36;
	public static readonly LINE_JOINING = 37;
	public static readonly UNEXPECTED = 38;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_declarations = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_valueBody = 6;
	public static readonly RULE_valueType = 7;
	public static readonly RULE_arguments = 8;
	public static readonly RULE_argument = 9;
	public static readonly RULE_body = 10;
	public static readonly RULE_open = 11;
	public static readonly RULE_close = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expression", "literal", "declarations", "declaration", 
		"valueBody", "valueType", "arguments", "argument", "body", "open", "close",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'return'", "'while'", "'='", "','", "'::'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "RETURN", "WHILE", "ASSIGN", 
		"COMMA", "META", "COLON", "QUESTION", "DOT", "LAMBDA", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", "OP", "NL", 
		"LINE_COMMENT", "WS", "BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED",
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
			let _alt: number;
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 26;
				this.match(XonParser.NL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 27;
					this.match(XonParser.NL);
					}
				}

				this.state = 35;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 30;
						this.statement();
						this.state = 31;
						_localctx._NL = this.match(XonParser.NL);
						_localctx._nl.push(_localctx._NL);
						}
						}
					}
					this.state = 37;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				this.state = 38;
				this.statement();
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.NL) {
					{
					this.state = 39;
					this.match(XonParser.NL);
					}
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
		this.enterRule(_localctx, 2, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new CommentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				(_localctx as CommentStatementContext)._value = this.match(XonParser.LINE_COMMENT);
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.match(XonParser.EXPORT);
				this.state = 46;
				(_localctx as ExportStatementContext)._path = this.expression(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 47;
				this.match(XonParser.FOR);
				this.state = 52;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 49;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						this.state = 48;
						this.declaration();
						}
						break;
					}
					this.state = 51;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 54;
				this.expression(0);
				this.state = 55;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 57;
				this.match(XonParser.WHILE);
				this.state = 58;
				this.expression(0);
				this.state = 59;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 61;
				this.match(XonParser.DO);
				this.state = 62;
				this.body();
				this.state = 63;
				this.match(XonParser.WHILE);
				this.state = 64;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 66;
				this.match(XonParser.IF);
				this.state = 67;
				this.expression(0);
				this.state = 68;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 69;
						this.match(XonParser.NL);
						}
						}
					}
					this.state = 74;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 75;
					this.match(XonParser.ELSE);
					this.state = 76;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
				}

				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 79;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 80;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 81;
				this.match(XonParser.RETURN);
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.LAMBDA - 3)) | (1 << (XonParser.FLOAT_LITERAL - 3)) | (1 << (XonParser.INTEGER_LITERAL - 3)) | (1 << (XonParser.STRING_LITERAL - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OP - 3)))) !== 0)) {
					{
					this.state = 82;
					this.expression(0);
					}
				}

				}
				break;

			case 10:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 85;
				this.match(XonParser.ACTUAL);
				this.state = 86;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 87;
					this.match(XonParser.NL);
					}
					}
					this.state = 92;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 93;
				this.match(XonParser.EXPECT);
				this.state = 94;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 11:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 96;
				this.expression(0);
				}
				break;

			case 12:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 97;
				this.declaration();
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 101;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 102;
				this.match(XonParser.OPEN_PAREN);
				this.state = 103;
				this.expression(0);
				this.state = 104;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 3:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 106;
				this.arguments();
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 107;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 108;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 109;
				(_localctx as PrefixExpressionContext)._name = this.match(XonParser.OP);
				this.state = 110;
				this.expression(2);
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0)) {
					{
					{
					this.state = 111;
					this.declarations();
					}
					}
					this.state = 116;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 117;
				this.match(XonParser.LAMBDA);
				this.state = 118;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 138;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 136;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 121;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 122;
						(_localctx as InfixExpressionContext)._name = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.ID || _la === XonParser.OP)) {
							(_localctx as InfixExpressionContext)._name = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 123;
						(_localctx as InfixExpressionContext)._right = this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 124;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 125;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 126;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 127;
						this.match(XonParser.DOT);
						this.state = 128;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.ID);
						}
						break;

					case 4:
						{
						_localctx = new MetaExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 129;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 130;
						this.match(XonParser.META);
						this.state = 132;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
						case 1:
							{
							this.state = 131;
							(_localctx as MetaExpressionContext)._name = this.match(XonParser.ID);
							}
							break;
						}
						}
						break;

					case 5:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 134;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 135;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
		this.enterRule(_localctx, 6, XonParser.RULE_literal);
		try {
			this.state = 144;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 141;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 142;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 143;
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
	public declarations(): DeclarationsContext {
		let _localctx: DeclarationsContext = new DeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_declarations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.open();
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OP - 3)))) !== 0)) {
				{
				this.state = 147;
				this.declaration();
				this.state = 152;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 148;
						this.match(XonParser.COMMA);
						this.state = 149;
						this.declaration();
						}
						}
					}
					this.state = 154;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 155;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 160;
			this.close();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 185;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.OPEN_BRACKET:
			case XonParser.OPEN_PAREN:
			case XonParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 162;
				_localctx._destructure = this.declarations();
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 163;
					this.valueType();
					}
				}

				this.state = 167;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 166;
					this.valueBody();
					}
					break;
				}
				}
				break;
			case XonParser.ID:
			case XonParser.OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 169;
					_localctx._modifier = this.match(XonParser.ID);
					}
					break;
				}
				this.state = 172;
				_localctx._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.ID || _la === XonParser.OP)) {
					_localctx._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0)) {
					{
					{
					this.state = 173;
					_localctx._declarations = this.declarations();
					_localctx._params.push(_localctx._declarations);
					}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 179;
					this.valueType();
					}
				}

				this.state = 183;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 182;
					this.valueBody();
					}
					break;
				}
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
	public valueBody(): ValueBodyContext {
		let _localctx: ValueBodyContext = new ValueBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_valueBody);
		try {
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.match(XonParser.ASSIGN);
				this.state = 189;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 188;
					_localctx._value = this.expression(0);
					}
					break;
				}
				}
				break;
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 191;
				this.body();
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
	public valueType(): ValueTypeContext {
		let _localctx: ValueTypeContext = new ValueTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_valueType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(XonParser.COLON);
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 195;
				_localctx._type = this.expression(0);
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.open();
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.OPEN_BRACE - 3)) | (1 << (XonParser.LAMBDA - 3)) | (1 << (XonParser.FLOAT_LITERAL - 3)) | (1 << (XonParser.INTEGER_LITERAL - 3)) | (1 << (XonParser.STRING_LITERAL - 3)) | (1 << (XonParser.PREPROCESSOR - 3)) | (1 << (XonParser.ID - 3)) | (1 << (XonParser.OP - 3)))) !== 0)) {
				{
				this.state = 199;
				this.argument();
				this.state = 204;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 200;
						this.match(XonParser.COMMA);
						this.state = 201;
						this.argument();
						}
						}
					}
					this.state = 206;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 207;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 212;
			this.close();
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 214;
				_localctx._name = this.match(XonParser.ID);
				this.state = 215;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 218;
			this.expression(0);
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
		this.enterRule(_localctx, 20, XonParser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(XonParser.NL);
			this.state = 221;
			this.match(XonParser.INDENT);
			this.state = 222;
			this.source();
			this.state = 223;
			this.match(XonParser.DEDENT);
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
	public open(): OpenContext {
		let _localctx: OpenContext = new OpenContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_open);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			_localctx._name = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0))) {
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
	public close(): CloseContext {
		let _localctx: CloseContext = new CloseContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_close);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			_localctx._name = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLOSE_BRACKET) | (1 << XonParser.CLOSE_PAREN) | (1 << XonParser.CLOSE_BRACE))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\xE8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x05\x02\x1F\n\x02\x03\x02\x03\x02\x03\x02\x07" +
		"\x02$\n\x02\f\x02\x0E\x02\'\v\x02\x03\x02\x03\x02\x05\x02+\n\x02\x05\x02" +
		"-\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x03" +
		"\x05\x037\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03I\n\x03\f\x03\x0E\x03L\v\x03\x03\x03\x03\x03\x05\x03P\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03V\n\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03[\n\x03\f\x03\x0E\x03^\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03e\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04s\n\x04\f\x04\x0E\x04" +
		"v\v\x04\x03\x04\x03\x04\x05\x04z\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x87\n" +
		"\x04\x03\x04\x03\x04\x07\x04\x8B\n\x04\f\x04\x0E\x04\x8E\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\x93\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x06\x99\n\x06\f\x06\x0E\x06\x9C\v\x06\x03\x06\x05\x06\x9F\n\x06\x05\x06" +
		"\xA1\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07\xA7\n\x07\x03\x07\x05" +
		"\x07\xAA\n\x07\x03\x07\x05\x07\xAD\n\x07\x03\x07\x03\x07\x07\x07\xB1\n" +
		"\x07\f\x07\x0E\x07\xB4\v\x07\x03\x07\x05\x07\xB7\n\x07\x03\x07\x05\x07" +
		"\xBA\n\x07\x05\x07\xBC\n\x07\x03\b\x03\b\x05\b\xC0\n\b\x03\b\x05\b\xC3" +
		"\n\b\x03\t\x03\t\x05\t\xC7\n\t\x03\n\x03\n\x03\n\x03\n\x07\n\xCD\n\n\f" +
		"\n\x0E\n\xD0\v\n\x03\n\x05\n\xD3\n\n\x05\n\xD5\n\n\x03\n\x03\n\x03\v\x03" +
		"\v\x05\v\xDB\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x02\x02\x03\x06\x0F\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x02\x05\x03\x02!\"\x05\x02\x05\x05\x07\x07\t\t\x05\x02\x06\x06\b\b\n" +
		"\n\x02\u010F\x02,\x03\x02\x02\x02\x04d\x03\x02\x02\x02\x06y\x03\x02\x02" +
		"\x02\b\x92\x03\x02\x02\x02\n\x94\x03\x02\x02\x02\f\xBB\x03\x02\x02\x02" +
		"\x0E\xC2\x03\x02\x02\x02\x10\xC4\x03\x02\x02\x02\x12\xC8\x03\x02\x02\x02" +
		"\x14\xDA\x03\x02\x02\x02\x16\xDE\x03\x02\x02\x02\x18\xE3\x03\x02\x02\x02" +
		"\x1A\xE5\x03\x02\x02\x02\x1C-\x07#\x02\x02\x1D\x1F\x07#\x02\x02\x1E\x1D" +
		"\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F%\x03\x02\x02\x02 !\x05\x04" +
		"\x03\x02!\"\x07#\x02\x02\"$\x03\x02\x02\x02# \x03\x02\x02\x02$\'\x03\x02" +
		"\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&(\x03\x02\x02\x02\'%\x03" +
		"\x02\x02\x02(*\x05\x04\x03\x02)+\x07#\x02\x02*)\x03\x02\x02\x02*+\x03" +
		"\x02\x02\x02+-\x03\x02\x02\x02,\x1C\x03\x02\x02\x02,\x1E\x03\x02\x02\x02" +
		"-\x03\x03\x02\x02\x02.e\x07$\x02\x02/0\x07\x11\x02\x020e\x05\x06\x04\x02" +
		"16\x07\x12\x02\x0224\x05\f\x07\x0232\x03\x02\x02\x0234\x03\x02\x02\x02" +
		"45\x03\x02\x02\x0257\x07!\x02\x0263\x03\x02\x02\x0267\x03\x02\x02\x02" +
		"78\x03\x02\x02\x0289\x05\x06\x04\x029:\x05\x16\f\x02:e\x03\x02\x02\x02" +
		";<\x07\x15\x02\x02<=\x05\x06\x04\x02=>\x05\x16\f\x02>e\x03\x02\x02\x02" +
		"?@\x07\x0E\x02\x02@A\x05\x16\f\x02AB\x07\x15\x02\x02BC\x05\x06\x04\x02" +
		"Ce\x03\x02\x02\x02DE\x07\x13\x02\x02EF\x05\x06\x04\x02FJ\x05\x16\f\x02" +
		"GI\x07#\x02\x02HG\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02" +
		"JK\x03\x02\x02\x02KO\x03\x02\x02\x02LJ\x03\x02\x02\x02MN\x07\x0F\x02\x02" +
		"NP\x05\x16\f\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02Pe\x03\x02\x02\x02" +
		"Qe\x07\f\x02\x02Re\x07\r\x02\x02SU\x07\x14\x02\x02TV\x05\x06\x04\x02U" +
		"T\x03\x02\x02\x02UV\x03\x02\x02\x02Ve\x03\x02\x02\x02WX\x07\v\x02\x02" +
		"X\\\x05\x06\x04\x02Y[\x07#\x02\x02ZY\x03\x02\x02\x02[^\x03\x02\x02\x02" +
		"\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02\x02^\\\x03\x02\x02" +
		"\x02_`\x07\x10\x02\x02`a\x05\x06\x04\x02ae\x03\x02\x02\x02be\x05\x06\x04" +
		"\x02ce\x05\f\x07\x02d.\x03\x02\x02\x02d/\x03\x02\x02\x02d1\x03\x02\x02" +
		"\x02d;\x03\x02\x02\x02d?\x03\x02\x02\x02dD\x03\x02\x02\x02dQ\x03\x02\x02" +
		"\x02dR\x03\x02\x02\x02dS\x03\x02\x02\x02dW\x03\x02\x02\x02db\x03\x02\x02" +
		"\x02dc\x03\x02\x02\x02e\x05\x03\x02\x02\x02fg\b\x04\x01\x02gz\x07 \x02" +
		"\x02hi\x07\x07\x02\x02ij\x05\x06\x04\x02jk\x07\b\x02\x02kz\x03\x02\x02" +
		"\x02lz\x05\x12\n\x02mz\x05\b\x05\x02nz\x07!\x02\x02op\x07\"\x02\x02pz" +
		"\x05\x06\x04\x04qs\x05\n\x06\x02rq\x03\x02\x02\x02sv\x03\x02\x02\x02t" +
		"r\x03\x02\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02\x02vt\x03\x02\x02\x02" +
		"wx\x07\x1C\x02\x02xz\x05\x06\x04\x03yf\x03\x02\x02\x02yh\x03\x02\x02\x02" +
		"yl\x03\x02\x02\x02ym\x03\x02\x02\x02yn\x03\x02\x02\x02yo\x03\x02\x02\x02" +
		"yt\x03\x02\x02\x02z\x8C\x03\x02\x02\x02{|\f\x05\x02\x02|}\t\x02\x02\x02" +
		"}\x8B\x05\x06\x04\x06~\x7F\f\v\x02\x02\x7F\x8B\x07\x1A\x02\x02\x80\x81" +
		"\f\n\x02\x02\x81\x82\x07\x1B\x02\x02\x82\x8B\x07!\x02\x02\x83\x84\f\t" +
		"\x02\x02\x84\x86\x07\x18\x02\x02\x85\x87\x07!\x02\x02\x86\x85\x03\x02" +
		"\x02\x02\x86\x87\x03\x02\x02\x02\x87\x8B\x03\x02\x02\x02\x88\x89\f\b\x02" +
		"\x02\x89\x8B\x05\x12\n\x02\x8A{\x03\x02\x02\x02\x8A~\x03\x02\x02\x02\x8A" +
		"\x80\x03\x02\x02\x02\x8A\x83\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B" +
		"\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D" +
		"\x07\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F\x93\x07\x1E\x02\x02\x90" +
		"\x93\x07\x1D\x02\x02\x91\x93\x07\x1F\x02\x02\x92\x8F\x03\x02\x02\x02\x92" +
		"\x90\x03\x02\x02\x02\x92\x91\x03\x02\x02\x02\x93\t\x03\x02\x02\x02\x94" +
		"\xA0\x05\x18\r\x02\x95\x9A\x05\f\x07\x02\x96\x97\x07\x17\x02\x02\x97\x99" +
		"\x05\f\x07\x02\x98\x96\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98" +
		"\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A" +
		"\x03\x02\x02\x02\x9D\x9F\x07\x17\x02\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F" +
		"\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x95\x03\x02\x02\x02\xA0\xA1" +
		"\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x05\x1A\x0E\x02\xA3\v" +
		"\x03\x02\x02\x02\xA4\xA6\x05\n\x06\x02\xA5\xA7\x05\x10\t\x02\xA6\xA5\x03" +
		"\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8\xAA\x05" +
		"\x0E\b\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xBC\x03" +
		"\x02\x02\x02\xAB\xAD\x07!\x02\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03" +
		"\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB2\t\x02\x02\x02\xAF\xB1\x05" +
		"\n\x06\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03" +
		"\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03" +
		"\x02\x02\x02\xB5\xB7\x05\x10\t\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03" +
		"\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xBA\x05\x0E\b\x02\xB9\xB8\x03" +
		"\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xA4\x03" +
		"\x02\x02\x02\xBB\xAC\x03\x02\x02\x02\xBC\r\x03\x02\x02\x02\xBD\xBF\x07" +
		"\x16\x02\x02\xBE\xC0\x05\x06\x04\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0\x03" +
		"\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xC3\x05\x16\f\x02\xC2\xBD\x03" +
		"\x02\x02\x02\xC2\xC1\x03\x02\x02\x02\xC3\x0F\x03\x02\x02\x02\xC4\xC6\x07" +
		"\x19\x02\x02\xC5\xC7\x05\x06\x04\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03" +
		"\x02\x02\x02\xC7\x11\x03\x02\x02\x02\xC8\xD4\x05\x18\r\x02\xC9\xCE\x05" +
		"\x14\v\x02\xCA\xCB\x07\x17\x02\x02\xCB\xCD\x05\x14\v\x02\xCC\xCA\x03\x02" +
		"\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02" +
		"\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD3\x07\x17" +
		"\x02\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5\x03\x02" +
		"\x02\x02\xD4\xC9\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD6\x03\x02" +
		"\x02\x02\xD6\xD7\x05\x1A\x0E\x02\xD7\x13\x03\x02\x02\x02\xD8\xD9\x07!" +
		"\x02\x02\xD9\xDB\x07\x16\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02" +
		"\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x05\x06\x04\x02\xDD\x15\x03\x02" +
		"\x02\x02\xDE\xDF\x07#\x02\x02\xDF\xE0\x07\x03\x02\x02\xE0\xE1\x05\x02" +
		"\x02\x02\xE1\xE2\x07\x04\x02\x02\xE2\x17\x03\x02\x02\x02\xE3\xE4\t\x03" +
		"\x02\x02\xE4\x19\x03\x02\x02\x02\xE5\xE6\t\x04\x02\x02\xE6\x1B\x03\x02" +
		"\x02\x02$\x1E%*,36JOU\\dty\x86\x8A\x8C\x92\x9A\x9E\xA0\xA6\xA9\xAC\xB2" +
		"\xB6\xB9\xBB\xBF\xC2\xC6\xCE\xD2\xD4\xDA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public _NL!: Token;
	public _nl: Token[] = [];
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
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
export class CommentStatementContext extends StatementContext {
	public _value!: Token;
	public LINE_COMMENT(): TerminalNode { return this.getToken(XonParser.LINE_COMMENT, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExportStatementContext extends StatementContext {
	public _path!: ExpressionContext;
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ForStatementContext extends StatementContext {
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class WhileStatementContext extends StatementContext {
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssertStatementContext extends StatementContext {
	public _actual!: ExpressionContext;
	public _expect!: ExpressionContext;
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DeclarationStatementContext extends StatementContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PreprocessorExpressionContext extends ExpressionContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class GroupExpressionContext extends ExpressionContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullableExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MetaExpressionContext extends ExpressionContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public META(): TerminalNode { return this.getToken(XonParser.META, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InvokeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExpressionContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _name!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExpressionContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OP(): TerminalNode { return this.getToken(XonParser.OP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExpressionContext {
	public LAMBDA(): TerminalNode { return this.getToken(XonParser.LAMBDA, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public declarations(): DeclarationsContext[];
	public declarations(i: number): DeclarationsContext;
	public declarations(i?: number): DeclarationsContext | DeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationsContext);
		} else {
			return this.getRuleContext(i, DeclarationsContext);
		}
	}
	constructor(ctx: ExpressionContext) {
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


export class DeclarationsContext extends ParserRuleContext {
	public open(): OpenContext {
		return this.getRuleContext(0, OpenContext);
	}
	public close(): CloseContext {
		return this.getRuleContext(0, CloseContext);
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
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
	public get ruleIndex(): number { return XonParser.RULE_declarations; }
}


export class DeclarationContext extends ParserRuleContext {
	public _destructure!: DeclarationsContext;
	public _modifier!: Token;
	public _name!: Token;
	public _declarations!: DeclarationsContext;
	public _params: DeclarationsContext[] = [];
	public declarations(): DeclarationsContext[];
	public declarations(i: number): DeclarationsContext;
	public declarations(i?: number): DeclarationsContext | DeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationsContext);
		} else {
			return this.getRuleContext(i, DeclarationsContext);
		}
	}
	public valueType(): ValueTypeContext | undefined {
		return this.tryGetRuleContext(0, ValueTypeContext);
	}
	public valueBody(): ValueBodyContext | undefined {
		return this.tryGetRuleContext(0, ValueBodyContext);
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
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_declaration; }
}


export class ValueBodyContext extends ParserRuleContext {
	public _value!: ExpressionContext;
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_valueBody; }
}


export class ValueTypeContext extends ParserRuleContext {
	public _type!: ExpressionContext;
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_valueType; }
}


export class ArgumentsContext extends ParserRuleContext {
	public open(): OpenContext {
		return this.getRuleContext(0, OpenContext);
	}
	public close(): CloseContext {
		return this.getRuleContext(0, CloseContext);
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
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
	public get ruleIndex(): number { return XonParser.RULE_arguments; }
}


export class ArgumentContext extends ParserRuleContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class BodyContext extends ParserRuleContext {
	public NL(): TerminalNode { return this.getToken(XonParser.NL, 0); }
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public source(): SourceContext {
		return this.getRuleContext(0, SourceContext);
	}
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


export class OpenContext extends ParserRuleContext {
	public _name!: Token;
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_open; }
}


export class CloseContext extends ParserRuleContext {
	public _name!: Token;
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACKET, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_close; }
}


