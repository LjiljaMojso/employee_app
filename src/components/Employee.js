import React from "react";
import EditEmployee from "./EditEmployee";
const Employee = ({ item, updateEmployee, deleteEmployee }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div
        key={item.id}
        className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
      >
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 object-cover"
          src={item.img}
          alt="profilephoto"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Name: {item.name}
            </p>
            <p className="text-slate-500 font-small">email: {item.email}</p>
            <p className="text-slate-500 font-small">
              Native language: {item.language}
            </p>
            <p className="text-slate-500 font-small">
              Phone number: {item.phone}
            </p>
            <p className="text-slate-500 font-small">
              Price {item.price}$ per hour
            </p>
            <p className="text-slate-500 font-small">
              Experience: {item.experience} years
            </p>
            <p className="text-slate-500 font-small">
              Location: {item.location}
            </p>
            <p className="text-slate-500 font-small">
              Tehnology: {item.tehnology}
            </p>
          </div>
          <EditEmployee employee={item} updateEmployee={updateEmployee} />
          <button
            onClick={() => deleteEmployee(item.id)}
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
