import React from 'react';
import {CollectionsOverviewContainer } from './CollectionsOverview.style';
import { useSelector } from 'react-redux';
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors"
import CollectionPreview from '../collection-preview/Collection-preview.component';

const CollectionsOverview = () => {
  const collections = useSelector(state=>selectCollectionsForPreview(state))
  return(
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);}

export default CollectionsOverview;