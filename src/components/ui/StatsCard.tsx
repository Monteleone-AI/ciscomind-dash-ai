import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "./card"
import { motion } from "framer-motion"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  variant?: "disc-d" | "disc-i" | "disc-s" | "disc-c" | "default"
  className?: string
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend = "neutral", 
  trendValue,
  variant = "default",
  className = "" 
}: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-success"
      case "down": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  const getVariantStyles = () => {
    switch (variant) {
      case "disc-d": 
        return {
          gradient: "bg-gradient-disc-d",
          shadow: "shadow-disc-d",
          glow: "hover:shadow-disc-d"
        }
      case "disc-i": 
        return {
          gradient: "bg-gradient-disc-i",
          shadow: "shadow-disc-i", 
          glow: "hover:shadow-disc-i"
        }
      case "disc-s": 
        return {
          gradient: "bg-gradient-disc-s",
          shadow: "shadow-disc-s",
          glow: "hover:shadow-disc-s"
        }
      case "disc-c": 
        return {
          gradient: "bg-gradient-disc-c",
          shadow: "shadow-disc-c",
          glow: "hover:shadow-disc-c"
        }
      default: 
        return {
          gradient: "bg-gradient-primary",
          shadow: "shadow-glow",
          glow: "hover:shadow-glow"
        }
    }
  }

  const variantStyles = getVariantStyles()

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`glass-card p-6 ${variantStyles.glow} transition-all duration-300 border-border/30 ${className}`}>
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-bold text-foreground">{value}</h3>
                {trendValue && (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`text-xs font-medium ${getTrendColor()}`}
                  >
                    {trend === "up" ? "↗" : trend === "down" ? "↘" : ""} {trendValue}
                  </motion.span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
            <motion.div 
              whileHover={{ rotate: 10 }}
              className={`w-12 h-12 ${variantStyles.gradient} rounded-lg flex items-center justify-center ${variantStyles.shadow}`}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}