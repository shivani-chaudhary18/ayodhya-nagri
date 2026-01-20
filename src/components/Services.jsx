const services = [
  "Temple Guides",
  "Travel Assistance",
  "Hotel Booking",
  "Spiritual Tours",
];

const Services = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-orange-600">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="p-6 font-semibold text-center text-gray-800 bg-orange-100 rounded-xl"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
