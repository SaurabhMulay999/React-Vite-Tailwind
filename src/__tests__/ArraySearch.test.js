import ArraySearch from "../components/ArraySearch";

test('Testing Array Search Functioality (Proto chain) ', () => { 

    const arr=[1,12,3,4,452,34,123,45,6,632,234,2];

    let target=45;
    const value=arr.ArraySearch(target);
     expect(value).toBe(target);
 })