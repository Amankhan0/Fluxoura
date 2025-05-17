import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
// import { Card, CardContent } from "@/components/ui/card";

const works = [
    { title: "Hotel Resorts",label:'hotel-resorts', image: "https://picsum.photos/400/300?random=1" },
    { title: "Product Manipulation",label:'product-manipulation', image: "https://picsum.photos/400/300?random=2" },
    { title: "Animation",label:'Animation', image: "https://picsum.photos/400/300?random=3" },
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
            <NavLink to={'/work/'+work.label} className="card overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
              <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
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
