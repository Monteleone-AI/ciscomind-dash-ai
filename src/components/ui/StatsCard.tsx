import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "./card"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  className?: string
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend = "neutral", 
  trendValue,
  className = "" 
}: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-success"
      case "down": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  return (
    <Card className={`p-6 hover:shadow-medium transition-shadow duration-200 ${className}`}>
      <CardContent className="p-0">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-center gap-2 mt-1">
              <h3 className="text-2xl font-bold text-foreground">{value}</h3>
              {trendValue && (
                <span className={`text-xs font-medium ${getTrendColor()}`}>
                  {trend === "up" ? "↗" : trend === "down" ? "↘" : ""} {trendValue}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}