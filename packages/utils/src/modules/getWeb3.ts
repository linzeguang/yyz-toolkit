import Web3 from "web3";
import { chainRpc } from "@yyz-toolkit/config";

export function getWeb3() {
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
