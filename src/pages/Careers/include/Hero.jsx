import hero from '../../../Image/careers/hero.png'
import contact from '../../../Image/Home/contact/consultation.png'

export default function Hero() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="relative flex flex-col items-center justify-center min-h-[380px]">

            {/* Contact icon — absolute top-left */}
            <div className="absolute top-0 left-16 md:left-0 z-10">
              <div className="relative w-16 h-16 md:w-22 md:h-22 -left-16">
                <img src={contact} alt="icon" className="w-full h-full object-contain blur-[3px]" />
              </div>
            </div>

            {/* Large teal circular glow blob — centered */}
            <div className="absolute pointer-events-none w-[440px] h-[440px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-[radial-gradient(circle,rgba(45,212,191,0.22)_0%,rgba(45,212,191,0.10)_50%,transparent_72%)]" />

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* "Upload Resume" badge */}
              <span className="inline-block md:px-24 px-12 py-2 rounded-full text-md md:text-lg md:mb-7 mb-3 shadow-sm bg-[#ffe3d5] backdrop-blur-sm font-semibold text-[#222222] tracking-wide">
                Upload{' '}
                <span className=" text-[#669999]">Resume</span>
              </span>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#222222]">
                Find your Passion<br />
                Upgrade your skills
              </h1>
            </div>

          </div>

          {/* ── Right: Hero Illustration ── */}
          <div className="relative flex justify-center items-center -mt-24 md:mt-0">
            <img
              src={hero}
              alt="Careers hero illustration"
              className="w-full max-w-lg object-contain drop-shadow-xl"
            />

          </div>

        </div>
      </div>
    </section>
  );
}