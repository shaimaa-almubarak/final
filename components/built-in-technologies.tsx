export function BuiltInTechnologies() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-sm font-semibold text-gray-500 tracking-widest mb-2">CAPABILITIES</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Built-In Technologies
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Optimized lenses with advanced built-in technologies
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Built-In<br />Technologies
              </h3>
              <div className="w-1 h-8 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Optika delivers Premium Digital Lenses and Solutions manufactured to the highest standards with advanced built-in technologies that enhance every lens.
              </p>
            </div>

            {/* Features section */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">NEXT GEN FEATURES</h4>
                <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                  <li>• Custom form lenses for prescription requirements</li>
                  <li>• Advanced eye view technology</li>
                  <li>• High-performance materials</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lt2MPp4dhnceyI2Hw5zKhaj1QsHX5x.png"
              alt="Built-in technologies showcase"
              className="w-full h-auto object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
