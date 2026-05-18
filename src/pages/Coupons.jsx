import React from "react";

import {
  ArrowLeft,
  TicketPercent,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const coupons = [
  {
    code: "SAVE50",
    discount: "50% OFF",
  },
  {
    code: "FESTIVE30",
    discount: "30% OFF",
  },
  {
    code: "NEWUSER20",
    discount: "20% OFF",
  },
];

const Coupons = () => {

  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0f172a] text-white p-4 md:p-8">

      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-10">

          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"
          >
            <ArrowLeft />
          </button>

          <h1 className="text-3xl md:text-5xl font-bold">
            Coupons
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {coupons.map((coupon, index) => (

            <div
              key={index}
              className="bg-pink-500 rounded-3xl p-8"
            >

              <TicketPercent size={40} />

              <h2 className="text-3xl font-bold mt-5">
                {coupon.discount}
              </h2>

              <p className="mt-3 text-lg">
                Code : {coupon.code}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Coupons;