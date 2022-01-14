import arraybuffer from "@wemap/rollup-plugin-arraybuffer";
import babel from "rollup-plugin-babel";
// import styles from "rollup-plugin-styles";
// import filesize from "rollup-plugin-filesize";
import { uglify } from "rollup-plugin-uglify";
import { minify } from "uglify-es";
// import lessModules from "rollup-plugin-less-modules";

module.exports = {
  // entry: "./src/index.js",
  input: "./src/index.js",
  output: {
    dir: "./dist",
    // file: "app.js",
    format: "es",
  },
  // plugins: {
  //   rules: [
  //     // {
  //     //   test: /\.worker\.js/,
  //     //   loader: "worker-loader",
  //     // },
  //     {
  //       test: /\.less/,
  //       loader: ["style-loader", "css-loader", "less-loader"],
  //     },
  //     {
  //       test: /decoder(\.wasm|\.worker\.js|\.module\.js)/,
  //       type: "javascript/auto",
  //       loader: "arraybuffer-loader",
  //     },
  //   ],
  // },
  plugins: [
    arraybuffer({
      include: [
        "./src/decoder/decoder.worker.js",
        "./src/decoder/decoder.wasm",
        "./src/decoder/decoder.module.js",
      ],
    }),
    babel({
      presets: ["@babel/preset-env"],
    }),
    uglify(
      {
        compress: {
          drop_console: true,
        },
      },
      minify
    ),
    // lessModules({ insert: true }),
  ],
};
