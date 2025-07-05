import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function TechnologyStack() {
  const techCategories = [
    {
      icon: "fab fa-react",
      title: "Frontend",
      color: "text-cyan-400",
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
    },
    {
      icon: "fab fa-node-js",
      title: "Backend",
      color: "text-green-400",
      technologies: ["Node.js", "Python", "Java", ".NET"],
    },
    {
      icon: "fab fa-android",
      title: "Mobile",
      color: "text-green-400",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: "fab fa-aws",
      title: "Cloud",
      color: "text-orange-400",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust and scalable solutions
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-dark rounded-3xl p-8 hover-3d text-center h-full">
                <i className={`${category.icon} text-5xl ${category.color} mb-4`}></i>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  {category.technologies.map((tech) => (
                    <div key={tech}>{tech}</div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
