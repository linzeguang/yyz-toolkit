import { useEffect, useState } from "react";
import { getBalance, useWeb3React } from "@yyz-toolkit/utils";

export function useAccount() {
  const { active, account } = useWeb3React();
  const [balance, setBalance] = useState("--");

  useEffect(() => {
    console.log("account: ", account);
    if (account) {
      try {
        getBalance(account).then((balance) => {
          setBalance(balance || "--");
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
