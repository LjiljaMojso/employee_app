import React from "react";
import Employee from "./Employee";
const EmployeesList = ({ employees, updateEmployee, deleteEmployee }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {employees.map((item) => {
        return (
          <Employee
            item={item}
            key={item.id}
            updateEmployee={updateEmployee}
            deleteEmployee={deleteEmployee}
          />
        );
      })}
    </div>
  );
};

export default EmployeesList;
