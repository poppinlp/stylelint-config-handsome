import path from 'path';
import test from 'ava';
import stylelint from 'stylelint';
import isPlainObj from 'is-plain-obj';

test('check config is object', t => {
	const conf = require(path.join(__dirname, '../index'));

	t.plan(2);
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.rules));
});

test('load config to stylelint', t => stylelint.lint({
	code: path.join(__dirname, 'code.css'),
	configFile: path.join(__dirname, '../.stylelintrc.yml')
}).then(res => {
	t.pass(res.errored);
}));
