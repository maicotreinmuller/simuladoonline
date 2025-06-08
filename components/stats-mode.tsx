"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Target, Star, RotateCcw, TrendingUp } from "lucide-react"

interface StatsProps {
  stats: {
    totalAnswered: number
    correctAnswers: number
    favoriteQuestions: Set<number>
    categoryStats: Record<string, { correct: number; total: number }>
  }
  categories: Array<{
    id: string
    name: string
    icon: string
    color: string
  }>
  onBack: () => void
  onReset: () => void
}

export function StatsMode({ stats, categories, onBack, onReset }: StatsProps) {
  const getOverallPercentage = () => {
    if (stats.totalAnswered === 0) return 0
    return Math.round((stats.correctAnswers / stats.totalAnswered) * 100)
  }

  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: "Excelente", color: "text-green-600", bg: "bg-green-100" }
    if (percentage >= 80) return { level: "Muito Bom", color: "text-blue-600", bg: "bg-blue-100" }
    if (percentage >= 70) return { level: "Bom", color: "text-yellow-600", bg: "bg-yellow-100" }
    if (percentage >= 60) return { level: "Regular", color: "text-orange-600", bg: "bg-orange-100" }
    return { level: "Precisa Melhorar", color: "text-red-600", bg: "bg-red-100" }
  }

  const performance = getPerformanceLevel(getOverallPercentage())

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Button variant="outline" onClick={onReset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Resetar Estatísticas
          </Button>
        </div>

        {stats.totalAnswered === 0 ? (
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Nenhuma estatística disponível</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Comece a responder questões para ver suas estatísticas aqui.</p>
              <Button onClick={onBack}>Começar a Estudar</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Overall Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Desempenho Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{getOverallPercentage()}%</div>
                    <div className="text-gray-600 mb-4">Taxa de Acerto</div>
                    <Badge className={`${performance.bg} ${performance.color} border-0`}>{performance.level}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Progresso Geral</span>
                      <span>
                        {stats.correctAnswers}/{stats.totalAnswered}
                      </span>
                    </div>
                    <Progress value={getOverallPercentage()} className="h-3" />

                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold text-blue-600">{stats.totalAnswered}</div>
                        <div className="text-gray-600">Respondidas</div>
                      </div>
                      <div>
                        <div className="font-semibold text-green-600">{stats.correctAnswers}</div>
                        <div className="text-gray-600">Acertos</div>
                      </div>
                      <div>
                        <div className="font-semibold text-red-600">{stats.totalAnswered - stats.correctAnswers}</div>
                        <div className="text-gray-600">Erros</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Desempenho por Categoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => {
                    const categoryStats = stats.categoryStats[category.id]
                    if (!categoryStats || categoryStats.total === 0) {
                      return (
                        <Card key={category.id} className="p-4">
                          <div className="text-center">
                            <div className="text-2xl mb-2">{category.icon}</div>
                            <h3 className="font-semibold text-sm mb-2">{category.name}</h3>
                            <div className="text-gray-500 text-sm">Não estudado</div>
                          </div>
                        </Card>
                      )
                    }

                    const percentage = Math.round((categoryStats.correct / categoryStats.total) * 100)
                    const categoryPerformance = getPerformanceLevel(percentage)

                    return (
                      <Card key={category.id} className="p-4">
                        <div className="text-center space-y-2">
                          <div className="text-2xl">{category.icon}</div>
                          <h3 className="font-semibold text-sm">{category.name}</h3>
                          <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
                          <div className="text-xs text-gray-600">
                            {categoryStats.correct}/{categoryStats.total} acertos
                          </div>
                          <Progress value={percentage} className="h-2" />
                          <Badge
                            variant="secondary"
                            className={`text-xs ${categoryPerformance.bg} ${categoryPerformance.color} border-0`}
                          >
                            {categoryPerformance.level}
                          </Badge>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Favorites */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Questões Favoritas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{stats.favoriteQuestions.size}</div>
                  <div className="text-gray-600">
                    {stats.favoriteQuestions.size === 1
                      ? "questão marcada como favorita"
                      : "questões marcadas como favoritas"}
                  </div>
                  {stats.favoriteQuestions.size > 0 && (
                    <p className="text-sm text-gray-500 mt-2">
                      Use o modo Flashcards para revisar suas questões favoritas
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Study Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Recomendações de Estudo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getOverallPercentage() < 70 && (
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        💡 <strong>Dica:</strong> Sua taxa de acerto está abaixo de 70%. Considere revisar os conceitos
                        básicos usando o modo Flashcards.
                      </p>
                    </div>
                  )}

                  {stats.favoriteQuestions.size > 5 && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        📚 <strong>Revisão:</strong> Você tem {stats.favoriteQuestions.size} questões favoritas. É um
                        bom momento para revisá-las no modo Flashcards.
                      </p>
                    </div>
                  )}

                  {getOverallPercentage() >= 90 && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        🎉 <strong>Parabéns!</strong> Excelente desempenho! Continue praticando para manter esse nível.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
