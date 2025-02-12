import React from "react";

function AdditionalInformation() {
  return (
    <div className="p-6 bg-white ">
      <div
        className=""
        id="tab-additional_information"
        role="tabpanel"
        aria-labelledby=""
      >
        <h2 className="text-2xl font-bold mb-4">Additional information</h2>
        <table
          className="w-full text-left border border-collapse"
          aria-label="Product Details"
        >
          <tbody>
            <tr className="border-b ">
              <th className="py-4 px-3 font-medium text-gray-700 " scope="row">
                Color
              </th>
              <td className="py-4 text-gray-600">
                <p>Black, Green, Orange, Red</p>
              </td>
            </tr>
            <tr className="border-b">
              <th className="py-4 px-3 font-medium text-gray-700 " scope="row">
                Weight
              </th>
              <td className="py-4 text-gray-600">
                <p>0.5 Kg, 1 Kg, 2 Kg, 5 Kg</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdditionalInformation;
