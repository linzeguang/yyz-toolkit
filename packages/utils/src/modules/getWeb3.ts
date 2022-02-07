import Web3 from "web3";
import { chain } from "./chain";

export function getWeb3() {
  const { chainRpc } = chain;

  return new Web3(
    new Web3.providers.HttpProvider(chainRpc, {
      keepAlive: true,
      withCredentials: false,
      timeout: 20000,
      headers: [
        {
          name: "Access-Control-Allow-Origin",
          value: "*",
        },
      ],
    })
  );
}
