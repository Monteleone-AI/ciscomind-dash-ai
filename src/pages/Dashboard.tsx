import { Brain, Heart, Calendar, TrendingUp, Clock, Star, Zap, Target, Activity } from "lucide-react"
import { StatsCard } from "@/components/ui/StatsCard"
import { WellnessChart } from "@/components/ui/WellnessChart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import heroImage from "@/assets/hero-mental-health.jpg"

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Hero Section with Premium Glass Effect */}
      <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl">
        <img 
          src={heroImage} 
          alt="CiscoMind - Plataforma de Saúde Mental"
          className="w-full h-64 object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-neural flex items-center backdrop-blur-sm">
          <div className="px-8 text-foreground">
            <motion.h1 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-hero font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent"
            >
              CiscoMind AI
            </motion.h1>
            <motion.p 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg text-muted-foreground mb-4"
            >
              Análise DISC Avançada • IA Comportamental • Coaching Personalizado
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-disc-c hover:shadow-disc-c transition-all duration-500 font-bold text-white border-0"
              >
                <Activity className="w-5 h-5 mr-2" />
                Avaliação DISC IA
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* DISC Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Dominância"
          value="85%"
          description="Perfil de Liderança"
          icon={Target}
          trend="up"
          trendValue="+12%"
          variant="disc-d"
        />
        <StatsCard
          title="Influência"
          value="72%"
          description="Habilidades Sociais"
          icon={Heart}
          trend="up"
          trendValue="+8%"
          variant="disc-i"
        />
        <StatsCard
          title="Estabilidade"
          value="68%"
          description="Paciência & Consistência"
          icon={Activity}
          trend="neutral"
          variant="disc-s"
        />
        <StatsCard
          title="Conformidade"
          value="91%"
          description="Precisão & Análise"
          icon={Brain}
          trend="up"
          trendValue="+15%"
          variant="disc-c"
        />
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Wellness Chart */}
        <motion.div variants={itemVariants}>
          <WellnessChart />
        </motion.div>

        {/* Premium Sessions Card */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card shadow-neural border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-title">
                <Zap className="w-5 h-5 text-disc-c" />
                Sessões IA Premium
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-gradient-glass rounded-lg border border-border/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-disc-s rounded-full shadow-disc-s"></div>
                  <div>
                    <p className="font-medium text-foreground">Análise Comportamental DISC</p>
                    <p className="text-sm text-muted-foreground">Quinta-feira, 14:00</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="glass-button hover:shadow-disc-s transition-all duration-300"
                >
                  Iniciar
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-gradient-glass rounded-lg border border-border/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-disc-i rounded-full shadow-disc-i"></div>
                  <div>
                    <p className="font-medium text-foreground">Coach IA Personalizado</p>
                    <p className="text-sm text-muted-foreground">Sexta-feira, 16:30</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="glass-button hover:shadow-disc-i transition-all duration-300"
                >
                  Entrar
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* DISC Action Cards */}
      <motion.div variants={itemVariants}>
        <Card className="glass-card shadow-neural border-border/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-card-title">
              <Star className="w-5 h-5 text-accent" />
              Ações Personalizadas DISC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gradient-disc-d rounded-lg text-white shadow-disc-d"
              >
                <h3 className="font-semibold mb-2">Dominância</h3>
                <p className="text-sm opacity-90 mb-3">
                  Definir metas ambiciosas
                </p>
                <Button size="sm" variant="secondary" className="w-full">
                  Ativar
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gradient-disc-i rounded-lg text-white shadow-disc-i"
              >
                <h3 className="font-semibold mb-2">Influência</h3>
                <p className="text-sm opacity-90 mb-3">
                  Networking estratégico
                </p>
                <Button size="sm" variant="secondary" className="w-full">
                  Conectar
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gradient-disc-s rounded-lg text-white shadow-disc-s"
              >
                <h3 className="font-semibold mb-2">Estabilidade</h3>
                <p className="text-sm opacity-90 mb-3">
                  Rotina de mindfulness
                </p>
                <Button size="sm" variant="secondary" className="w-full">
                  Praticar
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gradient-disc-c rounded-lg text-white shadow-disc-c"
              >
                <h3 className="font-semibold mb-2">Conformidade</h3>
                <p className="text-sm opacity-90 mb-3">
                  Análise de dados
                </p>
                <Button size="sm" variant="secondary" className="w-full">
                  Analisar
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}