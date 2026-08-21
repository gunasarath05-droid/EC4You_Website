import certificate from "../../../Image/about/hero/certificate.png";
import msg from "../../../Image/about/hero/msg.png";
import tick from "../../../Image/about/hero/tick.png";
import user from "../../../Image/about/hero/user.png";

const stats = [
  {
    value: "30+",
    label: "Satisfied Clients",
    bgImage: msg,
    cardClass: "h-[175px] sm:h-[185px]",
  },
  {
    value: "1000+",
    label: "Graphic Design Finished",
    bgImage: tick,
    cardClass: "h-[190px] sm:h-[220px]",
  },
  {
    value: "100+",
    label: "Videos Finished",
    bgImage: user,
    cardClass: "h-[175px] sm:h-[185px]",
  },
  {
    value: "1000+",
    label: "Graphic Design Finished",
    bgImage: certificate,
    cardClass: "h-[190px] sm:h-[220px]",
  },
];

export default function Hero() {
  return (
    <section className="min-h-[90vh] py-8 md:py-16 px-6 sm:px-12 bg-white text-center lg:text-left relative flex items-center overflow-hidden">
      {/* Background Teal Radial Oval Glow */}
      <div
  className="absolute pointer-events-none w-[3250px] h-[860px] top-[30%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2
    rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.20)_0%,rgba(159,191,191,0.10)_42%,rgba(159,191,191,0.04)_62%,transparent_78%)] blur-[10px] z-0"
/>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Title block */}
        <div className="flex flex-col items-center mb-6 md:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-2 md:mb-4 text-[#222222]">About US</h1>
          <span className="bg-[#ffe3d5] py-2 px-8 md:px-16 rounded-full text-[#222222] text-md md:text-lg font-semibold inline-block tracking-wide">
            Who <span className="text-[#669999]">We</span> Are
          </span>
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Text Content */}
          <div className="flex-1 lg:max-w-[50%]">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-black mb-6 leading-[1.2] text-[#222222]">
              Top 10 Best Digital<br />marketing agency
            </h2>
            <p className="text-[#666666] leading-relaxed mb-6 text-sm md:text-md text-left">
              Top 10 Best digital marketing agency in Chennai, specializing in innovative
              strategies to boost online presence and drive results. Our team of experts
              crafts tailored solutions in SEO, social media, PPC, and more, delivering
              measurable ROI for businesses of all sizes.
              Elevate your brand with our proven digital marketing expertise.
            </p>
            <p className="font-semibold text-[#222222] text-xs md:text-sm text-end">
              "An Agency with the focus to help MSME business owners"
            </p>
          </div>

          {/* Right Stats Cards Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-6 w-full items-center">

            {/* Column 1 (Left Column of Cards) */}
            <div className="flex flex-col gap-6">
              {[stats[0], stats[2]].map((stat, i) => (
                <div
                  key={i}
                  className={`relative bg-white rounded-[26px] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.04)] border border-gray-100/80 overflow-hidden flex flex-col items-center justify-center text-center group ${stat.cardClass}`}
                >
                  {/* Background Watermark Image */}
                  <img
                    src={stat.bgImage}
                    alt=""
                    className="absolute -left-8 -bottom-4 h-auto w-[200px] opacity-[0.2] pointer-events-none object-contain select-none"
                  />
                  {/* Number */}
                  <h3 className="relative z-10 text-[#ff7f50] text-4xl sm:text-8xl font-medium mb-1 tracking-tight leading-none">
                    {stat.value}
                  </h3>
                  {/* Label */}
                  <p className="relative z-10 text-[#555555] font-bold text-xs sm:text-xl">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 2 (Right Column of Cards - Taller / Shifting Layout) */}
            <div className="flex flex-col gap-6">
              {[stats[1], stats[3]].map((stat, i) => (
                <div
                  key={i}
                  className={`relative bg-white rounded-[26px] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.04)] border border-gray-100/80 overflow-hidden flex flex-col items-center justify-center text-center group ${stat.cardClass}`}
                >
                  {/* Background Watermark Image */}
                  <img
                    src={stat.bgImage}
                    alt=""
                    className="absolute -left-8 -bottom-4 h-auto w-[200px] pointer-events-none object-contain select-none opacity-[0.2]"
                  />
                  {/* Number */}
                  <h3 className="relative z-10 text-[#ff7f50] text-4xl sm:text-8xl font-medium mb-1 tracking-tight leading-none">
                    {stat.value}
                  </h3>
                  {/* Label */}
                  <p className="relative z-10 text-[#555555] font-bold text-xs sm:text-xl">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


