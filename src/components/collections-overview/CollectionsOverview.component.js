import React from 'react';
import './CollectionsOverview.style.scss';
import { useSelector } from 'react-redux';
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors"
import CollectionPreview from '../collection-preview/Collection-preview.component';

const CollectionsOverview = () => {
  const collections = useSelector(state=>selectCollectionsForPreview(state))
  return(
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);}

export default CollectionsOverview;