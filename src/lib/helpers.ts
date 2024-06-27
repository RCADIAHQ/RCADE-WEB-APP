export const shortenAddress = (walletAddress: string, begin = 6, end = 4) => {
  return (
    walletAddress.substring(0, begin) +
    '...' +
    walletAddress.substring(walletAddress.length - end, walletAddress.length)
  );
};