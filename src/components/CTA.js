export default function WebsiteCTA() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Card */}
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 text-center px-8 py-16 shadow-xl">

          {/* Heading */}
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Ready To Get A Website That Actually
            <br />
            Brings Customers?
          </h2>

          {/* Description */}
          <p className="text-orange-100 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Tubehelper Lite builds beautiful, high-converting websites designed
            to help businesses grow online.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-[#f5e8d3] text-orange-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition">
              Get Your Website Built
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}