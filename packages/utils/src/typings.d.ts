declare interface Window {
  ethereum?: {
    isMetaMask?: true;
    request?: (...args: any[]) => Promise<void>;
    on?: any;
  };
  MSStream?: any;
}
