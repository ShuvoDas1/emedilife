// export const mainUrl = "https://api.emedilife.com/";
// export const mainUrl = "'http://localhost:9999';
export const mainUrl = "https://api.emedilife.com/";
export const adminApi = "api/admin/";
export const webApi = "api/web/";



// Admin API
export const getDashboardInfo = mainUrl + adminApi + "deshboard-data";
export const addProductBySearchByAdminCustomOrder = mainUrl + adminApi + "product/get-products-by-search-for-custom-order"
export const confirmPrescriptionOrder = mainUrl + adminApi + "order/confirm-prescription-order";
export const getOrderDetailsByAdmin = mainUrl + adminApi + "order/get-single-order-by-admin"
export const cancelOrderByAdmin = mainUrl + adminApi + "order/cancel-prescription-order-by-admin"

// User API
export const getHeaderMenu = mainUrl + webApi + "header-menu/get-header-menus";
export const placedPrescriptionOrder = mainUrl + webApi + "order/placed-prescription-order";

// export const getAllDistricts = mainUrl + "api/district/get-all-districts";
// export const getAllArea = mainUrl + "api/district/get-all-area-by-district";
