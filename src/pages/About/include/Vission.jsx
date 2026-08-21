import { Link } from 'react-router-dom'
import pin from '../../../Image/about/pin.png'

export default function Vision (){
    return(
        <section className="py-8 md:py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 md:gap-24 items-center">

          {/* Sticky Notes */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            {/* Note Card 1 */}
            <div className="bg-[#fdf0e9] p-10 rounded-[15px] relative shadow-[5px_5px_15px_rgba(0,0,0,0.02)]">
              {/* Pin */}
              <img src={pin} alt="" className='absolute top-[10px] right-[10px] w-42 h-42 object-cover'/>

              <h3 className="text-[#669999] text-5xl font-bold mt-0 mb-2 leading-tight">Target</h3>
              <p className="text-[#222222] font-bold text-xl m-0">Completed more than 500+ projects</p>
            </div>

            {/* Note Card 2 */}
            <div className="bg-[#fdf0e9] p-10 rounded-[15px] relative shadow-[5px_5px_15px_rgba(0,0,0,0.02)]">
              {/* Pin */}
              <img src={pin} alt="" className='absolute top-[10px] right-[10px] w-42 h-42 object-cover'/>

              <h3 className="text-[#669999] text-5xl font-bold mt-0 mb-2 leading-tight">Profit</h3>
              <p className="text-[#222222] font-bold text-xl m-0">Happy Customers Who Trusted Us</p>
            </div>
          </div>

          {/* Vision Content */}
          <div className="flex-[2] text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-[#222222]">Our Vision</h2>
            <p className="text-[#666] leading-[1.8] text-sm sm:text-md mb-6">
              We challenge the perception that small and growing businesses can't attract customers or
              invest in digital marketing. By empowering them with tailored strategies and targeted
              audience engagement, we create success for both our clients and our organization.
            </p>
            <p className="italic font-medium text-[#444] border-l-[3px] border-[#76a09a] pl-5 mt-8 my-2 md:my-8 text-sm sm:text-md leading-relaxed">
              "We believe that businesses of all sizes—small, medium, and large—can achieve greater
              success by effectively targeting the right audience."
            </p>
            <Link
            to="/services"
            className="btn-fill self-start bg-[#5d9c95] text-white hover:text-white font-bold md:px-8 px-4 py-2 md:py-3.5 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md cursor-pointer -mt-8 md:mt-0"
          >
            <span className="relative z-10">Services</span>
          </Link>
          </div>

        </div>
      </section>
    )
}