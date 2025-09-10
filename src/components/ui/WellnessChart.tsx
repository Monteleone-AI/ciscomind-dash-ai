import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const mockData = [
  { day: 'Seg', mood: 7, stress: 4, energy: 8 },
  { day: 'Ter', mood: 6, stress: 5, energy: 7 },
  { day: 'Qua', mood: 8, stress: 3, energy: 9 },
  { day: 'Qui', mood: 7, stress: 4, energy: 8 },
  { day: 'Sex', mood: 9, stress: 2, energy: 9 },
  { day: 'Sáb', mood: 8, stress: 3, energy: 8 },
  { day: 'Dom', mood: 7, stress: 4, energy: 7 },
]

export function WellnessChart() {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Histórico de Bem-estar</CardTitle>
        <p className="text-sm text-muted-foreground">
          Acompanhe seu progresso emocional dos últimos 7 dias
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                className="text-xs text-muted-foreground"
              />
              <YAxis 
                domain={[0, 10]}
                axisLine={false}
                tickLine={false}
                className="text-xs text-muted-foreground"
              />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
              />
              <Line 
                type="monotone" 
                dataKey="energy" 
                stroke="hsl(var(--secondary))" 
                strokeWidth={2}
                dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="stress" 
                stroke="hsl(var(--warning))" 
                strokeWidth={2}
                dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">Humor</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-sm text-muted-foreground">Energia</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <span className="text-sm text-muted-foreground">Estresse</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}