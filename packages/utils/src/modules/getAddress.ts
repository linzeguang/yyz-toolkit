import { Address, chainRpc } from "@yyz-toolkit/config";

export const getAddress = (address: Address) => {
  return address[chainRpc];
};
