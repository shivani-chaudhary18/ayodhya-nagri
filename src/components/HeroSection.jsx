import react from 'react';

const HeroSection = () => {
    return (
        <section className="w-full h-screen bg-gradient-to-r from-yellow-100 via-yellow-200 to-orange-300 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-orange-700 mb-6 drop-shadow-lg">
                Welcome to Ayodhya Nagri
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 max-w-2xl mb-8">
                Experience the divine city through our immersive platform. Explore culture, history, and spirituality like never before.
            </p>
            <button className="mt-6 md:mt-8 px-8 py-4 md:px-10 md:py-5 bg-orange-500 text-white rounded-full text-lg md:text-xl font-semibold hover:bg-orange-600 transition duration-300 ease-in-out shadow-lg">
                Explore Now
            </button>
        </section>
    );
};

export default HeroSection;
