export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList, },
    getNumberOfDepartments: function () {
      return Object.keys(this.allEmployees).length;
    },
  };
  return obj;
}
