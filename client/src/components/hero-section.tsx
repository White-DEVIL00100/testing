import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden perspective-1000">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-violet-500 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-500 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 4 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="gradient-text">
                  Innovative
                </span>
                <br />
                <span className="text-glow">Tech Nexus</span>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transforming ideas into cutting-edge digital solutions with next-generation technology
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                onClick={() => scrollToSection("#services")}
                className="px-8 py-4 bg-gradient-to-r from-primary to-violet-500 hover-3d neon-glow font-semibold"
              >
                Explore Services
              </Button>
              <Button 
                onClick={() => scrollToSection("#portfolio")}
                variant="outline"
                className="px-8 py-4 glass hover-3d font-semibold border-white/20"
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400">200+</div>
                <div className="text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-gray-400">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Futuristic tech workspace" 
              className="w-full h-auto rounded-3xl shadow-2xl hover-3d"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating Cards */}
            <motion.div 
              className="absolute -top-10 -right-10 glass-dark rounded-2xl p-6 hover-3d"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <i className="fas fa-code text-3xl text-primary mb-2"></i>
              <div className="text-sm font-semibold">Web Development</div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-10 -left-10 glass-dark rounded-2xl p-6 hover-3d"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <i className="fas fa-mobile-alt text-3xl text-violet-400 mb-2"></i>
              <div className="text-sm font-semibold">Mobile Apps</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
