"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react"
import type { Question } from "@/types/question"

interface FlashcardModeProps {
  questions: Question[]
  category: string
  onBack: () => void
  favorites: Set<number>
  onToggleFavorite: (questionId: number) => void
}

export function FlashcardMode({ questions, category, onBack, favorites, onToggleFavorite }: FlashcardModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  const displayQuestions = showOnlyFavorites ? questions.filter((_, index) => favorites.has(index)) : questions

  const currentQuestion = displayQuestions[currentIndex]
  const currentQuestionId = questions.indexOf(currentQuestion)

  const handleNext = () => {
    if (currentIndex < displayQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowAnswer(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setShowAnswer(false)
    }
  }

  const handleShuffle = () => {
    setCurrentIndex(0)
    setShowAnswer(false)
  }

  const toggleFavorite = () => {
    onToggleFavorite(currentQuestionId)
  }

  const toggleShowOnlyFavorites = () => {
    setShowOnlyFavorites(!showOnlyFavorites)
    setCurrentIndex(0)
    setShowAnswer(false)
  }

  if (displayQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Nenhum flashcard encontrado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                {showOnlyFavorites
                  ? "Você ainda não marcou nenhuma questão como favorita."
                  : "Não há questões disponíveis nesta categoria."}
              </p>
              <Button onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div className="flex gap-2">
            <Button variant={showOnlyFavorites ? "default" : "outline"} size="sm" onClick={toggleShowOnlyFavorites}>
              <Star className="w-4 h-4 mr-2" />
              {showOnlyFavorites ? "Todos" : "Favoritos"}
            </Button>
            <Badge variant="secondary">
              {currentIndex + 1} de {displayQuestions.length}
            </Badge>
          </div>
        </div>

        {/* Flashcard */}
        <div className="relative">
          <Card className="min-h-[400px] cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}>
            <CardHeader className="text-center">
              <div className="flex justify-between items-center">
                <Badge variant="outline">{currentQuestion.category}</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite()
                  }}
                >
                  <Star
                    className={`w-5 h-5 ${
                      favorites.has(currentQuestionId) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                    }`}
                  />
                </Button>
              </div>
              <CardTitle className="text-xl">{showAnswer ? "Resposta" : "Pergunta"}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                {!showAnswer ? (
                  <>
                    <p className="text-lg leading-relaxed">{currentQuestion.question}</p>
                    <div className="flex items-center justify-center text-gray-500 text-sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Clique para ver a resposta
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-3">
                      <p className="text-lg font-semibold text-green-600">
                        Resposta: {currentQuestion.correctAnswer.toUpperCase()}){" "}
                        {currentQuestion.options[currentQuestion.correctAnswer.charCodeAt(0) - 97]}
                      </p>
                      <p className="text-gray-700 leading-relaxed">{currentQuestion.explanation}</p>
                    </div>
                    <div className="flex items-center justify-center text-gray-500 text-sm">
                      <EyeOff className="w-4 h-4 mr-2" />
                      Clique para ver a pergunta
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={handleNext}
            disabled={currentIndex === displayQuestions.length - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          <Button variant="outline" onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? (
              <>
                <EyeOff className="w-4 h-4 mr-2" />
                Ver Pergunta
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-2" />
                Ver Resposta
              </>
            )}
          </Button>

          <Button variant="outline" onClick={handleNext} disabled={currentIndex === displayQuestions.length - 1}>
            Próximo
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Progress */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Progresso: {currentIndex + 1} de {displayQuestions.length} flashcards
          {showOnlyFavorites && <span className="ml-2 text-yellow-600">(Apenas favoritos)</span>}
        </div>
      </div>
    </div>
  )
}
