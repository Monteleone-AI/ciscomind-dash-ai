import { 
  BarChart3, 
  Brain, 
  Calendar, 
  Heart, 
  Home, 
  BookOpen, 
  User,
  MessageCircle,
  Zap
} from "lucide-react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Avaliação DISC", url: "/assessment", icon: Brain },
  { title: "Coach IA", url: "/telemedicine", icon: MessageCircle },
  { title: "Diário IA", url: "/journal", icon: Heart },
  { title: "Recursos", url: "/resources", icon: BookOpen },
  { title: "Analytics", url: "/reports", icon: BarChart3 },
  { title: "Perfil DISC", url: "/profile", icon: User },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"

  return (
    <Sidebar className="glass-card border-r border-border/30">
      <SidebarContent className="p-4 custom-scrollbar">
        {/* Premium Brand Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8 px-2"
        >
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <Zap className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">CiscoMind</h1>
              <p className="text-xs text-muted-foreground">AI Platform</p>
            </div>
          )}
        </motion.div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-semibold mb-4 text-xs">
            NAVEGAÇÃO PRINCIPAL
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="w-full">
                      <NavLink
                        to={item.url}
                        end
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 group ${
                            isActive
                              ? "bg-gradient-primary text-white shadow-glow"
                              : "hover:bg-gradient-glass hover:text-foreground text-muted-foreground glass-button"
                          }`
                        }
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0 transition-all duration-300" />
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}