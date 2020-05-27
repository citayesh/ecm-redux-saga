import React from "react";
import "./ShopPage.style.scss"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection.component";


function ShopPage({match}){

return(
<div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>

</div>

)
}
export default ShopPage;
