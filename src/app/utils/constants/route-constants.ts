export class RouteConstants {

  public static GET_ITEMS : string =  "catalog/items";
  public static GET_CATEGORIES : string =  "catalog/categories";
  public static GET_ORDERS : string =  "inventory/orders/all";
  public static GET_ORDERS_FOR_I: string = "inventory/orders";
  public static GET_ITEMS_IN_ORDER: string = "inventory/orders/items";
  public static UPDATE_ORDER_STATUS: string = "inventory/orders/stage";
  public static SAVE_ITEM : string = "catalog/items/save"
  public static DELETE_ITEM : string = "catalog/items/delete"
  public static SAVE_CATEGORY : string = "catalog/categories/save"
  public static UPDATE_ITEM : string = "catalog/items/update"
  public static UPDATE_CATEGORY : string = "catalog/categories/update"
  public static TEMPLATES_CATALOG : string = "customer/templates/get/catalog"
  public static GET_TEMPLATE_CONFIG : string = "customer/template/get/config"
  public static SAVE_TEMPLATE_CONFIG : string = "customer/template/save/config"
  public static UPDATE_TEMPLATE_CONFIG : string = "customer/template/update/config"
  public static BOOTSTRAP_ACCOUNT : string = "customer/template/save/config"
}
