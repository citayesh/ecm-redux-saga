import {takeLatest , call, put,all}from 'redux-saga/effects';
import ShopActionTypes from './shop.type';
import axios from 'axios';
import { fetchCollectionsSuccess,
    fetchCollectionsFailure}from './shop.action'

export function fetchFromApi() {
    return axios.get(`https://my-json-server.typicode.com/citayesh/product-api/SHOP_DATA`)
}     

export function* fetchCollectionsAsync(){
   try{
    const collectionsMap = yield call(fetchFromApi)
    console.log(collectionsMap)
    yield put(fetchCollectionsSuccess(collectionsMap.data))
   }catch(error){
        yield put(fetchCollectionsFailure(error.message))
   }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
      ShopActionTypes.FETCH_COLLECTIONS_START,
      fetchCollectionsAsync
    );
  }

  export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
  }