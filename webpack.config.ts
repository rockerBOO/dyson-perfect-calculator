import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ForkTsCheckerPlugin from "fork-ts-checker-webpack-plugin";
import GenerateJsonPlugin from "generate-json-webpack-plugin";
import HtmlPlugin from "html-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import WebpackModules from "webpack-modules";
import items from "./src/dsp-items";
import recipes from "./src/dsp-recipes";

const webpackConfig = (env, args) => {
  const isDevelopment = args.mode !== "production";

  return {
    mode: env === "production" ? "production" : "development",
    devtool: env === "production" ? "cheap-source-maps" : "eval",
    entry: {
      main: "./src/index.tsx",
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
      new CopyPlugin({
        patterns: [{ from: "src/img", to: "assets/img" }],
      }),
      new GenerateJsonPlugin("dsp-items.json", items),
      new GenerateJsonPlugin("dsp-recipes.json", recipes),
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
