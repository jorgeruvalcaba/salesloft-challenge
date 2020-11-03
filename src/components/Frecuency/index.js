import React from "react";

function Frecuency({ chars }) {
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Character</th>
            <th className="px-4 py-2">Count</th>
          </tr>
        </thead>
        <tbody>
          {chars &&
            chars.map((char, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="border px-4 py-2">{char.key}</td>
                <td className="border px-4 py-2">{char.value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Frecuency;
