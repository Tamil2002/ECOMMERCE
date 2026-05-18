import React from "react";

import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  User,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "arun@gmail.com",
    phone: "+91 9876543210",
    location: "Chennai",
    orders: 12,
  },
  {
    id: 2,
    name: "Vijay",
    email: "vijay@gmail.com",
    phone: "+91 9876543211",
    location: "Coimbatore",
    orders: 8,
  },
  {
    id: 3,
    name: "Rahul",
    email: "rahul@gmail.com",
    phone: "+91 9876543212",
    location: "Madurai",
    orders: 15,
  },
  {
    id: 4,
    name: "Karthik",
    email: "karthik@gmail.com",
    phone: "+91 9876543213",
    location: "Salem",
    orders: 5,
  },
  {
    id: 5,
    name: "Suresh",
    email: "suresh@gmail.com",
    phone: "+91 9876543214",
    location: "Trichy",
    orders: 11,
  },
  {
    id: 6,
    name: "Ajith",
    email: "ajith@gmail.com",
    phone: "+91 9876543215",
    location: "Erode",
    orders: 9,
  },
];

const Users = () => {

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
              Users
            </h1>

            <p className="text-gray-400 mt-2">
              Manage Customer Details
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-cyan-500 text-white">

              <tr>

                <th className="p-5 text-left">
                  User
                </th>

                <th className="p-5 text-left">
                  Email
                </th>

                <th className="p-5 text-left">
                  Phone
                </th>

                <th className="p-5 text-left">
                  Location
                </th>

                <th className="p-5 text-left">
                  Orders
                </th>

                <th className="p-5 text-left">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="
                    border-b
                    border-white/10
                    hover:bg-white/5
                  "
                >

                  {/* User */}
                  <td className="p-5">

                    <div className="flex items-center gap-4">

                      <div
                        className="
                          w-14
                          h-14
                          rounded-full
                          bg-cyan-500
                          flex
                          items-center
                          justify-center
                          text-xl
                          font-bold
                        "
                      >
                        {user.name.charAt(0)}
                      </div>

                      <div>

                        <h2 className="font-bold text-lg">
                          {user.name}
                        </h2>

                        <p className="text-gray-400 text-sm">
                          Customer ID : #{user.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="p-5">

                    <div className="flex items-center gap-2">

                      <Mail size={18} />

                      <span>
                        {user.email}
                      </span>
                    </div>
                  </td>

                  {/* Phone */}
                  <td className="p-5">

                    <div className="flex items-center gap-2">

                      <Phone size={18} />

                      <span>
                        {user.phone}
                      </span>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="p-5">

                    <div className="flex items-center gap-2">

                      <MapPin size={18} />

                      <span>
                        {user.location}
                      </span>
                    </div>
                  </td>

                  {/* Orders */}
                  <td className="p-5">

                    <span
                      className="
                        bg-orange-500
                        px-4
                        py-2
                        rounded-xl
                        font-bold
                      "
                    >
                      {user.orders} Orders
                    </span>
                  </td>

                  {/* Action */}
                  <td className="p-5">

                    <button
                      className="
                        bg-cyan-500
                        hover:bg-cyan-600
                        px-5
                        py-2
                        rounded-xl
                        font-bold
                        transition
                      "
                    >
                      View
                    </button>
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

export default Users;