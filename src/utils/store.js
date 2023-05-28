import {configureStore} from '@reduxjs/toolkit';
import BucketSlice from './BucketSlice';
import PostSlice from './PostSlice';

const store=configureStore({
    name:'Bucket',
    reducer:{
        Bucket:BucketSlice,
        Posts:PostSlice,
    }
});

export default store;