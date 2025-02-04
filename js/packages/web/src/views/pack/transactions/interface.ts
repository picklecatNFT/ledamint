import { WalletContextState } from '@j0nnyboi/wallet-adapter-react';
import { MetaState, ParsedAccount, StringPublicKey } from '@j0nnyboi/common';
import { Connection, Keypair, TransactionInstruction } from '@safecoin/web3.js';
import BN from 'bn.js';
import { PackSet } from '@j0nnyboi/common/dist/lib/models/packs/accounts/PackSet';

import { PackMetadataByPackCard } from '../contexts/hooks/useMetadataByPackCard';

export interface GenerateTransactionsResponse {
  instructions: TransactionInstruction[];
  signers: Keypair[];
}

export interface ClaimPackCardsParams
  extends Pick<MetaState, 'packCards' | 'masterEditions'> {
  wallet: WalletContextState;
  connection: Connection;
  pack: ParsedAccount<PackSet>;
  voucherMint: StringPublicKey;
  cardsToRedeem: Map<number, number>;
  metadataByPackCard: PackMetadataByPackCard;
}

export interface ClaimSeveralCardsByIndexParams
  extends Pick<MetaState, 'packCards' | 'masterEditions'> {
  wallet: WalletContextState;
  connection: Connection;
  pack: ParsedAccount<PackSet>;
  numberOfCards: number;
  voucherMint: StringPublicKey;
  index: number;
  metadataByPackCard: PackMetadataByPackCard;
}
export interface GenerateClaimPackInstructionsParams {
  wallet: WalletContextState;
  connection: Connection;
  index: number;
  packSetKey: StringPublicKey;
  userToken: StringPublicKey;
  voucherMint: StringPublicKey;
  metadataMint: StringPublicKey;
  edition: BN;
}

export interface NewMintParams {
  wallet: WalletContextState;
  connection: Connection;
}

export interface RequestCardsParams {
  pack: ParsedAccount<PackSet>;
  tokenAccount?: StringPublicKey;
  wallet: WalletContextState;
  connection: Connection;
  cardsLeftToOpen: number;
  voucherKey: StringPublicKey;
  editionKey: StringPublicKey;
  editionMint: StringPublicKey;
}

export interface RequestCardsInstructionsParams
  extends Omit<RequestCardParams, 'index'> {
  cardsLeftToOpen: number;
}

export interface RequestCardParams {
  index: number;
  packSetKey: StringPublicKey;
  voucherKey: StringPublicKey;
  editionKey: StringPublicKey;
  editionMint: StringPublicKey;
  tokenAccount?: StringPublicKey;
  wallet: WalletContextState;
  randomOracle: StringPublicKey;
}
