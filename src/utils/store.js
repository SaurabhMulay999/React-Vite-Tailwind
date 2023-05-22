import {configureStore} from '@reduxjs/toolkit';
import BucketSlice from './BucketSlice';
const store=configureStore({
    name:'Bucket',
    reducer:{
        Bucket:BucketSlice,
    }
});

export default store;