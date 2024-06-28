import { useEffect, useState } from 'react';
import { getRnsFromAddress } from '../lib/rns';

const useGetRnsFromAddress = (address: string): string | null => {
  const [rns, setRns] = useState<string | null>(null);

  useEffect(() => {

    const fetchRns = async () => {
      const r = await getRnsFromAddress(address);
      setRns(r ?? null);
    };

    if (address) fetchRns();
  }, [address]);

  return rns;
};

export default useGetRnsFromAddress;