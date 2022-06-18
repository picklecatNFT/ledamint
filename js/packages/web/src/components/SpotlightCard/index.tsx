import React, { Fragment, useEffect, useState } from 'react';
import {
  AuctionView,
  AuctionViewState,
  useBidsForAuction,
  useCreators,
  useUserBalance,
} from '../../hooks';
import { LiveAuctionViewState } from '../../views/home/components/SalesList';
import { useAuctionsList } from '../../views/home/components/SalesList/hooks/useAuctionsList';
//import { SpotlightRenderCard } from '../SpotlightRenderCard';

const filterAuctionList = (sales) => {
  console.log("auctions from filterAuctionList ", sales)
  //remove instant sales from the list
  const onlyAuctions = sales.filter(
    auction =>
      auction.isInstantSale === false
      
  );
  console.log("Only auctions  ", onlyAuctions)
}

const SpotlightCardRender = () => (
<>test</>
)

export const SpotlightCard = () => {
  const [activeKey, setActiveKey] = useState(LiveAuctionViewState.All);
  const { auctions, hasResaleAuctions } = useAuctionsList(activeKey);
  const mostBidded = filterAuctionList(auctions);
  console.log('AUCTION FROM SPOTLIGHT ', auctions)
  return (<>
    <SpotlightCardRender/>
    <div>Coming soon</div>
  </>
  )
}