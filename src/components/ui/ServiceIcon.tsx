import { 
  Brain, 
  Cloud, 
  FileText, 
  Laptop, 
  Globe, 
  Smartphone, 
  Settings, 
  Lock, 
  BarChart3,
  Target,
  Zap,
  Sparkles
} from "lucide-react";

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
};

export default function ServiceIcon({ iconName, className = "w-6 h-6" }: ServiceIconProps) {
  const IconComponent = iconMap[iconName] || Sparkles;
  
  return (
    <IconComponent 
      className={className}
    />
  );
}

