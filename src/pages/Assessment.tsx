import { useState } from "react"
import { Brain, ChevronRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const questions = [
  {
    id: 1,
    question: "Como você tem se sentido na maior parte dos dias recentes?",
    options: [
      { value: "1", label: "Muito mal", score: 1 },
      { value: "2", label: "Mal", score: 2 },
      { value: "3", label: "Neutro", score: 3 },
      { value: "4", label: "Bem", score: 4 },
      { value: "5", label: "Muito bem", score: 5 },
    ]
  },
  {
    id: 2,
    question: "Com que frequência você se sente ansioso ou preocupado?",
    options: [
      { value: "1", label: "Sempre", score: 1 },
      { value: "2", label: "Frequentemente", score: 2 },
      { value: "3", label: "Às vezes", score: 3 },
      { value: "4", label: "Raramente", score: 4 },
      { value: "5", label: "Nunca", score: 5 },
    ]
  },
  {
    id: 3,
    question: "Como tem sido a qualidade do seu sono?",
    options: [
      { value: "1", label: "Muito ruim", score: 1 },
      { value: "2", label: "Ruim", score: 2 },
      { value: "3", label: "Regular", score: 3 },
      { value: "4", label: "Boa", score: 4 },
      { value: "5", label: "Excelente", score: 5 },
    ]
  },
  {
    id: 4,
    question: "Você tem se sentido motivado para suas atividades diárias?",
    options: [
      { value: "1", label: "Nada motivado", score: 1 },
      { value: "2", label: "Pouco motivado", score: 2 },
      { value: "3", label: "Moderadamente motivado", score: 3 },
      { value: "4", label: "Motivado", score: 4 },
      { value: "5", label: "Muito motivado", score: 5 },
    ]
  },
]

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{[key: number]: string}>({})
  const [showResults, setShowResults] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    const scores = Object.entries(answers).map(([questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId))
      const option = question?.options.find(opt => opt.value === answer)
      return option?.score || 0
    })
    return scores.reduce((sum, score) => sum + score, 0)
  }

  const getRecommendation = (score: number) => {
    if (score >= 18) {
      return {
        level: "Excelente",
        color: "text-success",
        bgColor: "bg-success/10",
        message: "Seu bem-estar mental está ótimo! Continue mantendo seus hábitos saudáveis.",
        recommendations: [
          "Mantenha sua rotina de exercícios",
          "Continue praticando mindfulness",
          "Monitore regularmente seu bem-estar"
        ]
      }
    } else if (score >= 14) {
      return {
        level: "Bom",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        message: "Seu bem-estar está em bom estado, mas há espaço para melhorias.",
        recommendations: [
          "Inclua mais atividades relaxantes",
          "Pratique técnicas de respiração",
          "Considere meditação diária"
        ]
      }
    } else if (score >= 10) {
      return {
        level: "Regular",
        color: "text-warning",
        bgColor: "bg-warning/10",
        message: "Seu bem-estar precisa de atenção. Considere algumas mudanças.",
        recommendations: [
          "Estabeleça uma rotina de sono",
          "Pratique exercícios físicos",
          "Considere falar com um profissional"
        ]
      }
    } else {
      return {
        level: "Atenção Necessária",
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        message: "Recomendamos buscar apoio profissional para melhorar seu bem-estar.",
        recommendations: [
          "Agende uma consulta médica",
          "Procure apoio profissional",
          "Pratique autocuidado diário"
        ]
      }
    }
  }

  if (showResults) {
    const score = calculateScore()
    const recommendation = getRecommendation(score)

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Resultados da Avaliação IA</h1>
          <p className="text-muted-foreground">
            Nossa IA analisou suas respostas e preparou recomendações personalizadas
          </p>
        </div>

        <Card className="shadow-large">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Avaliação Completa</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className={`inline-block px-6 py-3 rounded-full ${recommendation.bgColor}`}>
              <span className={`text-lg font-semibold ${recommendation.color}`}>
                {recommendation.level} ({score}/20 pontos)
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {recommendation.message}
            </p>
            
            <div className="text-left max-w-md mx-auto">
              <h3 className="font-semibold mb-3">Recomendações Personalizadas:</h3>
              <ul className="space-y-2">
                {recommendation.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-4 justify-center pt-4">
              <Button 
                onClick={() => {
                  setCurrentQuestion(0)
                  setAnswers({})
                  setShowResults(false)
                }}
              >
                Fazer Nova Avaliação
              </Button>
              <Button variant="outline">
                Agendar Consulta
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <Brain className="w-8 h-8 text-primary" />
          Avaliação com IA
        </h1>
        <p className="text-muted-foreground">
          Responda algumas perguntas para que nossa IA possa avaliar seu bem-estar atual
        </p>
      </div>

      <Card className="shadow-large">
        <CardHeader>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <RadioGroup
              value={answers[questions[currentQuestion].id] || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label 
                    htmlFor={option.value} 
                    className="flex-1 cursor-pointer font-medium"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Anterior
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!answers[questions[currentQuestion].id]}
              className="flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}