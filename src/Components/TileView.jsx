import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function TileView() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setStudent(data));
  }, [id]);

  const handleDelete = (id) => {
    console.log(`Delete student with ID: ${id}`);
    // Add your delete logic here (e.g., send a DELETE request to your server)
    // For this example, we'll simply log the action and redirect
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        console.log("Student deleted successfully");
        navigate("/tiles"); // Redirect to Tile View after deletion
      }
    });
  };

  if (!student) {
    return (
      <div className="flex justify-center h-screen items-center">
        Loading...
      </div>
    );
  }

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Student Details</h2>
      <motion.div
        className="container mx-auto p-4 bg-white max-w-md rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
      
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold text-xl">{student.name}</h3>
          <p>
            Email:{" "}
            <a
              href={`mailto:${student.email}`}
              className="text-blue-500 hover:underline"
            >
              {student.email}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href={`tel:${student.phone}`}
              className="text-blue-500 hover:underline"
            >
              {student.phone}
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href={`https://${student.website}`}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {student.website}
            </a>
          </p>

          <div className="mb-4">
            <h4 className="text-lg font-semibold">Address</h4>
            <p className="text-gray-800">Street: {student.address.street}</p>
            <p className="text-gray-800">Suite: {student.address.suite}</p>
            <p className="text-gray-800">City: {student.address.city}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <p className="text-gray-800">Name: {student.company.name}</p>
            <p className="text-gray-800 mb-6">
              Catchphrase: {student.company.catchPhrase}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit
            </button>
            <button
              onClick={() => handleDelete(student.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Flag
            </button>
          </div>

          <Link to="/" className="text-blue-500 block mt-4">
            Back to GridView           </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default TileView;
