import { environment } from '../../environments/environment';
export const serviceUrls = {
    signIn: environment.host + 'api/account/login',
    clienttypelist : environment.host + 'api/clienttype/list',
    clienttypecreate : environment.host + 'api/clienttype/create',
    clienttypedelete : environment.host + 'api/clienttype/delete/',
    clienttypeupdate : environment.host + 'api/clienttype/update/',
    countryList : environment.host + 'api/generic/countrylist',
    stateByCountryId : environment.host + 'api/generic/statebycountry/',
    cityByStateId : environment.host + 'api/generic/citybystate/',
    mainItemListByClientType : environment.host + 'api/generic/mainitemsbyclienttype/',
    clientlist : environment.host + 'api/clientmng/client/list',
    clientDetails : environment.host + 'api/clientmng/client/details/',
    clientCreate : environment.host + 'api/clientmng/client/create',
    productlist: environment.host + 'api/productmng/product/list',
    Catelist:environment.host + 'web/catelist',
    GroupList: environment.host + 'web/groupList',
    SubGroup : environment.host + 'web/subgrouplist',
    subproductList:environment.host + 'web/subproducts',
    getsubcate:environment.host + 'web/subcatelist',
    getcateProducts: environment.host +'web/cateproducts'
}