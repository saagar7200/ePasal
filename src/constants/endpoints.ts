export const EndpointRoutes = {
  auth: "auth/admin/login",
  logout: "auth/logout",
  changePassword: "auth/admin/change-password",
  createLevel: "/level",
  service: "/service",

  //* office setup
  office: "/office",
  createDetailOfDivision: "/detail-of-division",
  branchDetail: "/branch-detail",

  // end of office setup

  analytics: "analytics/count",

  designation: "/designation",
  // admin

  admin: "/admin",

  // employee management
  employee: "/employee",
  employeeMedalPrizeAndRespect: "/medal-and-prize",
  inactiveEmployee: "/inactive-employee",
  employeePreviousOfficeDetails: "/previous-office",
  employeePunishment: "/employee-punishment",
  tour: "/tour",
  leave: "/leave",
  training: "/training",

  allEmployeeLeave: "/all-employee-leave",

  // * address
  provinces: "address/province",
  districts: "address/district",
  district: "address/district",
  municipalities: "address/municipality",
  wards: "/address/ward",
  group: "/group",
  subGroup: "/sub-group",
  employeeType: "/employee-type",
  academic: "/academic",
  academicFaculty: "/academic-faculty",
  holiday: "/holiday",
  medal: "/medal",
  punishment: "/punishment",
  punishmentType: "/punishment/punishment",
  docType: "/doc-type",
  bodartha: "/bodartha",

  serviceDetail: "/service-change-reason",
  appointment: "/appointment",
  //service-book
  employeeStartingPosition: "/starting-position-service",
  servicePositionChanges: "/service-position-changes",
  graphicalReport: "/graphical-report",
  report: "/report",
  graphicalReportCategory: "/graphical-report/employee-level",
  // pripatra
  transfer: "/paripatr/Transfer",
  promotion: "/paripatr/Promotion",
  bujarat: "/paripatr/bujarat",
};
