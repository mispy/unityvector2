import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import memory from 'rollup-plugin-memory';

export default {
	useStrict: true,
	format: 'iife',
	entry: 'src/unityvector2.js',
	plugins: [
		memory({
			path: 'src/unityvector2.js',
			contents: `
				import Vector2 from './unityvector2';
				if (typeof module!='undefined') module.exports = Vector2;
				else self.Vector2 = Vector2;
			`
		}),
		nodeResolve({
			main: true
		}),
		babel({
			sourceMap: true,
			loose: 'all',
			blacklist: ['es6.tailCall'],
			exclude: 'node_modules/**'
		})
	]
};
