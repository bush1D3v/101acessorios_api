module.exports = {
  preset: "ts-jest",
  testEnvironment: "bun",
  moduleFileExtensions: ["ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]s$",
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
};
