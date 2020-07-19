import React ,{useEffect} from "react";
import {ShopPageContainer} from "./ShopPage.style"
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverview.container";
import  CollectionPageContainer from "../collection/Collection.container";
import { fetchCollectionsStart } from '../../redux/shop/shop.action';
import { useDispatch } from "react-redux";

function ShopPage({match}){
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(fetchCollectionsStart())   
 },[dispatch])

return(
<ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
</ShopPageContainer>

)
}
export default ShopPage;
