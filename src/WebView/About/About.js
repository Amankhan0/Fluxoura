import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="p-10">
            <section className="card dark:bg-gray-900 py-16 px-6">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl font-bold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About <span className="text-themeColor animate-pulse">Fluxoura</span>
                    </motion.h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        We specialize in crafting stunning visual identities that make brands unforgettable.
                        With a passion for design and a commitment to excellence, we bring creativity and
                        strategy together to deliver compelling solutions across multiple platforms.
                    </p>
                </div>

                {/* Services Section */}
                <div className="max-w-6xl mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Brand Identity Design", desc: "Creating unique logos, typography, and color schemes to define your brand." },
                        { title: "Web & App Design", desc: "Designing intuitive and engaging digital experiences." },
                        { title: "Print Design", desc: "Producing high-quality brochures, posters, and business cards." },
                        { title: "Packaging Design", desc: "Developing eye-catching packaging that tells your brand’s story." }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-semibold text-themeColor">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <motion.p
                        className="text-lg text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Whether you're building a brand from scratch or refreshing an existing one,
                        we ensure every detail aligns with your vision. Let’s bring your ideas to life!
                    </motion.p>
                </div>
            </section>
        </div>
    )
}

export default About;