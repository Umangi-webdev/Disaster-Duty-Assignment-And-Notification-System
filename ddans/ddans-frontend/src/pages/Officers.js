import { useEffect, useState } from "react";
import axios from "axios";

const Officers = () => {
  const [officers, setOfficers] = useState([]); // ✅ Ensure default value is an array

  useEffect(() => {
    axios.get("http://localhost:5000/api/officers")
      .then((response) => {
        if (Array.isArray(response.data)) {  // ✅ Check if data is an array
          setOfficers(response.data);
        } else {
          setOfficers([]);  // ✅ Prevent map() error
        }
      })
      .catch((error) => {
        console.error("Error fetching officers:", error);
        setOfficers([]); // ✅ Prevent crash
      });
  }, []);

  return (
    <div>
      <h1>Officers List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Office</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {officers.map((officer) => (
            <tr key={officer.id}>
              <td>{officer.name}</td>
              <td>{officer.mobile}</td>
              <td>{officer.email}</td>
              <td>{officer.office}</td>
              <td>{officer.date}</td>
              <td>{officer.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Officers;
