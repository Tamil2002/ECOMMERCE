import React from "react";

import {
  ArrowLeft,
  Star,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const reviews = [
  {
    customer: "Arun",
    review: "Amazing product quality 🔥",
  },
  {
    customer: "Vijay",
    review: "Fast delivery and nice support",
  },
  {
    customer: "Rahul",
    review: "Worth the money 💯",
  },
];

const Reviews = () => {

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
            Reviews
          </h1>
        </div>

        <div className="space-y-6">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >

              <div className="flex items-center gap-2 text-yellow-400">

                <Star fill="yellow" />

                <Star fill="yellow" />

                <Star fill="yellow" />

                <Star fill="yellow" />

                <Star fill="yellow" />
              </div>

              <h2 className="text-2xl font-bold mt-4">
                {item.customer}
              </h2>

              <p className="text-gray-300 mt-3">
                {item.review}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;