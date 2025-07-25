export interface TokenConfig {
  chain: string;
  address: string;
  decimals?: number;
}

export interface GetPoROptions {}

export interface IPoRAdapter {
  protocolId: string;
  minted: (options: GetPoROptions) => Promise<number>;
  reserves: () => Promise<number>;
}
