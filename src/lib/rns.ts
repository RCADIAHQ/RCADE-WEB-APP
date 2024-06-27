
import { type Contract, ethers, providers } from 'ethers';
import { utils } from 'ethers';
import { networks } from 'rootnameservice';
import { Metadata } from '../types';
import { ERC1155_ABI } from './Abi';

const ROOT_RPC = 'https://root.rootnet.live/archive'
  
const provider = new providers.JsonRpcProvider(
  ROOT_RPC,
  networks.root
);

const nameWrapper = '0x44640d662a423d738d5ebf8b51e57afc0f2cf4df'
    
const network ='mainnet'

export const getRnsUrl = (hash: string) => {
  return `https://rns-metadata.fly.dev/${network}/${nameWrapper}/${hash}`;
};

interface ERC1155 extends Contract {
  uri(tokenId: bigint): Promise<string>;
}

export const getRnsFromAddress = async (
  address: string
): Promise<string | null> => {
  return await provider.lookupAddress(address);
};

export const getAddressFromRns = async (
  rns: string
): Promise<string | null> => {
  return await provider.resolveName(rns);
};

export const getRnsImage = async (rns: string): Promise<string | null> => {
  const url = getRnsUrl(utils.namehash(rns));
  return (await fetch(url + '/image')).text();
};

export const getRnsMetadata = async (tokenId: bigint): Promise<Metadata> => {
  const contract: ERC1155 = new ethers.Contract(
    nameWrapper,
    ERC1155_ABI,
    provider
  ) as ERC1155;

  const uri: string = await contract.uri(tokenId);

  const response = await fetch(uri);
  return (await response.json()) as Metadata;
};
