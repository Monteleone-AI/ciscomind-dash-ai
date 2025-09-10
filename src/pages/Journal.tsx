import { useState } from "react"
import { Heart, Plus, Calendar, Smile, Meh, Frown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const moodOptions = [
  { value: 'happy', label: 'Feliz', icon: Smile, color: 'text-success' },
  { value: 'neutral', label: 'Neutro', icon: Meh, color: 'text-muted-foreground' },
  { value: 'sad', label: 'Triste', icon: Frown, color: 'text-warning' },
]

const mockEntries = [
  {
    id: 1,
    date: '2024-01-15',
    mood: 'happy',
    entry: 'Hoje foi um dia muito produtivo! Consegui terminar todos os projetos pendentes e ainda tive tempo para meditar. Me sinto grato por essa sensação de conquista.',
    tags: ['produtivo', 'grato', 'meditação']
  },
  {
    id: 2,
    date: '2024-01-14',
    mood: 'neutral',
    entry: 'Dia comum, sem grandes acontecimentos. Trabalhei normalmente e assisti um filme à noite. Nada de especial, mas me senti em paz.',
    tags: ['rotina', 'paz']
  },
  {
    id: 3,
    date: '2024-01-13',
    mood: 'sad',
    entry: 'Dia um pouco difícil hoje. Me senti sobrecarregado com as responsabilidades e tive dificuldade para me concentrar. Preciso lembrar de ser mais gentil comigo mesmo.',
    tags: ['difícil', 'sobrecarregado', 'autocompaixão']
  }
]

export default function Journal() {
  const [entries, setEntries] = useState(mockEntries)
  const [newEntry, setNewEntry] = useState('')
  const [selectedMood, setSelectedMood] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSaveEntry = () => {
    if (newEntry.trim() && selectedMood) {
      const entry = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        mood: selectedMood,
        entry: newEntry,
        tags: []
      }
      setEntries([entry, ...entries])
      setNewEntry('')
      setSelectedMood('')
      setIsOpen(false)
    }
  }

  const getMoodIcon = (mood: string) => {
    const moodOption = moodOptions.find(opt => opt.value === mood)
    if (!moodOption) return Meh
    return moodOption.icon
  }

  const getMoodColor = (mood: string) => {
    const moodOption = moodOptions.find(opt => opt.value === mood)
    return moodOption?.color || 'text-muted-foreground'
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary" />
            Diário de Humor
          </h1>
          <p className="text-muted-foreground">
            Registre seus sentimentos e acompanhe seu bem-estar emocional
          </p>
        </div>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Nova Entrada
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Nova Entrada do Diário</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-3 block">
                  Como você está se sentindo hoje?
                </label>
                <div className="flex gap-4">
                  {moodOptions.map((mood) => {
                    const Icon = mood.icon
                    return (
                      <button
                        key={mood.value}
                        onClick={() => setSelectedMood(mood.value)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-colors ${
                          selectedMood === mood.value 
                            ? 'bg-primary text-primary-foreground border-primary' 
                            : 'hover:bg-muted border-border'
                        }`}
                      >
                        <Icon className="w-8 h-8" />
                        <span className="text-sm font-medium">{mood.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Conte como foi seu dia
                </label>
                <Textarea
                  placeholder="Descreva seus sentimentos, experiências e reflexões do dia..."
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>
              
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancelar
                </Button>
                <Button 
                  onClick={handleSaveEntry}
                  disabled={!newEntry.trim() || !selectedMood}
                >
                  Salvar Entrada
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        {entries.map((entry) => {
          const MoodIcon = getMoodIcon(entry.mood)
          return (
            <Card key={entry.id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center`}>
                      <MoodIcon className={`w-6 h-6 ${getMoodColor(entry.mood)}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{
                        new Date(entry.date).toLocaleDateString('pt-BR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                      }</CardTitle>
                    </div>
                  </div>
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {entry.entry}
                </p>
                {entry.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {entry.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}