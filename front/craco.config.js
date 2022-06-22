const CracoAlias = require('craco-alias');
const CracoEsbuildPlugin = require('craco-esbuild');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const path = require('path');

// const smp = new SpeedMeasurePlugin();

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: './tsconfig.paths.json',
            },
        },
        { plugin: CracoEsbuildPlugin },
    ],
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            paths.appBuild = webpackConfig.output.path = path.resolve('..', './build_react');
            return webpackConfig;

            // return smp.wrap(webpackConfig);  // FIXME: craco + smp 구성에서 실행/빌드 시 여기저기서 이상한 오류가 발생함, 해결 전까지 smp 비활성화
        }
    }
};