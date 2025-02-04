import {
  Metadata,
  PackDistributionType,
  ParsedAccount,
  useMeta,
} from '@j0nnyboi/common';
import { BN } from 'bn.js';

type MetadataWithProbability = ParsedAccount<Metadata> & {
  probability: string;
};
export type PackMetadataByPackCard = Record<string, MetadataWithProbability>;

export const useMetadataByPackCard = (
  packId: string,
): PackMetadataByPackCard => {
  const { packCardsByPackSet, metadataByMasterEdition, packs } = useMeta();

  const {
    distributionType = PackDistributionType.MaxSupply,
    totalEditions = new BN(0),
    totalWeight = new BN(0),
  } = packs[packId]?.info || {};
  const isMaxSupplyDistribution =
    distributionType === PackDistributionType.MaxSupply;
  const total = isMaxSupplyDistribution ? totalEditions : totalWeight;
  const cards = packCardsByPackSet[packId];

  const metadata = cards?.reduce<PackMetadataByPackCard>(
    (packMetadata, { info, pubkey }) => {
      const probCount = isMaxSupplyDistribution ? info.maxSupply : info.weight;
      const probability = calculateProbability(
        probCount,
        total.toNumber(),
      ).toFixed(1);

      if (!metadataByMasterEdition[info.master]) {
        return packMetadata;
      }

      packMetadata[pubkey] = {
        ...metadataByMasterEdition[info.master],
        probability,
      };
      return packMetadata;
    },
    {},
  );

  return metadata;
};

function calculateProbability(count: number, total: number): number {
  if (total === 0) {
    return 0;
  }
  return (count * 100) / total;
}
