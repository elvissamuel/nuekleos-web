"use client";

import Image from "next/image";

const OtherTeamMembers = () => {
  const teamMembers = [
    {
      name: "Motola Olusoga",
      role: "Creative Director",
      image: "/about/motola.png",
    },
    {
      name: "Tomisin Olabode",
      role: "Associate Creative Director",
      image: "/about/tomisin.png",
    },
    {
      name: "Lydia Dawodu",
      role: "Digital Account Manager",
      image: "/about/lydia.png",
    },
    {
      name: "Kemi Subair",
      role: "Snr Digital Account Manager",
      image: "/about/kemi.png",
    },
    {
      name: "Oyinlola Obey",
      role: "Account Manager",
      image: "/about/oyinlola.png",
    },
    {
      name: "David Adeitan",
      role: "Digital Account Manager",
      image: "/about/david.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* All team members with same frame style */}
          {teamMembers.map((member, index) => (
            <div key={index} className="relative w-full max-w-[320px] mx-auto">
              {/* Person Image - fully rounded */}
              <div className="relative z-10 w-full h-[380px] overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                
                {/* Info Card - inside image at bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-white border-2 border-black text-center py-3 px-4">
                  <h3 className="text-base font-bold mb-0.5">{member.name}</h3>
                  <p className="text-xs text-gray-700">{member.role}</p>
                </div>
              </div>

              {/* Black border frame - left/right flush, top/bottom offset */}
              <div className="absolute top-[-8px] left-0 right-0 bottom-[8px] border-2 border-black rounded-lg z-5"></div>

              {/* White shadow card behind everything */}
              <div className="absolute top-[12px] right-[-12px] w-full h-[380px] bg-white rounded-lg z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTeamMembers;