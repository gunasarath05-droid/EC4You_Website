import exp from  '../../../Image/careers/work/exp.png'
import marketing from '../../../Image/careers/work/marketing.png'
import sales from '../../../Image/careers/work/sales.png'
import seo from '../../../Image/careers/work/seo.png'
import website from '../../../Image/careers/work/website.png'
import creativity from '../../..//Image/careers/work/creativity.png'


export default function HowWeWork() {

  const workSteps = [
    {
      name: 'Website\nDevelopment',
      img: website,
    },
    {
      name: 'Marketing',
      img: marketing,
    },
    {
      name: 'People\nExperience',
      img: exp,
    },
    {
      name: 'Sales',
      img: sales,
    },
    {
      name: 'Creativity',
      img: creativity,
    },
    {
      name: 'SEO',
      img: seo,
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#222222]">
            How We Work?
          </h2>
          <p className="text-sm md:text-md text-slate-500">
            We are looking for talented individuals who share the same enthusiasm as us!
          </p>
        </div>

        {/* Icons row */}
        <div className="flex flex-wrap justify-center items-center gap-x-16">
          {workSteps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col items-center cursor-default w-[100px] sm:w-[120px] md:w-[140px]"
            >
              {/* Icon wrapper */}
              <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center mb-2 md:mb-4">
                  <img
                    src={step.img}
                    alt={step.name.replace('\n', ' ')}
                    className="w-full h-full object-contain"
                  />
              </div>

              {/* Label */}
              <p className="text-center font-bold text-[#222222] text-base md:text-xl leading-snug whitespace-pre-line">
                {step.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}