import React, { useState, useEffect } from "react";
import axios from "axios";

const DutyAssignment = () => {
  const [duties, setDuties] = useState([]);
  const [officerId, setOfficerId] = useState("");
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");

  // Fetch Duty Assignments
  const fetchDuties = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/dutyAssignments");
      setDuties(response.data);
    } catch (error) {
      console.error("Error fetching duties:", error);
    }
  };

  useEffect(() => {
    fetchDuties();
  }, []);

  // Add Duty Assignment
  const addDuty = async () => {
    if (!officerId || !date || !shift) {
      alert("Please fill all fields!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/dutyAssignments", {
        officer_id: officerId,
        date,
        shift,
      });
      fetchDuties(); // Refresh Data
      setOfficerId("");
      setDate("");
      setShift("");
    } catch (error) {
      console.error("Error adding duty:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Duty Assignments</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Officer ID"
          value={officerId}
          onChange={(e) => setOfficerId(e.target.value)}
          className="border p-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2"
        />
        <select value={shift} onChange={(e) => setShift(e.target.value)} className="border p-2">
          <option value="">Select Shift</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
        </select>
        <button onClick={addDuty} className="bg-blue-500 text-white px-4 py-2">Add Duty</button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Officer ID</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Shift</th>
          </tr>
        </thead>
        <tbody>
          {duties.map((duty) => (
            <tr key={duty.id}>
              <td className="p-2 border">{duty.officer_id}</td>
              <td className="p-2 border">{duty.date}</td>
              <td className="p-2 border">{duty.shift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DutyAssignment;
