const { Provider } = require("react-redux");

module.exports = {
  plugins: [
    () => ({
      name: "configure-store",
      configureStore() {
        return {
          getState: () => ({}),
          dispatch: () => null,
          subscribe: () => () => {},
        };
      },
    }),
  ],
};