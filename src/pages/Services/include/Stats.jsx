import { motion} from 'framer-motion';

const stats = [
  { value: '100+', label: 'Poster Designs' },
  { value: '50+', label: 'Videos' },
  { value: '150+', label: 'Campaigns' },
  { value: '1,428+', label: 'Cup of Tea' },
];
export default function Stats() {

    return (
       <section className="relative -mt-10 md:-mt-24 z-20">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-7xl mx-auto px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl py-6 flex flex-col items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
            >
              <span className="text-3xl sm:text-5xl font-bold text-[#f35017] leading-none mb-1.5">
                {item.value}
              </span>
              <span className="text-xs sm:text-xl font-medium text-gray-500 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>
    )
}