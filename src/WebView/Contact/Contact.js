import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="p-10">
            <section className="card dark:bg-gray-900 py-16 px-6">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl font-bold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Contact <span className="text-themeColor animate-pulse">Us</span>
                    </motion.h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Have questions or want to work together? Feel free to reach out!
                    </p>
                </div>

                {/* Contact Details Section */}
                <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-8 text-center">
                    {/* Email */}
                    <motion.div
                        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Mail className="text-themeColor w-10 h-10 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Email Us</h3>
                        <a
                            href="mailto:hello@fluxoura.com"
                            className="text-themeColor mt-2 block hover:underline"
                        >
                            hello@fluxoura.com
                        </a>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Phone className="text-themeColor w-10 h-10 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Call Us</h3>
                        <a
                            href="tel:+1234567890"
                            className="text-themeColor mt-2 block hover:underline"
                        >
                            +1 234 567 890
                        </a>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <MapPin className="text-themeColor w-10 h-10 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Visit Us</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            123 Creative Street, Design City, USA
                        </p>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        We're here to help! Reach out anytime, and let's create something amazing together.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Contact;