import React from "react";

import {
  ArrowLeft,
  CreditCard,
  Wallet,
  BadgeCheck,
  Clock,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const payments = [
  {
    id: "PAY1001",
    customer: "Arun Kumar",
    amount: "₹7,499",
    method: "UPI",
    status: "Paid",
    date: "12 May 2026",
  },
  {
    id: "PAY1002",
    customer: "Vijay",
    amount: "₹12,999",
    method: "Credit Card",
    status: "Paid",
    date: "13 May 2026",
  },
  {
    id: "PAY1003",
    customer: "Rahul",
    amount: "₹2,499",
    method: "Wallet",
    status: "Pending",
    date: "14 May 2026",
  },
  {
    id: "PAY1004",
    customer: "Karthik",
    amount: "₹74,999",
    method: "Debit Card",
    status: "Paid",
    date: "15 May 2026",
  },
];

const Payments = () => {

  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0f172a] text-white py-6 px-3 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex items-center gap-3 md:gap-5 mb-8 md:mb-10">

          {/* Back */}
          <button
            onClick={() =>
              navigate(-1)
            }
            className="
              w-12
              h-12
              md:w-14
              md:h-14
              rounded-2xl
              bg-white/10
              hover:bg-white/20
              flex
              items-center
              justify-center
              transition
            "
          >
            <ArrowLeft size={24} />
          </button>

          <div>

            <h1 className="text-3xl md:text-5xl font-extrabold">
              Payments
            </h1>

            <p className="text-gray-400 mt-1 text-sm md:text-base">
              Manage Customer Transactions
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">

          {/* Total */}
          <div className="bg-cyan-500 rounded-2xl md:rounded-3xl p-4 md:p-6">

            <CreditCard size={28} />

            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              120
            </h2>

            <p className="mt-2 text-sm md:text-lg">
              Total Payments
            </p>
          </div>

          {/* Paid */}
          <div className="bg-green-500 rounded-2xl md:rounded-3xl p-4 md:p-6">

            <BadgeCheck size={28} />

            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              110
            </h2>

            <p className="mt-2 text-sm md:text-lg">
              Paid
            </p>
          </div>

          {/* Pending */}
          <div className="bg-orange-500 rounded-2xl md:rounded-3xl p-4 md:p-6">

            <Clock size={28} />

            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              10
            </h2>

            <p className="mt-2 text-sm md:text-lg">
              Pending
            </p>
          </div>

          {/* Revenue */}
          <div className="bg-pink-500 rounded-2xl md:rounded-3xl p-4 md:p-6">

            <Wallet size={28} />

            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              ₹5L
            </h2>

            <p className="mt-2 text-sm md:text-lg">
              Revenue
            </p>
          </div>
        </div>

        {/* Payments List */}
        <div className="space-y-6">

          {payments.map((item) => (

            <div
              key={item.id}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-4
                md:p-6
                flex
                flex-col
                xl:flex-row
                gap-6
                xl:items-center
                xl:justify-between
              "
            >

              {/* Left */}
              <div>

                <p className="text-cyan-400 text-sm">
                  Payment ID : {item.id}
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  {item.customer}
                </h2>

                <p className="text-green-400 text-xl md:text-2xl font-bold mt-4">
                  {item.amount}
                </p>

                <p className="text-gray-400 mt-3">
                  Date : {item.date}
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4 w-full xl:w-auto">

                {/* Method */}
                <div className="bg-white/10 px-6 py-3 rounded-2xl text-center font-semibold">
                  {item.method}
                </div>

                {/* Status */}
                <div
                  className={`
                    px-6
                    py-3
                    rounded-2xl
                    text-center
                    font-bold
                    ${
                      item.status === "Paid"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }
                  `}
                >
                  {item.status}
                </div>

                {/* Button */}
                <button
                  className="
                    bg-cyan-500
                    hover:bg-cyan-600
                    px-8
                    py-3
                    rounded-2xl
                    font-bold
                    transition
                  "
                >
                  View Details
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Payments;