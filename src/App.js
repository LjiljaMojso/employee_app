import { useState, useEffect } from "react";
import EmployeesList from "./components/EmployeesList";
import { db } from "./firebase-config";
import {
  query,
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";
function App() {
  const [showEmployees, setShowEmployees] = useState(true);
  const [employees, setEmployees] = useState([]);
  const updateEmployee = async (
    id,
    name,
    email,
    experience,
    img,
    language,
    location,
    phone,
    price,
    tehnology
  ) => {
    await updateDoc(doc(db, "users", id), {
      name,
      email,
      experience: Number(experience),
      img,
      language,
      location,
      phone: Number(phone),
      price: Number(price),
      tehnology,
    });
  };
  const addEmployee = async (
    name,
    email,
    experience,
    img,
    language,
    location,
    phone,
    price,
    tehnology
  ) => {
    await addDoc(collection(db, "users"), {
      name,
      email,
      experience: Number(experience),
      img,
      language,
      location,
      phone: Number(phone),
      price: Number(price),
      tehnology,
    });
  };
  const deleteEmployee = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };
  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let employeesArray = [];
      querySnapshot.forEach((doc) => {
        employeesArray.push({ ...doc.data(), id: doc.id });
      });
      setEmployees(employeesArray);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="App">
      <Header employees={employees} />
      {showEmployees ? (
        <EmployeesList
          employees={employees}
          updateEmployee={updateEmployee}
          deleteEmployee={deleteEmployee}
        />
      ) : (
        <p>You do not have any employees to show</p>
      )}
      <div className="flex flex-wrap justify-center m-2">
        <AddEmployee addEmployee={addEmployee} />
      </div>
    </div>
  );
}

export default App;
