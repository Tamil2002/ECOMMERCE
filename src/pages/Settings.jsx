import React from "react";

import {
  ArrowLeft,
  Bell,
  Shield,
  User,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const Settings = () => {

  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0f172a] text-white p-4 md:p-8">

      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-10">

          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"
          >
            <ArrowLeft />
          </button>

          <h1 className="text-3xl md:text-5xl font-bold">
            Settings
          </h1>
        </div>

        <div className="space-y-6">

          <div className="bg-white/5 rounded-3xl p-6 flex items-center gap-4">

            <User size={30} />

            <div>

              <h2 className="text-2xl font-bold">
                Profile Settings
              </h2>

              <p className="text-gray-400">
                Manage profile details
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 flex items-center gap-4">

            <Bell size={30} />

            <div>

              <h2 className="text-2xl font-bold">
                Notifications
              </h2>

              <p className="text-gray-400">
                Manage alerts and updates
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 flex items-center gap-4">

            <Shield size={30} />

            <div>

              <h2 className="text-2xl font-bold">
                Security
              </h2>

              <p className="text-gray-400">
                Password and privacy settings
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Settings;