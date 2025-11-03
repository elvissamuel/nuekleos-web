"use client";

import Image from "next/image";

const MeetTheTeam = () => {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Heading */}
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-3xl font-bold text-white">
              Meet the team
            </h2>
          </div>

          {/* Team Members */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Lanre */}
            <div className="relative w-full max-w-[280px] mx-auto">
              {/* Lanre's Image */}
              <div className="relative z-10 w-full h-[360px] overflow-hidden bg-gray-200">
                <Image
                  src="/about/lanre.png"
                  alt="Olanrewaju Idris"
                  fill
                  className="object-cover"
                />
                
                {/* Info Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-white border-2 border-black text-center py-3 px-4">
                  <h3 className="text-base font-bold mb-0.5">Olanrewaju Idris</h3>
                  <p className="text-xs text-gray-700">Managing Partner</p>
                </div>
              </div>

              {/*shadow card*/}
              <div className="absolute top-[12px] right-[-12px] w-full h-[360px] bg-white rounded-sm z-0"></div>
            </div>

            {/* Daramola */}
            <div className="relative w-full max-w-[280px] mx-auto">
              {/* Daramola's Image */}
              <div className="relative z-10 w-full h-[360px] md:h-[360px] overflow-hidden bg-gray-200">
                <Image
                  src="/about/daramola.png"
                  alt="Daramola Benjamin"
                  fill
                  className="object-cover"
                />
                
                {/* Info Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-white border-2 border-black text-center py-3 px-4">
                  <h3 className="text-base font-bold mb-0.5">Daramola Benjamin</h3>
                  <p className="text-xs text-gray-700">Head of Digital</p>
                </div>
              </div>

              {/* shadow card */}
              <div className="absolute top-[12px] right-[-12px] w-full h-[360px] bg-white rounded-sm z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;