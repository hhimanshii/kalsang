import React from "react";
import CountUp from "react-countup";
import { Briefcase, Users, Calendar, Handshake } from "lucide-react";

const Stats = () => {
  return (
    <div className="relative flex flex-col sm:flex-row flex-wrap gap-4 mt-6 p-6 rounded-xl bg-gray-100">
      {/* Black overlay */}

      <div
        className="relative flex flex-col items-center justify-center text-center text-white rounded-lg shadow-md p-6 overflow-hidden flex-1"
        style={{
          backgroundImage: "url('/stats1.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay layer */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] rounded-lg"></div>

        {/* Content above overlay */}
        <div className="relative z-10 flex flex-col items-center">
          <Handshake size={32} className="text-white mb-2" />
          <CountUp
            end={120}
            duration={3}
            className="text-4xl font-bold text-white"
          />
          <p className="text-white font-bold mt-1">Projects Completed</p>
        </div>
      </div>
      <div
        className="relative flex flex-col items-center justify-center text-center text-white rounded-lg shadow-md p-6 overflow-hidden flex-1"
        style={{
          backgroundImage: "url('/stats2.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay layer */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] rounded-lg"></div>

        {/* Content above overlay */}
        <div className="relative z-10 flex flex-col items-center">
          <Users size={32} className="text-white mb-2" />
          <CountUp
            end={50}
            duration={3}
            className="text-4xl font-bold text-white"
          />
          <p className="text-white font-bold mt-1">Clients Served</p>
        </div>
      </div>
      <div
        className="relative flex flex-col items-center justify-center text-center text-white rounded-lg shadow-md p-6 overflow-hidden flex-1"
        style={{
          backgroundImage: "url('/stats3.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay layer */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] rounded-lg"></div>

        {/* Content above overlay */}
        <div className="relative z-10 flex flex-col items-center">
          <Calendar size={32} className="text-white mb-2" />
          <CountUp
            end={15}
            duration={3}
            className="text-4xl font-bold text-white"
          />
          <p className="text-white font-bold mt-1">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
