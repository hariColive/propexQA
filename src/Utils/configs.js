const configs = {
API_URL: "https://api.propex.ai/web/staging",
 
  GET_IN_TOUCH_API_URL: function () {
    return this.API_URL + "/CRMapi/PropertyCRM/LandingPageLeadInsert"
  },
  SEARCH_SUGG_API_URL:function () {
    return  this.API_URL + "/CRMapi/PropertyCRM/GetSuggestionsBasedonSearch"
  }
  ,
  // AUTH_ID_QA: "4EF7BB12-F702-4AC5-B147-ACEEFD984AD3",
  LEAD_SOURCE_ENQUIRY: "PVWebEnquiry",
  LEAD_SOURCE_SCHEDULE: "PVWebSchedule",
  LANDING_PAGE_ID: 40,
  PLATFORM_ID: 24,
SUGGESTION_IMG_URL:"https://qa.colive.com/assets/images/building.svg",
  SERVICE_GRID_API_URL: function () {
    return this.API_URL + "/api/Propex/GetPropertyDetails_Propex"
  },
  FILTER_GRID_API_URL: function () {
    return this.API_URL + "/CRMapi/PropertyCRM/GetPropertyDetails_V2_Web"
  },
  FACTSHEET_API_URL: function(){
    return this.API_URL + "/CRMapi/Chatbot/GetPropertyDetailsById"
  },
  AUTH_ID_FS:"4761F04B-3C3C-4B0C-9B70-0DB6D167CFC9",
}

export default configs