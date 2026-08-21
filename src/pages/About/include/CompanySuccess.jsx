import Successimage from '../../../Image/about/Digital.jpg'

export default function CompanySuccess() {
    return (
        <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Content */}
          <div className="flex-1">
            <span className="text-[#ff7f50] font-semibold text-lg md:text-xl block mb-2">Company Success</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl my-4 font-bold text-[#222222]">
              A Company's Success is An Ongoing Stream of Happiness
            </h2>
            <p className="text-[#777] mb-2 sm:mb-8 text-sm md:text-md leading-relaxed">
              A Company's success is defined by the positive results achieved from working
              towards their goal. With EC4You, these results are achieved faster and with quality.
            </p>

            <div className="flex flex-col gap-2 w-[70%]">
              {[
                { label: 'Digital Marketing', val: '100%', color: '#f4b400' },
                { label: 'Website Design', val: '85%', color: '#0f9d58' },
                { label: 'Graphic Design', val: '100%', color: '#ff7043' },
                { label: 'Video Creation', val: '97%', color: '#00acc1' },
                { label: 'Branding', val: '97%', color: '#f06292' },
              ].map((skill, index) => (
                <div key={index} className="w-full">
                  <span className="font-semibold text-sm sm:text-md mb-[6px] block text-[#333]">{skill.label}</span>
                  <div className="w-full h-3 md:h-6 bg-[#eee] rounded-[10px] overflow-hidden">
                    <div
                      className="h-full rounded-[10px] transition-all duration-[1500ms] ease-in-out flex items-center justify-end pr-2"
                      style={{ width: skill.val, background: skill.color }}
                    >
                      <span className="text-white text-xs sm:text-md font-bold leading-none">{skill.val}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 flex justify-center px-10">
            <img
              src={Successimage}
              alt="Success Illustration"
              className="max-w-[140%] h-auto object-contain"
            />
          </div>

        </div>
      </section>
    );
}