import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GridView() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className=" bg-gray-200 mx-auto p-4">
      <h2 className="text-2xl   text-gray-800 rounded-3xl w-fit  mx-auto font-medium mb-10">Students List</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {students.map((student) => (
          <div
            key={student.id}
            className="  my-5 flex items-center justify-center "
          >
            <div className="max-w-md w-full bg-white shadow-xl rounded-xl h-[280px]  p-6">
              <div className="flex items-center mb-6">
                <div className="">
                  <h3 className="text-xl font-semibold">{student.name}</h3>
                  <p className="text-gray-600">{student.username}</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Contact Information</h4>
                <p className="text-gray-800">
                  Email:{" "}
                  <a
                    href="mailto:Sincere@april.biz"
                    className="text-blue-500 hover:underline"
                  >
                    {student.email}
                  </a>
                </p>
                <p className="text-gray-800">
                  Phone:{" "}
                  <a
                    href="tel:+17707368031"
                    className="text-blue-500 hover:underline"
                  >
                    {student.phone}
                  </a>
                </p>
                <p className="text-gray-800">
                  Website:{" "}
                  <a
                    href="https://hildegard.org"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                  >
                    {student.website}
                  </a>
                </p>
              </div>
              <Link
                to={`/tiles/${student.id}`}
                className="px-4 text-white py-2 font-medium rounded-2xl bg-cyan-700 "
              >
                View More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridView;
