import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import flexbugs from "postcss-flexbugs-fixes";

export default {
  plugins: [
    autoprefixer,
    flexbugs,
    cssnano({
      preset: ["advanced", { zindex: false }],
    }),
  ],
};
