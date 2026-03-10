import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import laptopImg from '../Home/laptop.gif'; 
import laptopspeaker from '../Home/laptopspeaker.gif'; 
import menImg from '../Home/men.gif'; 
const works = [
  { title: "Hotel Resorts", label: 'hotel-resorts', image: laptopImg },
  { title: "Product Manipulation", label: 'product-manipulation', image: menImg },
  { title: "Animation", label: 'Animation', image: laptopspeaker },
];

export default function OurWork() {
  return (
    <section className="p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <NavLink to={'/work/' + work.label} className="card overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
              {/* <video
                src={work.image}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl w-full max-w-md"
              /> */}
              <img src={work.image} className="rounded-xl w-full max-w-md"/>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">{work.title}</h3>
              </div>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </section>
  );
}