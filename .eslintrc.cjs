module.exports = {
    "root": true,
    "parser": "vue-eslint-parser",
    "plugins": ["eslint-plugin-vue"],
    "extends": ["@nuxt/eslint-config"],
    "rules": {
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "eol-last": ["error", "always"],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "vue/html-indent": ["error", 4],
    }
};
