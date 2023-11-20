// import { cleanEnv, port, str, url } from "envalid";

// const env = cleanEnv(process.env, {
//   // SERVER_PORT: port({ desc: "Server Port" }),
//   // PAYMENTS_ENDPOINT: url({ desc: "Payments Endpoint" }),
// });

console.log(process.env.SERVER_PORT);

const env = {
  SERVER_PORT: 8083,
  PAYMENTS_ENDPOINT: "localhost:3001/payment",
};

export default env;
