import { useCallback, useEffect, useState } from "react";
import {
  addThousandSeparator,
  formatEther,
  getBalance,
} from "@yyz-toolkit/utils";

export function useBalance(address: string) {
  const [balance, setBalance] = useState("");

  const fetch = useCallback(() => {
    getBalance(address).then((balance: any) => {
      balance && setBalance(addThousandSeparator(formatEther(balance), 6));
    });
  }, [address]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { balance };
}
