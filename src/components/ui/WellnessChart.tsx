import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { motion } from "framer-motion"

const mockData = [
  { day: 'Seg', dominance: 8, influence: 7, stability: 6, compliance: 9 },
  { day: 'Ter', dominance: 7, influence: 8, stability: 7, compliance: 8 },
  { day: 'Qua', dominance: 9, influence: 6, stability: 8, compliance: 9 },
  { day: 'Qui', dominance: 8, influence: 9, stability: 7, compliance: 8 },
  { day: 'Sex', dominance: 9, influence: 8, stability: 8, compliance: 9 },
  { day: 'Sáb', dominance: 8, influence: 7, stability: 9, compliance: 8 },
  { day: 'Dom', dominance: 7, influence: 8, stability: 8, compliance: 9 },
]

export function WellnessChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="glass-card shadow-neural border-border/30">
        <CardHeader>
          <CardTitle className="text-card-title font-bold bg-gradient-primary bg-clip-text text-transparent">
            Análise DISC Semanal
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Monitoramento comportamental baseado em IA dos últimos 7 dias
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-20" />
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
                  dataKey="dominance" 
                  stroke="hsl(var(--disc-d))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--disc-d))", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "hsl(var(--disc-d))", filter: "drop-shadow(0 0 6px hsl(var(--disc-d)))" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="influence" 
                  stroke="hsl(var(--disc-i))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--disc-i))", strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 6, fill: "hsl(var(--disc-i))", filter: "drop-shadow(0 0 6px hsl(var(--disc-i)))" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="stability" 
                  stroke="hsl(var(--disc-s))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--disc-s))", strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 6, fill: "hsl(var(--disc-s))", filter: "drop-shadow(0 0 6px hsl(var(--disc-s)))" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="compliance" 
                  stroke="hsl(var(--disc-c))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--disc-c))", strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 6, fill: "hsl(var(--disc-c))", filter: "drop-shadow(0 0 6px hsl(var(--disc-c)))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center gap-6 mt-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-disc-d shadow-disc-d"></div>
              <span className="text-sm text-muted-foreground">Dominância</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-disc-i shadow-disc-i"></div>
              <span className="text-sm text-muted-foreground">Influência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-disc-s shadow-disc-s"></div>
              <span className="text-sm text-muted-foreground">Estabilidade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-disc-c shadow-disc-c"></div>
              <span className="text-sm text-muted-foreground">Conformidade</span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}