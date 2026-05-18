import React from "react";

import {
  ArrowLeft,
  Package,
  Truck,
  CheckCircle,
  Clock,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const orders = [
  {
    id: "OD1001",
    customer: "Arun Kumar",
    product: "Wireless Headphone",
    price: "₹7,499",
    status: "Delivered",
    date: "12 May 2026",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: "OD1002",
    customer: "Vijay",
    product: "Smart Watch",
    price: "₹9,999",
    status: "Shipped",
    date: "13 May 2026",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: "OD1003",
    customer: "Rahul",
    product: "Gaming Mouse",
    price: "₹2,999",
    status: "Processing",
    date: "14 May 2026",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: "OD1004",
    customer: "Karthik",
    product: "Laptop",
    price: "₹74,999",
    status: "Delivered",
    date: "15 May 2026",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
];

const Orders = () => {

  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0f172a] text-white py-6 px-3 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
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

          {/* Title */}
          <div>

            <h1 className="text-3xl md:text-5xl font-extrabold">
              Orders
            </h1>

            <p className="text-gray-400 mt-1 text-sm md:text-base">
              Manage Customer Orders
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">

          {/* Total Orders */}
          <div
            className="
              bg-cyan-500
              rounded-2xl
              md:rounded-3xl
              p-4
              md:p-6
            "
          >
            <Package size={28} />

            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              12
            </h2>

            <p className="mt-2 text-sm md:text-lg">
              Total Orders
            </p>
          </div>

          {/* Shipping */}
          <div
            className="
              bg-orange-500
              rounded-2xl
              md:rounded-3xl
              p-4
              md:p-6
            "
          >
            <Truck size={28} />

            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              3
            </h2>

            <p className="mt-2 text-sm md:text-lg">
              Shipping
            </p>
          </div>

          {/* Delivered */}
          <div
            className="
              bg-green-500
              rounded-2xl
              md:rounded-3xl
              p-4
              md:p-6
            "
          >
            <CheckCircle size={28} />

            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              8
            </h2>

            <p className="mt-2 text-sm md:text-lg">
              Delivered
            </p>
          </div>

          {/* Processing */}
          <div
            className="
              bg-pink-500
              rounded-2xl
              md:rounded-3xl
              p-4
              md:p-6
            "
          >
            <Clock size={28} />

            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              1
            </h2>

            <p className="mt-2 text-sm md:text-lg">
              Processing
            </p>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order.id}
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
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">

                {/* Image */}
                <img
                  src={order.image}
                  alt={order.product}
                  className="
                    w-32
                    h-32
                    md:w-40
                    md:h-40
                    rounded-3xl
                    object-cover
                  "
                />

                {/* Details */}
                <div className="text-center sm:text-left">

                  <p className="text-cyan-400 text-sm">
                    Order ID : {order.id}
                  </p>

                  <p className="text-gray-300 mt-2">
                    Customer : {order.customer}
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold mt-3">
                    {order.product}
                  </h2>

                  <p className="text-green-400 text-xl md:text-2xl font-bold mt-4">
                    {order.price}
                  </p>

                  <p className="text-gray-400 mt-3 text-sm md:text-base">
                    Ordered On : {order.date}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4 w-full xl:w-auto">

                {/* Status */}
                <div
                  className={`
                    px-6
                    py-3
                    rounded-2xl
                    text-center
                    font-bold
                    ${
                      order.status === "Delivered"
                        ? "bg-green-500"
                        : order.status === "Shipped"
                        ? "bg-orange-500"
                        : "bg-pink-500"
                    }
                  `}
                >
                  {order.status}
                </div>

                {/* Buttons */}
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
                  Track Order
                </button>

                <button
                  className="
                    bg-white/10
                    hover:bg-white/20
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

export default Orders;