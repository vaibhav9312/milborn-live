import { environment } from '../../environments/environment';
export const serviceUrls = {
   
    
    clienttypecreate : environment.host + 'api/clienttype/create',
    clienttypedelete : environment.host + 'api/clienttype/delete/',
    clienttypeupdate : environment.host + 'api/clienttype/update/',
    countryList : environment.host + 'api/generic/countrylist',
    stateByCountryId : environment.host + 'api/generic/statebycountry/',
    cityByStateId : environment.host + 'api/generic/citybystate/',
    mainItemListByClientType : environment.host + 'api/generic/mainitemsbyclienttype/',
    clientlist : environment.host + 'api/clientmng/client/list',
    
    productlist: environment.host + 'api/productmng/product/list',
    //----------------------------------------------------------
    Catelist:environment.host + 'web/catelist',
    GroupList: environment.host + 'web/groupList',
    SubGroup : environment.host + 'web/subgrouplist',
    subproductList:environment.host + 'web/subproducts',
    getsubcate:environment.host + 'web/subcatelist',
    getcateProducts: environment.host +'web/cateproducts',
    getallproducts:environment.host + 'web/allproducts',
    clienttypelist : environment.host + 'api/clienttype/list',
    mainItem:environment.host + 'web/mainitem',
    clientCreate : environment.host + 'api/clientmng/client/create',
    Product: environment.host +'web/Product',
    loginIn: environment.host + 'api/clienttype/login',
    clientDetails : environment.host + 'api/clientmng/client/details/',
    searchList : environment.host + 'web/searchlist',
    groupproducts :environment.host + 'web/groupproducts',
    getbanner : environment.host + 'web/getbanners',
}