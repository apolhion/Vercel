import { motion } from "framer-motion";

export function DisplaySection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              THE MOST EXPANSIVE VIEWING EXPERIENCE EVER IN A SMARTPHONE.
            </h2>

            <div className="space-y-4 text-lg">
              <p className="font-bold text-red-600">1mm side bezels,</p>
              <p className="text-gray-300">
                for a full full viewing experience.
                <br />
                (Did we mention full?)
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                A 93.76% screen-to-body ratio¹ lets you experience your phone in an all new way, 
                with razor-thin 1mm bezels² keeping your viewing experience pristinely undisturbed.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative">
            <motion.img
              src="/imagem120hz.jpg"
              alt="120Hz Display"
              className="w-full h-auto object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              120Hz
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}