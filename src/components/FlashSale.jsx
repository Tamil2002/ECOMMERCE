import React, { useEffect, useState } from "react";

const FlashSale = () => {

  // Timer
  const [timeLeft, setTimeLeft] =
    useState({
      days: 5,
      hours: 12,
      minutes: 45,
      seconds: 30,
    });

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        let {
          days,
          hours,
          minutes,
          seconds,
        } = prev;

        if (seconds > 0) {

          seconds--;

        } else {

          seconds = 59;

          if (minutes > 0) {

            minutes--;

          } else {

            minutes = 59;

            if (hours > 0) {

              hours--;

            } else {

              hours = 23;

              if (days > 0) {

                days--;
              }
            }
          }
        }

        return {
          days,
          hours,
          minutes,
          seconds,
        };
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <section className="bg-[#0f172a] text-white py-20">

      <div className="max-w-7xl mx-auto px-4">

        {/* Main */}
        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-[35px]
            p-8
            md:p-14
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
        >

          {/* Left */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[5px] font-semibold mb-4">
              Limited Offer
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Flash Sale
              <span className="text-orange-400">
                {" "}70% OFF
              </span>
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-8">
              Grab your favorite products with amazing discounts.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  hover:from-pink-500
                  hover:to-orange-400
                  px-8
                  py-3
                  rounded-full
                  font-semibold
                  transition
                  duration-300
                "
              >
                Shop Now
              </button>

              <button
                className="
                  border
                  border-white/20
                  hover:bg-white
                  hover:text-black
                  px-8
                  py-3
                  rounded-full
                  font-semibold
                  transition
                  duration-300
                "
              >
                Explore Deals
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center">

            {/* Offer Circle */}
            <div
              className="
                w-52
                h-52
                rounded-full
                bg-gradient-to-br
                from-orange-400
                via-pink-500
                to-purple-600
                flex
                items-center
                justify-center
                text-center
              "
            >

              <div>

                <h3 className="text-5xl font-extrabold">
                  70%
                </h3>

                <p className="mt-2 text-lg font-semibold">
                  OFF SALE
                </p>
              </div>
            </div>

            {/* Timer */}
            <div className="grid grid-cols-4 gap-4 mt-10">

              {[
                {
                  label: "Days",
                  value: timeLeft.days,
                },
                {
                  label: "Hours",
                  value: timeLeft.hours,
                },
                {
                  label: "Mins",
                  value: timeLeft.minutes,
                },
                {
                  label: "Secs",
                  value: timeLeft.seconds,
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white/10
                    w-20
                    h-20
                    rounded-2xl
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >

                  <span className="text-2xl font-bold text-cyan-400">
                    {item.value}
                  </span>

                  <span className="text-xs text-gray-300 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;