module.exports = {
  root: true,
  extends: ["standard"],
  global: {
    IS_DEVELOPMENT: "readonly",
  },
  parserOptions: {
    ecmasVersion: 2020,
  },
};
