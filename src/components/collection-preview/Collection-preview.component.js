import React from 'react';
import { withRouter } from 'react-router-dom';
import {PreviewContainer,
    CollectionPreviewContainer,
    TitleContainer} from "./Collection-preview.style"
import CollectionItemComponent from '../collection-item/CollectionItem.component';


const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItemComponent key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
  
  export default withRouter(CollectionPreview);