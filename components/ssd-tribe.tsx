import Image from "next/image"

const tribeMembers = [
  {
    name: "Ashleigh Brinkworth",
    role: "Qualified PT and ICN Competitor",
    image: "/ssd-tribe/1n.webp",
  },
  {
    name: "Jessica Chapman",
    role: "Emergency Nurse",
    image: "/ssd-tribe/2n.webp",
  },
  {
    name: "Caine Warburton",
    role: "Elite Athlete & Coach",
    image: "/ssd-tribe/3n.webp",
  },
  {
    name: "Samantha Paton",
    role: "Nutritionist",
    image: "/ssd-tribe/4n.webp",
  },
]

export default function SSDTribe() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sport Supplements Direct Tribe</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our inspiring SSD Tribe – real people, real results, real stories.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tribeMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden hover:bg-turquoise-50 border border-gray-900"
            >
              <div
                className="relative h-[350px] overflow-hidden bg-center bg-cover group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url('${member.image}')` }}
                aria-label={member.name}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-0 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 