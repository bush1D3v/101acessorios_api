import { JestConfigWithTsJest } from "ts-jest";
import { config } from "dotenv";

config({ path: ".env.test" });

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: [ "ts", "js" ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]s$",
  transform: {
    "^.+\\.ts$": [ "ts-jest", { tsconfig: "tsconfig.json" } ],
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^!/(.*)$": "<rootDir>/tests/$1"
  },
  "resolver": undefined
};

export default jestConfig;
