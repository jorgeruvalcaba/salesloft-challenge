import React from "react";

function People({ error, people }) {
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Title</th>
          </tr>
        </thead>
        <tbody>
          {error && `ERROR: ${error}`}
          {people &&
            people.data.map((person) => (
              <tr key={person.id} className="bg-gray-100">
                <td className="border px-4 py-2">{person.display_name}</td>
                <td className="border px-4 py-2">{person.email_address}</td>
                <td className="border px-4 py-2">{person.title}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default People;
