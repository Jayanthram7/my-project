import React from 'react';
import Golden from "../../Assets/GoldenTemple.jpg"
import img2 from "../../Assets/Goa.jpg"
const TourPackage = () => {
  return (
    <div className="p-8 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-start bg-white p-6 rounded-lg shadow-md mb-6">
        <div>
          <h1 className="text-3xl font-bold">India’s most selling Golden Triangle Tour</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <span className="ml-2 text-gray-600">(5.0)</span>
            <a href="#reviews" className="ml-2 text-indigo-500 underline">17 Reviews</a>
          </div>
          <p className="mt-2 text-gray-500">6 days</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold text-gray-900">₹20,000/-</span>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-full mt-2">Check Availability</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mb-8">
        <img
          src={Golden} // Replace with actual image source
          alt="Golden Triangle Tour"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Places You Will See Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Places You Will See</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <img src={img2} alt="New Delhi" className="w-full rounded-lg" />
            <p className="mt-2 text-gray-700 font-semibold">New Delhi</p>
          </div>
          <div className="text-center">
            <img src="https://example.com/agra.jpg" alt="Agra" className="w-full rounded-lg" />
            <p className="mt-2 text-gray-700 font-semibold">Agra</p>
          </div>
          <div className="text-center">
            <img src="https://example.com/jaipur.jpg" alt="Jaipur" className="w-full rounded-lg" />
            <p className="mt-2 text-gray-700 font-semibold">Jaipur</p>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
        <p className="text-gray-600 mb-6">
          Start and end in New Delhi! With the in-depth cultural tour India’s Most Selling Golden Triangle Tour, 
          you have a 6-day tour package taking you through New Delhi, India, and 2 other destinations in India.
          This package includes accommodation in a hotel, expert guide, meals, transport, and more.
        </p>
        <div className="bg-white p-4 rounded-lg shadow">
          <details className="mb-4">
            <summary className="font-semibold">Introduction</summary>
            <p className="text-gray-600 mt-2">Overview of the tour details and highlights.</p>
          </details>

          <details className="mb-4">
            <summary className="font-semibold">DAY 1: Arrival in Delhi</summary>
            <p className="text-gray-600 mt-2">Arrive in Delhi, explore local markets and historical sites.</p>
          </details>

          <details className="mb-4">
            <summary className="font-semibold">DAY 2: Delhi Sightseeing</summary>
            <p className="text-gray-600 mt-2">Full-day sightseeing tour of Delhi, covering India Gate, Qutub Minar, and more.</p>
          </details>

          <details className="mb-4">
            <summary className="font-semibold">DAY 3: Delhi to Agra (210 km)</summary>
            <p className="text-gray-600 mt-2">Drive to Agra and visit the famous Taj Mahal.</p>
          </details>

          <details className="mb-4">
            <summary className="font-semibold">DAY 4: Agra to Jaipur (240 km)</summary>
            <p className="text-gray-600 mt-2">Drive to Jaipur, the Pink City, and visit Amber Fort.</p>
          </details>

          <details className="mb-4">
            <summary className="font-semibold">DAY 5: Jaipur Sightseeing</summary>
            <p className="text-gray-600 mt-2">Explore Jaipur’s historical landmarks such as Hawa Mahal, City Palace, and more.</p>
          </details>

          <details className="mb-4">
            <summary className="font-semibold">DAY 6: Jaipur to Delhi (250 km)</summary>
            <p className="text-gray-600 mt-2">Return to Delhi, end of the tour.</p>
          </details>
        </div>
      </div>

      {/* What's Included Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What's Included</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <details className="mb-4">
            <summary className="font-semibold">Accommodation</summary>
            <p className="text-gray-600 mt-2">Stay in 3-star hotels with breakfast included.</p>
          </details>

          <details className="mb-4">
            <summary className="font-semibold">Meals</summary>
            <p className="text-gray-600 mt-2">Daily breakfast at the hotels and one traditional dinner in Jaipur.</p>
          </details>

          <details className="mb-4">
            <summary className="font-semibold">Transport</summary>
            <p className="text-gray-600 mt-2">Air-conditioned vehicle for all transfers and sightseeing.</p>
          </details>

          <details>
            <summary className="font-semibold">Guide</summary>
            <p className="text-gray-600 mt-2">Expert tour guide for all destinations.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default TourPackage;
