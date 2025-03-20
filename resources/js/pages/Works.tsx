import { useState } from 'react';
import { motion } from 'framer-motion';

const worksData = [
  { id: 1, category: 'branding', title: 'Deloitte', description: 'Project was about precision and information.', image: 'https://themejunction.net/tailwind/gerold/demo/assets/img/portfolio/2.jpg', bgColor: '#2d3748' },
  { id: 2, category: 'uxui', title: 'New Age', description: 'Project was about precision and information.', image: 'https://themejunction.net/tailwind/gerold/demo/assets/img/portfolio/2.jpg', bgColor: '#4a5568' },
  { id: 3, category: 'mobile-app', title: 'Sebastian', description: 'Project was about precision and information.', image: 'https://themejunction.net/tailwind/gerold/demo/assets/img/portfolio/2.jpg', bgColor: '#718096' },
  { id: 4, category: 'branding', title: 'Mochnix', description: 'Project was about precision and information.', image: 'https://themejunction.net/tailwind/gerold/demo/assets/img/portfolio/2.jpg', bgColor: '#a0aec0' },
];

const Works: React.FC = () => {
  const [filter, setFilter] = useState<string>('*'); // Default filter: show all

  const filteredWorks = filter === '*'
    ? worksData
    : worksData.filter((work) => work.category === filter);

  return (
    <section id="works" className="pt-[60px] pb-[30px] md:pt-20 md:pb-[60px] lg:pt-[100px] lg:pb-20 bg-dark">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center mb-10 md:mb-[50px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[35px] lg:text-[40px] xl:text-[45px] bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent font-bold xl:leading-[1.2] mb-[15px]"
          >
            My Recent Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-[700px] text-lg"
          >
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </motion.p>
        </div>

        {/* Portfolio Filter */}
        <div className="portfolio-filter">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-10 md:mb-[50px]"
          >
            <div className="inline-flex items-center justify-center bg-gray-800 rounded-full px-2 py-1 md:py-1.5 relative z-0">
              {['*', 'uxui', 'branding', 'mobile-app'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm md:text-[15px] px-3 md:px-[25px] py-[10px] md:py-3 text-white ${filter === category ? 'bg-primary text-white' : 'bg-transparent'} rounded-full transition-all duration-300`}
                >
                  {category === '*' ? 'All' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="portfolio-item rounded-[10px] group relative overflow-hidden"
                style={{ backgroundColor: work.bgColor }}
              >
                <img src={work.image} alt={work.title} className="w-full h-auto object-cover" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, backgroundColor: 'rgba(249, 115, 22, 0.8)' }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center px-[15px] lg:px-5 text-center invisible group-hover:visible"
                >
                  <a
                    href="#works" // Placeholder; can link to details if needed
                    className="text-white w-full"
                  >
                    <span className="block text-xl md:text-[25px] lg:text-3xl font-bold mb-2 lg:mb-[15px]">
                      {work.title}
                    </span>
                    <span className="block text-gray-200 text-sm md:text-base">
                      {work.description}
                    </span>
                    <motion.i
                      initial={{ rotate: -360 }}
                      whileHover={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className="fa fa-arrow-up-right text-[15px] md:text-xl text-white mt-4"
                    />
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;