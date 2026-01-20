const highLights = [
  "Shri Ram Janmabhoomi",
  "Hanuman Garhi",
  "Kanak Bhawan",
  "Saryu Ghat Aarti",
];

const HighLights = () => {
  return (
    <section className="px-6 py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-orange-600">
          Key Attractions
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highLights.map((item) => (
            <div
              key={item}
              className="p-6 text-center transition bg-white shadow-md rounded-2xl hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighLights;
