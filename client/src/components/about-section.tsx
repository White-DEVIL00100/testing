import { motion } from "framer-motion";

export default function AboutSection() {
  const features = [
    {
      icon: "fas fa-rocket",
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver future-ready solutions.",
      color: "text-indigo-400",
    },
    {
      icon: "fas fa-users",
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience across diverse technologies.",
      color: "text-violet-400",
    },
    {
      icon: "fas fa-star",
      title: "Quality Driven",
      description: "We maintain the highest standards in every project we deliver.",
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">About ITN</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                ITN Innovative Tech Nexus is a forward-thinking technology company dedicated to delivering 
                cutting-edge digital solutions. We combine creativity, innovation, and technical expertise 
                to transform ideas into reality.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <i className={`${feature.icon} text-2xl ${feature.color}`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech team collaboration" 
              className="w-full h-auto rounded-3xl shadow-2xl hover-3d"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-6 -left-6 glass-dark rounded-2xl p-6 hover-3d"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-2xl font-bold text-indigo-400">98%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -right-6 glass-dark rounded-2xl p-6 hover-3d"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <div className="text-2xl font-bold text-violet-400">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
