import { useCallback, useEffect, useState } from "react";
import { getBalance } from "@yyz-toolkit/utils";

export function useBalance(address: string) {
  const [balance, setBalance] = useState("");

  const fetch = useCallback(() => {
    getBalance(address).then((balance) => {
      setBalance(balance || "--");
    });
  }, [address]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { balance };
}
