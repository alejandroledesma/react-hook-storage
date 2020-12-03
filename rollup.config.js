import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

import react from 'react';
import reactDom from 'react-dom';

import pkg from './package.json';

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        terser(),
        external(),
        resolve({
            preferBuiltins: true,
        }),
        commonjs({
            include: ['node_modules/**'],
            namedExports: {
                react: Object.keys(react),
                'react-dom': Object.keys(reactDom),
            },
        }),
    ],
};
