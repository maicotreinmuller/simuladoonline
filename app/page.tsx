"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Brain, Trophy } from "lucide-react"
import { QuizMode } from "@/components/quiz-mode"
import { FlashcardMode } from "@/components/flashcard-mode"
import { StatsMode } from "@/components/stats-mode"
import { questions } from "@/data/questions"

export default function StudyApp() {
  const [currentMode, setCurrentMode] = useState<"home" | "quiz" | "flashcards" | "stats">("home")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [userStats, setUserStats] = useState({
    totalAnswered: 0,
    correctAnswers: 0,
    favoriteQuestions: new Set<number>(),
    categoryStats: {} as Record<string, { correct: number; total: number }>,
  })

  const categories = [
    { id: "redes", name: "Redes", icon: "🌐", color: "bg-blue-500" },
    { id: "banco-dados", name: "Bancos de Dados", icon: "🗄️", color: "bg-green-500" },
    { id: "seguranca", name: "Segurança", icon: "🔒", color: "bg-red-500" },
    { id: "governanca", name: "Governança de TI", icon: "📋", color: "bg-purple-500" },
    { id: "programacao", name: "Programação", icon: "💻", color: "bg-yellow-500" },
    { id: "sistemas", name: "Administração de Sistemas", icon: "⚙️", color: "bg-gray-500" },
    { id: "ia", name: "Inteligência Artificial", icon: "🤖", color: "bg-pink-500" },
    { id: "itil4", name: "ITIL 4", icon: "📊", color: "bg-indigo-500" },
    { id: "cloud", name: "Cloud Computing", icon: "☁️", color: "bg-cyan-500" },
  ]

  const getCategoryQuestions = (categoryId: string) => {
    if (categoryId === "all") return questions
    return questions.filter((q) => q.category === categoryId)
  }

  const getOverallProgress = () => {
    if (userStats.totalAnswered === 0) return 0
    return Math.round((userStats.correctAnswers / userStats.totalAnswered) * 100)
  }

  if (currentMode === "quiz") {
    return (
      <QuizMode
        questions={getCategoryQuestions(selectedCategory)}
        category={selectedCategory}
        onBack={() => setCurrentMode("home")}
        onUpdateStats={(correct, total) => {
          setUserStats((prev) => ({
            ...prev,
            totalAnswered: prev.totalAnswered + total,
            correctAnswers: prev.correctAnswers + correct,
          }))
        }}
      />
    )
  }

  if (currentMode === "flashcards") {
    return (
      <FlashcardMode
        questions={getCategoryQuestions(selectedCategory)}
        category={selectedCategory}
        onBack={() => setCurrentMode("home")}
        favorites={userStats.favoriteQuestions}
        onToggleFavorite={(questionId) => {
          setUserStats((prev) => {
            const newFavorites = new Set(prev.favoriteQuestions)
            if (newFavorites.has(questionId)) {
              newFavorites.delete(questionId)
            } else {
              newFavorites.add(questionId)
            }
            return { ...prev, favoriteQuestions: newFavorites }
          })
        }}
      />
    )
  }

  if (currentMode === "stats") {
    return (
      <StatsMode
        stats={userStats}
        categories={categories}
        onBack={() => setCurrentMode("home")}
        onReset={() => {
          setUserStats({
            totalAnswered: 0,
            correctAnswers: 0,
            favoriteQuestions: new Set(),
            categoryStats: {},
          })
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">📚 Simulado TRF4 2025 - Tecnologia</h1>
          <p className="text-gray-600 text-lg">Estude para concursos públicos com questões de tecnologia, IA e ITIL4</p>

          {userStats.totalAnswered > 0 && (
            <div className="mt-4 max-w-md mx-auto">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progresso Geral</span>
                <span>
                  {userStats.correctAnswers}/{userStats.totalAnswered} ({getOverallProgress()}%)
                </span>
              </div>
              <Progress value={getOverallProgress()} className="h-2" />
            </div>
          )}
        </div>

        {/* Mode Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-300">
            <CardHeader className="text-center">
              <Brain className="w-12 h-12 mx-auto text-blue-500 mb-2" />
              <CardTitle>Modo Quiz</CardTitle>
              <CardDescription>Teste seus conhecimentos com questões de múltipla escolha</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={() => setCurrentMode("quiz")}>
                Iniciar Quiz
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-green-300">
            <CardHeader className="text-center">
              <BookOpen className="w-12 h-12 mx-auto text-green-500 mb-2" />
              <CardTitle>Flashcards</CardTitle>
              <CardDescription>Memorize termos e conceitos importantes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" onClick={() => setCurrentMode("flashcards")}>
                Estudar Termos
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-purple-300">
            <CardHeader className="text-center">
              <Trophy className="w-12 h-12 mx-auto text-purple-500 mb-2" />
              <CardTitle>Estatísticas</CardTitle>
              <CardDescription>Acompanhe seu progresso e desempenho</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" onClick={() => setCurrentMode("stats")}>
                Ver Progresso
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Category Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Escolha uma Categoria
            </CardTitle>
            <CardDescription>Selecione uma área específica para focar seus estudos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedCategory === "all" ? "ring-2 ring-blue-500 bg-blue-50" : ""
                }`}
                onClick={() => setSelectedCategory("all")}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <h3 className="font-semibold">Todas as Categorias</h3>
                  <Badge variant="secondary" className="mt-2">
                    {questions.length} questões
                  </Badge>
                </CardContent>
              </Card>

              {categories.map((category) => {
                const categoryQuestions = getCategoryQuestions(category.id)
                return (
                  <Card
                    key={category.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedCategory === category.id ? "ring-2 ring-blue-500 bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2">{category.icon}</div>
                      <h3 className="font-semibold text-sm">{category.name}</h3>
                      <Badge variant="secondary" className="mt-2">
                        {categoryQuestions.length} questões
                      </Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        {userStats.totalAnswered > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Resumo de Desempenho
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{userStats.totalAnswered}</div>
                  <div className="text-sm text-gray-600">Questões Respondidas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{userStats.correctAnswers}</div>
                  <div className="text-sm text-gray-600">Acertos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{getOverallProgress()}%</div>
                  <div className="text-sm text-gray-600">Taxa de Acerto</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{userStats.favoriteQuestions.size}</div>
                  <div className="text-sm text-gray-600">Favoritos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
