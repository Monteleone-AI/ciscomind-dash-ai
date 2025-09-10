import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex w-full bg-background"
      >
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Premium Glass Header */}
          <motion.header 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-between px-6 py-4 bg-card-glass/40 backdrop-blur-glass border-b border-border/30"
          >
            <div className="flex items-center gap-4">
              <SidebarTrigger className="lg:hidden" />
              <div>
                <h2 className="text-card-title font-bold bg-gradient-primary bg-clip-text text-transparent">
                  CiscoMind
                </h2>
                <p className="text-sm text-muted-foreground">
                  Plataforma Avançada de Saúde Mental
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative glass-button hover:shadow-neural transition-all duration-300"
              >
                <Bell className="w-5 h-5" />
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-disc-d rounded-full text-xs flex items-center justify-center text-white shadow-disc-d"
                >
                  3
                </motion.span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="glass-button hover:shadow-neural transition-all duration-300"
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </motion.header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </motion.div>
    </SidebarProvider>
  )
}