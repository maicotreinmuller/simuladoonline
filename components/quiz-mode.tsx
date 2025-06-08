"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Star } from "lucide-react"
import type { Question } from "@/types/question"

interface QuizModeProps {
  questions: Question[]
  category: string
  onBack: () => void
  onUpdateStats: (correct: number, total: number) => void
}

export function QuizMode({ questions, category, onBack, onUpdateStats }: QuizModeProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())
  const [quizCompleted, setQuizCompleted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return
    setSelectedAnswer(answer)
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || showResult) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    const newScore = {
      correct: score.correct + (isCorrect ? 1 : 0),
      total: score.total + 1,
    }

    setScore(newScore)
    setShowResult(true)
    setAnsweredQuestions((prev) => new Set([...prev, currentQuestionIndex]))

    if (currentQuestionIndex === questions.length - 1) {
      setQuizCompleted(true)
      onUpdateStats(newScore.correct, newScore.total)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer("")
      setShowResult(false)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer("")
      setShowResult(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer("")
    setShowResult(false)
    setScore({ correct: 0, total: 0 })
    setAnsweredQuestions(new Set())
    setQuizCompleted(false)
  }

  const getScorePercentage = () => {
    if (score.total === 0) return 0
    return Math.round((score.correct / score.total) * 100)
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Quiz Concluído!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {score.correct}/{score.total}
                </div>
                <div className="text-lg text-gray-600">{getScorePercentage()}% de acertos</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Desempenho</span>
                  <span>{getScorePercentage()}%</span>
                </div>
                <Progress value={getScorePercentage()} className="h-3" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{score.correct}</div>
                  <div className="text-sm text-gray-600">Acertos</div>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{score.total - score.correct}</div>
                  <div className="text-sm text-gray-600">Erros</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={resetQuiz} className="flex-1">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Refazer Quiz
                </Button>
                <Button variant="outline" onClick={onBack} className="flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </div>
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
          <Badge variant="secondary">{category === "all" ? "Todas as Categorias" : category}</Badge>
        </div>

        {/* Progress */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Questão {currentQuestionIndex + 1} de {questions.length}
              </span>
              <span className="text-sm text-gray-600">
                {score.correct}/{score.total} acertos
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Question */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg leading-relaxed">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const optionLetter = String.fromCharCode(97 + index) // a, b, c, d
              const isSelected = selectedAnswer === optionLetter
              const isCorrect = optionLetter === currentQuestion.correctAnswer
              const isIncorrect = showResult && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(optionLetter)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showResult
                      ? isCorrect
                        ? "border-green-500 bg-green-50 text-green-800"
                        : isIncorrect
                          ? "border-red-500 bg-red-50 text-red-800"
                          : "border-gray-200 bg-gray-50"
                      : isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="font-medium mr-3">{optionLetter.toUpperCase()})</span>
                    <span>{option}</span>
                    {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />}
                    {showResult && isIncorrect && <XCircle className="w-5 h-5 text-red-600 ml-auto" />}
                  </div>
                </button>
              )
            })}
          </CardContent>
        </Card>

        {/* Explanation */}
        {showResult && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Explicação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{currentQuestion.explanation}</p>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
            Anterior
          </Button>

          {!showResult ? (
            <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer}>
              Confirmar Resposta
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
              {currentQuestionIndex === questions.length - 1 ? "Finalizar" : "Próxima"}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
