declare interface Window {
  ethereum?: {
    isMetaMask: true;
    request: (...args: any[]) => Promise<string>;
    on: any;
  };
  MSStream?: any;
}
