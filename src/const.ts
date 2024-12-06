export enum AppRoute {
  Root = '/',
  Contacts = '/Contacts',
  Login = '/Login',
  MyQuests = '/my-quests',
  NotFound = '/400',
}

export enum HttpCode {
  NotFound = 404,
  NoAuth = 401,
}

export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
}
