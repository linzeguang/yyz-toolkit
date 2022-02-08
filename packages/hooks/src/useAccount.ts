import {
  addThousandSeparator,
  getBalance,
  useWeb3React,
  formatEther,
} from "@yyz-toolkit/utils";
import { useEffect, useState } from "react";

export default function useAccount() {
  const { active, account } = useWeb3React();
  const [balance, setBalance] = useState("--");

  useEffect(() => {
    console.log("account: ", account);
    if (account) {
      try {
        getBalance(account).then((balance: any) => {
          setBalance(addThousandSeparator(formatEther(balance), 6));
        });
      } catch {
        setBalance("--");
      }
    } else {
      setBalance("--");
    }
  }, [account]);

  return { active, account, balance };
}
