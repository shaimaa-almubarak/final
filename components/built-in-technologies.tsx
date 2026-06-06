export function BuiltInTechnologies() {
  return (
    <section className="w-full bg-[#e8e8e8] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header section - centered top */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Built-In Technologies
          </h2>
          <p className="text-sm text-gray-600">
            Optimized lenses with advanced built-in technologies
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column - Text content */}
          <div className="flex flex-col">
            {/* Subheading with accent line */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                Built-In<br />Technologies
              </h3>
              <p className="text-xs md:text-sm text-gray-700 italic mb-4">
                From Prescription to Patient Seamlessly.
              </p>
              {/* Blue accent line */}
              <div className="h-1 w-10 bg-blue-500 mb-5"></div>
            </div>

            {/* Description text */}
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-6">
              Optika delivers to you Premium Digital Lenses and Solutions manufactured to the highest standards.
            </p>

            {/* Features section */}
            <div>
              <h4 className="text-xs font-bold text-gray-900 tracking-wide mb-3">NEXT GEN FEATURES</h4>
              <ul className="text-xs text-gray-700 space-y-2">
                <li>• Optika delivers to you Premium Digital Lenses</li>
                <li>• Solutions manufactured to the highest standards</li>
                <li>• Advanced technologies built into every lens</li>
              </ul>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="flex items-start justify-center">
            <img
              src="/45.png"
              alt="Built-in technologies visualization"
              className="w-full h-auto grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
