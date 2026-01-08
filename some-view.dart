import 'package:flutter/material.dart';
import 'dart:html' as html;
import 'dart:convert';

void main() {
  _saveQueryParams();
  runApp(const MyApp());
}

void _saveQueryParams() {
  final queryParams = Uri.base.queryParameters;
  if (queryParams.isNotEmpty) {
    final jsonString = jsonEncode(queryParams);
    html.window.localStorage['queryParams'] = jsonString;
  }
}

Map<String, dynamic> _getQueryParams() {
  final stored = html.window.localStorage['queryParams'];
  if (stored != null) {
    return jsonDecode(stored);
  }
  return {};
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Home'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  Map<String, dynamic> _queryParams = {};

  @override
  void initState() {
    super.initState();
    _queryParams = _getQueryParams();
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 32),
            if (_queryParams.isNotEmpty) ...[
              const Text(
                'Saved Query Parameters:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text(jsonEncode(_queryParams)),
            ],
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
