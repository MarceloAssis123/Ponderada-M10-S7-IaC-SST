/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "ponderada-m10-s7-iac-sst",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const helloFunction = new sst.aws.Function("HelloWorld", {
      url: true,
      handler: "index.handler",
    });

    return {
      api: helloFunction.url,
    };
  },
});
