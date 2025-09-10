import { Play, Clock, Star, BookOpen, Headphones, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import meditationImage from "@/assets/meditation-illustration.jpg"

const exercises = [
  {
    id: 1,
    title: "Respiração 4-7-8",
    description: "Técnica de respiração para reduzir ansiedade e promover relaxamento",
    duration: "5 min",
    type: "breathing",
    difficulty: "Iniciante",
    rating: 4.8
  },
  {
    id: 2,
    title: "Meditação Mindfulness",
    description: "Exercício de atenção plena para o momento presente",
    duration: "10 min",
    type: "meditation",
    difficulty: "Intermediário",
    rating: 4.9
  },
  {
    id: 3,
    title: "Scan Corporal",
    description: "Relaxamento progressivo através da consciência corporal",
    duration: "15 min",
    type: "meditation",
    difficulty: "Iniciante",
    rating: 4.7
  }
]

const articles = [
  {
    id: 1,
    title: "Como Gerenciar a Ansiedade no Trabalho",
    category: "Ansiedade",
    readTime: "8 min",
    summary: "Estratégias práticas para lidar com situações estressantes no ambiente profissional"
  },
  {
    id: 2,
    title: "A Importância do Sono para a Saúde Mental",
    category: "Bem-estar",
    readTime: "6 min",
    summary: "Como a qualidade do sono impacta diretamente nosso equilíbrio emocional"
  },
  {
    id: 3,
    title: "Técnicas de Mindfulness para o Dia a Dia",
    category: "Mindfulness",
    readTime: "10 min",
    summary: "Incorpore práticas de atenção plena em sua rotina diária"
  }
]

const videos = [
  {
    id: 1,
    title: "Série: Primeiros Passos na Meditação",
    instructor: "Dr. Ana Costa",
    episodes: 5,
    duration: "25 min total",
    description: "Aprenda os fundamentos da meditação com exercícios práticos"
  },
  {
    id: 2,
    title: "Gerenciamento de Estresse",
    instructor: "Prof. Carlos Silva",
    episodes: 3,
    duration: "18 min total",
    description: "Técnicas cientificamente comprovadas para reduzir o estresse"
  }
]

export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <BookOpen className="w-8 h-8 text-primary" />
          Recursos de Bem-estar
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore nossa biblioteca de exercícios, artigos e vídeos para fortalecer sua saúde mental
        </p>
      </div>

      {/* Featured Exercise */}
      <Card className="shadow-large">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={meditationImage} 
              alt="Exercício de Meditação"
              className="w-full h-64 md:h-full object-cover rounded-l-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <Badge className="w-fit mb-4" variant="secondary">
              Destaque do Dia
            </Badge>
            <h2 className="text-2xl font-bold mb-4">
              Meditação Guiada para Ansiedade
            </h2>
            <p className="text-muted-foreground mb-6">
              Uma sessão especialmente desenvolvida para reduzir níveis de ansiedade 
              através de técnicas de respiração e visualização.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                12 minutos
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="w-4 h-4" />
                4.9/5
              </div>
            </div>
            <Button size="lg" className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Iniciar Sessão
            </Button>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="exercises" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="exercises">Exercícios</TabsTrigger>
          <TabsTrigger value="articles">Artigos</TabsTrigger>
          <TabsTrigger value="videos">Vídeos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="exercises" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{exercise.title}</CardTitle>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {exercise.difficulty}
                      </Badge>
                    </div>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exercise.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="w-4 h-4" />
                      {exercise.duration}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-warning" />
                      {exercise.rating}
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Iniciar Exercício
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {article.category}
                      </Badge>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </div>
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <Button variant="ghost" size="sm">
                      Ler Artigo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        por {video.instructor}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">
                      {video.episodes} episódios • {video.duration}
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    Assistir Série
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}