import React from "react";

import {
  ArrowLeft,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const shippingOrders = [
  {
    id: "OD2001",
    customer: "Arun Kumar",
    product: "Smart Watch",
    price: "₹9,999",
    status: "Shipping",
  },
  {
    id: "OD2002",
    customer: "Vijay",
    product: "Laptop",
    price: "₹74,999",
    status: "Shipping",
  },
  {
    id: "OD2003",
    customer: "Rahul",
    product: "Camera",
    price: "₹45,999",
    status: "Shipping",
  },
  {
    id: "OD2004",
    customer: "Karthik",
    product: "Bluetooth Speaker",
    price: "₹4,999",
    status: "Shipping",
  },
  {
    id: "OD2005",
    customer: "Suresh",
    product: "Gaming Mouse",
    price: "₹2,999",
    status: "Shipping",
  },
];

const ShippingOrders = () => {

  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0f172a] text-white py-10 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex items-center gap-5 mb-10">

          {/* Back */}
          <button
            onClick={() =>
              navigate(-1)
            }
            className="
              w-14
              h-14
              rounded-2xl
              bg-white/10
              hover:bg-white/20
              flex
              items-center
              justify-center
            "
          >
            <ArrowLeft size={28} />
          </button>

          <div>

            <h1 className="text-5xl font-extrabold">
              Shipping Orders
            </h1>

            <p className="text-gray-400 mt-2">
              Shipping Customer Details
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-orange-500 text-white">

              <tr>

                <th className="p-5 text-left">
                  Order ID
                </th>

                <th className="p-5 text-left">
                  Customer
                </th>

                <th className="p-5 text-left">
                  Product
                </th>

                <th className="p-5 text-left">
                  Price
                </th>

                <th className="p-5 text-left">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>

              {shippingOrders.map((item) => (

                <tr
                  key={item.id}
                  className="
                    border-b
                    border-white/10
                    hover:bg-white/5
                  "
                >

                  <td className="p-5">
                    {item.id}
                  </td>

                  <td className="p-5">
                    {item.customer}
                  </td>

                  <td className="p-5">
                    {item.product}
                  </td>

                  <td className="p-5 text-green-400 font-bold">
                    {item.price}
                  </td>

                  <td className="p-5">

                    <span
                      className="
                        px-4
                        py-2
                        rounded-xl
                        text-sm
                        font-bold
                        bg-orange-500
                      "
                    >
                      {item.status}
                    </span>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ShippingOrders;