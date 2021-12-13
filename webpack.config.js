/* eslint-env node */
import HtmlPlugin from "html-webpack-plugin";
import WebpackModules from "webpack-modules";
import TerserPlugin from "terser-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import webpack from "webpack";
import ForkTsCheckerPlugin from "fork-ts-checker-webpack-plugin";

const webpackConfig = (env) => {
  const isDevelopment = env !== "production";

  return {
    mode: env === "production" ? "production" : "development",
    devtool: env === "production" ? "cheap-source-maps" : "eval",
    entry: {
      main: "./src/index.tsx",
      workbox: "./src/workbox.js",
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
              options: {
                getCustomTransformers: () => ({
                  before: [isDevelopment && ReactRefreshTypeScript()].filter(
                    Boolean
                  ),
                }),
                transpileOnly: isDevelopment,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new WebpackModules(),
      new HtmlPlugin({
        template: "./src/index.ejs",
        title: "Dyson Perfect Calculator",
        chunks: ["main"],
        hash: true,
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      new ForkTsCheckerPlugin(),
    ].filter(Boolean),
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          // terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          // },
        }),
      ],
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
    },
  };
};

export default webpackConfig;
