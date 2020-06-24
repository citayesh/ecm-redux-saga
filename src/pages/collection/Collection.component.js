import React from "react";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer} from './Collection.style'
import { useSelector } from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors"
import CollectionItem from "../../components/collection-item/CollectionItem.component";

const CollectionPage = ({match}) => {
  const collection=useSelector(selectCollection(match.params.collectionId));
  const {title,items}=collection;
  return (
      <CollectionPageContainer>
        <CollectionTitle >{title}</CollectionTitle>
        <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
  };

  export default CollectionPage;