import { 
  Brain, Cloud, FileText, Laptop, Globe, Smartphone, Settings, Lock, BarChart3, Target,
  Zap, Sparkles, Rocket, Briefcase, Users, Shield, Lightbulb, TrendingUp, MessageSquare,
  CheckCircle, Award, Building2, GraduationCap, Factory, ShoppingCart, Truck, Battery,
  Heart, CreditCard, BookOpen, Wrench, HelpCircle, Mail, Search, Home, AlertCircle
} from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  color?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string; color?: string }>> = {
  // Services
  "ai-machine-learning": Brain,
  "cloud-computing": Cloud,
  "natural-language-processing": FileText,
  "software-development": Laptop,
  "web-development": Globe,
  "mobile-development": Smartphone,
  "devops": Settings,
  "cybersecurity": Lock,
  "data-analytics": BarChart3,
  "it-consulting": Target,
  "ai-automation": Zap,
  "learning": Sparkles,
  
  // General
  "target": Target,
  "rocket": Rocket,
  "cloud": Cloud,
  "zap": Zap,
  "chart": BarChart3,
  "briefcase": Briefcase,
  "lock": Lock,
  "lightbulb": Lightbulb,
  "users": Users,
  "shield": Shield,
  "trending": TrendingUp,
  "message": MessageSquare,
  "check": CheckCircle,
  "award": Award,
  "building": Building2,
  "graduation": GraduationCap,
  "factory": Factory,
  "shopping": ShoppingCart,
  "truck": Truck,
  "battery": Battery,
  "heart": Heart,
  "creditcard": CreditCard,
  "book": BookOpen,
  "wrench": Wrench,
  "help": HelpCircle,
  "mail": Mail,
  "hospital": Heart,
  "finance": CreditCard,
  "education": GraduationCap,
  "search": Search,
  "home": Home,
  "alert": AlertCircle,
};

export default function Icon({ name, className = "w-6 h-6", color }: IconProps) {
  const IconComponent = iconMap[name.toLowerCase()] || Sparkles;
  
  const iconClassName = color ? `${className} text-[${color}]` : className;
  
  return (
    <IconComponent 
      className={iconClassName}
    />
  );
}

