'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Brain, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Combien de cartographies fondamentales distingue-t-on dans la modélisation du SI ?",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "On distingue 3 cartographies fondamentales : Métier, Applicative et Infrastructure."
  },
  {
    id: 2,
    question: "Que représente la vue de l'écosystème ?",
    options: [
      "Les applications internes uniquement",
      "Les différentes entités avec lesquelles le SI interagit",
      "L'infrastructure physique",
      "Les processus métier internes"
    ],
    correct: 1,
    explanation: "La vue de l'écosystème présente les différentes entités ou systèmes avec lesquels le SI interagit pour remplir sa fonction."
  },
  {
    id: 3,
    question: "Quelle cartographie décrit les composants logiciels et leurs flux de données ?",
    options: [
      "Cartographie Métier",
      "Cartographie Applicative",
      "Cartographie Infrastructure",
      "Cartographie Organisationnelle"
    ],
    correct: 1,
    explanation: "La cartographie applicative décrit les composants logiciels du système d'information, les services qu'ils offrent et les flux de données entre eux."
  },
  {
    id: 4,
    question: "Que comprend la vue des infrastructures physiques ?",
    options: [
      "Uniquement les serveurs",
      "Les VLAN et adresses IP",
      "Les équipements physiques comme les BDD et serveurs",
      "Les processus métier"
    ],
    correct: 2,
    explanation: "La vue des infrastructures physiques décrit les équipements physiques qui composent le SI, en particulier les BDD et les serveurs."
  },
  {
    id: 5,
    question: "Quel est le moyen mnémotechnique pour retenir les 3 cartographies ?",
    options: [
      "M.A.I - Mon Architecte Informatique",
      "S.I.M - Système Information Modélisé",
      "C.A.R - Cartographie Architecture Réseau",
      "P.M.A - Processus Métier Application"
    ],
    correct: 0,
    explanation: "M.A.I pour Métier, Applicatif, Infrastructure - 'Mon Architecte Informatique' aide à retenir les 3 niveaux de cartographie."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-6"
            >
              <Brain className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Résultats du Quiz</h1>
            </motion.div>
            
            <div className="mb-8">
              <div className={`text-6xl font-bold mb-4 ${
                percentage >= 80 ? 'text-green-600' : 
                percentage >= 60 ? 'text-orange-600' : 'text-red-600'
              }`}>
                {percentage}%
              </div>
              <p className="text-xl text-gray-700">
                Vous avez obtenu <strong>{score}</strong> sur <strong>{questions.length}</strong> bonnes réponses
              </p>
            </div>
            
            <div className={`p-6 rounded-lg mb-8 ${
              percentage >= 80 ? 'bg-green-50 border border-green-200' : 
              percentage >= 60 ? 'bg-orange-50 border border-orange-200' : 'bg-red-50 border border-red-200'
            }`}>
              <p className={`text-lg font-medium ${
                percentage >= 80 ? 'text-green-800' : 
                percentage >= 60 ? 'text-orange-800' : 'text-red-800'
              }`}>
                {percentage >= 80 ? '🎉 Excellent ! Vous maîtrisez bien la modélisation du SI.' :
                 percentage >= 60 ? '👍 Bien ! Quelques révisions vous aideront à parfaire vos connaissances.' :
                 '📚 Il serait bon de revoir les concepts avant de continuer.'}
              </p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </button>
              
              <Link 
                href="/questions-dscg"
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Questions DSCG
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-900">Quiz d&apos;évaluation</h1>
          </div>
          
          {/* Barre de progression */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  const isCorrect = index === questions[currentQuestion].correct;
                  const showAnswer = showExplanation;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !showExplanation && handleAnswer(index)}
                      disabled={showExplanation}
                      className={`
                        w-full p-4 text-left rounded-lg border-2 transition-all duration-200
                        ${!showAnswer ? 'hover:border-orange-300 border-gray-200' : ''}
                        ${isSelected && !showAnswer ? 'border-orange-500 bg-orange-50' : ''}
                        ${showAnswer && isCorrect ? 'border-green-500 bg-green-50' : ''}
                        ${showAnswer && isSelected && !isCorrect ? 'border-red-500 bg-red-50' : ''}
                        ${showAnswer && !isSelected && !isCorrect ? 'border-gray-200 bg-gray-50' : ''}
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {showAnswer && isCorrect && <CheckCircle className="h-5 w-5 text-green-600" />}
                        {showAnswer && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8"
            >
              <h3 className="font-semibold text-blue-900 mb-2">Explication</h3>
              <p className="text-blue-800">{questions[currentQuestion].explanation}</p>
            </motion.div>
          )}
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/section-3"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Cartographie Infrastructure
            </Link>
            
            {showExplanation && (
              <button
                onClick={nextQuestion}
                className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}