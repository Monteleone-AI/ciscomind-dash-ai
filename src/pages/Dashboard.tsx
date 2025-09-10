import { Brain, Heart, Calendar, TrendingUp, Clock, Star } from "lucide-react"
import { StatsCard } from "@/components/ui/StatsCard"
import { WellnessChart } from "@/components/ui/WellnessChart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-mental-health.jpg"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl">
        <img 
          src={heroImage} 
          alt="CiscoMind - Plataforma de Saúde Mental"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60 flex items-center">
          <div className="px-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Olá! Como você está se sentindo hoje?</h1>
            <p className="text-lg opacity-90 mb-4">
              Acompanhe seu bem-estar e cuide da sua saúde mental conosco
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Fazer Avaliação IA
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Humor Atual"
          value="8/10"
          description="Acima da média semanal"
          icon={Heart}
          trend="up"
          trendValue="+1.2"
        />
        <StatsCard
          title="Sessões Completas"
          value="12"
          description="Este mês"
          icon={Brain}
          trend="up"
          trendValue="+3"
        />
        <StatsCard
          title="Próxima Consulta"
          value="2 dias"
          description="Dr. Maria Silva"
          icon={Calendar}
          trend="neutral"
        />
        <StatsCard
          title="Progresso"
          value="87%"
          description="Metas mensais"
          icon={TrendingUp}
          trend="up"
          trendValue="+5%"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Wellness Chart */}
        <WellnessChart />

        {/* Upcoming Sessions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Próximas Sessões
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <div>
                  <p className="font-medium">Consulta com Dr. Maria Silva</p>
                  <p className="text-sm text-muted-foreground">Quinta-feira, 14:00</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Reagendar
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div>
                  <p className="font-medium">Sessão de Mindfulness</p>
                  <p className="text-sm text-muted-foreground">Sexta-feira, 16:30</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Recommendations */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            Recomendações do Dia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-wellness rounded-lg text-white">
              <h3 className="font-semibold mb-2">Exercício de Respiração</h3>
              <p className="text-sm opacity-90 mb-3">
                5 minutos para reduzir o estresse
              </p>
              <Button size="sm" variant="secondary">
                Começar
              </Button>
            </div>
            
            <div className="p-4 bg-gradient-secondary rounded-lg text-white">
              <h3 className="font-semibold mb-2">Diário de Gratidão</h3>
              <p className="text-sm opacity-90 mb-3">
                Registre 3 coisas pelas quais é grato
              </p>
              <Button size="sm" variant="secondary">
                Escrever
              </Button>
            </div>
            
            <div className="p-4 bg-gradient-primary rounded-lg text-white">
              <h3 className="font-semibold mb-2">Meditação Guiada</h3>
              <p className="text-sm opacity-90 mb-3">
                10 minutos para clareza mental
              </p>
              <Button size="sm" variant="secondary">
                Meditar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}