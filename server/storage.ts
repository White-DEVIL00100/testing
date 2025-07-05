import { 
  users, 
  contactSubmissions, 
  services, 
  portfolioProjects,
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type Service,
  type InsertService,
  type PortfolioProject,
  type InsertPortfolioProject
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  getPortfolioProjects(): Promise<PortfolioProject[]>;
  createPortfolioProject(project: InsertPortfolioProject): Promise<PortfolioProject>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private services: Map<number, Service>;
  private portfolioProjects: Map<number, PortfolioProject>;
  private currentUserId: number;
  private currentContactId: number;
  private currentServiceId: number;
  private currentProjectId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.services = new Map();
    this.portfolioProjects = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentServiceId = 1;
    this.currentProjectId = 1;

    // Initialize with default services
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    const defaultServices: Service[] = [
      {
        id: this.currentServiceId++,
        title: "Graphic Design",
        description: "Creative visual solutions that capture your brand essence and communicate your message effectively.",
        icon: "fas fa-palette",
        features: ["Brand Identity", "Logo Design", "Print Media"],
        color: "indigo"
      },
      {
        id: this.currentServiceId++,
        title: "3D Animation & Modeling",
        description: "Immersive 3D experiences and realistic models that bring your concepts to life.",
        icon: "fas fa-cube",
        features: ["3D Modeling", "Animation", "Rendering"],
        color: "violet"
      },
      {
        id: this.currentServiceId++,
        title: "Game Development",
        description: "Engaging gaming experiences across multiple platforms with cutting-edge technology.",
        icon: "fas fa-gamepad",
        features: ["Unity Games", "Mobile Games", "Web Games"],
        color: "cyan"
      },
      {
        id: this.currentServiceId++,
        title: "Web Development",
        description: "Modern, responsive websites and web applications built with the latest technologies.",
        icon: "fas fa-code",
        features: ["React/Next.js", "E-commerce", "Custom CMS"],
        color: "emerald"
      },
      {
        id: this.currentServiceId++,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android devices.",
        icon: "fas fa-mobile-alt",
        features: ["iOS Apps", "Android Apps", "React Native"],
        color: "amber"
      },
      {
        id: this.currentServiceId++,
        title: "Custom Software",
        description: "Tailored software solutions designed to meet your specific business requirements.",
        icon: "fas fa-cogs",
        features: ["Enterprise Software", "Desktop Apps", "Cloud Solutions"],
        color: "red"
      }
    ];

    const defaultProjects: PortfolioProject[] = [
      {
        id: this.currentProjectId++,
        title: "E-Commerce Platform",
        description: "Modern e-commerce solution with advanced analytics and AI recommendations",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        technologies: ["React", "Node.js"],
        category: "Web Development"
      },
      {
        id: this.currentProjectId++,
        title: "Fitness Tracking App",
        description: "Cross-platform mobile app with real-time health monitoring",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        technologies: ["React Native", "Firebase"],
        category: "Mobile Development"
      },
      {
        id: this.currentProjectId++,
        title: "VR Game Experience",
        description: "Immersive VR game with realistic physics and stunning visuals",
        imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        technologies: ["Unity", "C#"],
        category: "Game Development"
      }
    ];

    defaultServices.forEach(service => {
      this.services.set(service.id, service);
    });

    defaultProjects.forEach(project => {
      this.portfolioProjects.set(project.id, project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  async getPortfolioProjects(): Promise<PortfolioProject[]> {
    return Array.from(this.portfolioProjects.values());
  }

  async createPortfolioProject(insertProject: InsertPortfolioProject): Promise<PortfolioProject> {
    const id = this.currentProjectId++;
    const project: PortfolioProject = { ...insertProject, id };
    this.portfolioProjects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
