import { addCardToPack } from '@j0nnyboi/common';
import { TransactionInstruction } from '@safecoin/web3.js';

import { GetAddCardToPackParams } from './interface';

export const getAddCardToPack = async ({
  selectedItems,
  packSetKey,
  walletPublicKey,
}: GetAddCardToPackParams): Promise<TransactionInstruction[]> => {
  const addCardsToPack = selectedItems.map(selectedItem => {
    return addCardToPack({
      ...selectedItem,
      packSetKey,
      authority: walletPublicKey.toBase58(),
    });
  });

  return Promise.all(addCardsToPack);
};
