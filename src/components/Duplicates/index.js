import React from "react";

function Duplicates({ emails }) {
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Duplicate</th>
          </tr>
        </thead>
        <tbody>
          {emails &&
            emails.map((email, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="border px-4 py-2">{email.email_address}</td>
                <td className="border px-4 py-2">
                  {email.isDuplicated ? "✅" : "❌"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Duplicates;
