'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText, ChevronDown, ChevronUp, Target, Lightbulb, CheckCircle, Building2, Network, Server } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';

interface Exercise {
  id: string;
  title: string;
  type: 'metier' | 'applicative' | 'infrastructure';
  context: string;
  questions: string[];
  tips: string[];
  correction: string[];
}

const exercisesData: Exercise[] = [
  {
    id: 'exercice-1',
    title: 'Cartographie des Applications Métier',
    type: 'applicative',
    context: 'Une entreprise souhaite moderniser son SI et doit d\'abord cartographier ses applications existantes : APPLICATION SCAN, APPLICATION EDI, APPLICATION FACTURX (facture électronique), APPLICATION COMPTA ANALYTIQUE, APPLICATION COMPTABLE.',
    questions: [
      '1. Classez ces applications selon les trois couches de l\'architecture applicative (Présentation, Métier, Données).',
      '2. Identifiez les flux de données probables entre ces applications.',
      '3. Proposez une vue d\'administration pour gérer les droits d\'accès.'
    ],
    tips: [
      'Analysez la fonction de chaque application pour déterminer sa couche',
      'Les flux suivent généralement la logique métier (scan → traitement → comptabilité)',
      'Pensez aux profils utilisateurs et à la séparation des responsabilités'
    ],
    correction: [
      '**1. Classification par couches :**\n\n**Couche Présentation :**\n• APPLICATION SCAN (interface de numérisation)\n\n**Couche Métier :**\n• APPLICATION EDI (logique d\'échange)\n• APPLICATION FACTURX (traitement factures)\n• APPLICATION COMPTA ANALYTIQUE (calculs analytiques)\n\n**Couche Données :**\n• APPLICATION COMPTABLE (stockage données comptables)',
      '**2. Flux de données :**\n\n• **SCAN → EDI** : documents numérisés\n• **EDI → FACTURX** : données structurées\n• **FACTURX → COMPTABLE** : écritures comptables\n• **COMPTABLE → COMPTA ANALYTIQUE** : données pour analyse\n• **COMPTA ANALYTIQUE → COMPTABLE** : ventilations analytiques',
      '**3. Vue d\'administration :**\n\n**Profils utilisateurs :**\n• **Opérateur scan** : accès APPLICATION SCAN uniquement\n• **Gestionnaire EDI** : accès EDI + consultation SCAN\n• **Comptable** : accès COMPTABLE + FACTURX\n• **Contrôleur de gestion** : accès COMPTA ANALYTIQUE + consultation\n• **Administrateur** : accès complet + gestion des droits'
    ]
  },
  {
    id: 'exercice-2',
    title: 'Gouvernance et Architecture SI - Groupe SD3i',
    type: 'infrastructure',
    context: 'Afin de réussir la réorganisation des DSI du groupe SD3i, vous intervenez en premier lieu sur la gouvernance et l\'architecture du système d\'information. L\'objectif est de proposer un schéma qui doit répondre à l\'indépendance totale du système d\'information de la société DIGITAL INTEGRATION.',
    questions: [
      '1. Définir la notion de gouvernance des systèmes d\'information et préciser pourquoi il est important de la redéfinir dans ce contexte.',
      '2. Modélisez le nouveau schéma d\'architecture que les trois sociétés doivent atteindre fin 2022 pour assurer l\'indépendance totale du système d\'information de la société DIGITAL INTEGRATION.'
    ],
    tips: [
      'La gouvernance SI concerne la prise de décision, le contrôle et la supervision des SI',
      'Pensez aux enjeux de séparation des systèmes lors d\'une réorganisation',
      'L\'indépendance implique des systèmes autonomes avec leurs propres ressources'
    ],
    correction: [
      '**1. Gouvernance des SI :**\n\nLa gouvernance des systèmes d\'information désigne l\'ensemble des processus, structures et mécanismes qui permettent de diriger, contrôler et superviser les SI d\'une organisation. Elle comprend :\n\n• **Prise de décision** : définition des orientations stratégiques SI\n• **Allocation des ressources** : budget, personnel, infrastructure\n• **Gestion des risques** : sécurité, continuité, conformité\n• **Performance** : mesure et pilotage de la valeur créée\n\n**Importance de la redéfinition :**\n\n• **Séparation des entités** : chaque société doit avoir sa propre gouvernance\n• **Autonomie décisionnelle** : indépendance dans les choix technologiques\n• **Responsabilités claires** : définition des rôles et responsabilités\n• **Conformité réglementaire** : respect des obligations légales',
      '**2. Nouveau schéma d\'architecture :**\n\n**Architecture cible :**\n\n• **Systèmes séparés** : chaque société dispose de ses propres applications\n• **Infrastructures dédiées** : serveurs, bases de données, réseaux indépendants\n• **Interfaces contrôlées** : échanges de données sécurisés et maîtrisés\n• **Gouvernance autonome** : DSI indépendantes avec leurs propres processus\n\n**Principes d\'indépendance :**\n\n• **Isolation technique** : pas de dépendances système\n• **Autonomie fonctionnelle** : capacité à fonctionner seul\n• **Sécurité renforcée** : contrôle d\'accès strict entre entités'
    ]
  },
  {
    id: 'exercice-3',
    title: 'Exemples Pratiques de Cartographie Métier',
    type: 'metier',
    context: 'À partir des exemples du cours, vous devez identifier et modéliser les interactions métier d\'une entreprise avec ses partenaires externes.',
    questions: [
      '1. Modélisez la vue écosystème pour les processus suivants : DECLARATION TVA avec ADMINISTRATION FISCALE, CALCUL COUT avec CONTROLEUR GESTION, TENUE DES COMPTES avec COMPTABLE.',
      '2. Identifiez les acteurs internes et externes pour chaque processus.',
      '3. Proposez une représentation des flux d\'information entre ces processus.'
    ],
    tips: [
      'La vue écosystème présente les différentes entités avec lesquelles le SI interagit',
      'Distinguez les acteurs internes (employés) des acteurs externes (administrations, clients)',
      'Les flux d\'information suivent la logique des processus métier'
    ],
    correction: [
      '**1. Vue écosystème :**\n\n**DECLARATION TVA :**\n• Acteur interne : Service comptable\n• Acteur externe : Administration fiscale\n• Interaction : Transmission déclarations TVA\n\n**CALCUL COUT :**\n• Acteur interne : Contrôleur de gestion\n• Acteur externe : Aucun (processus interne)\n• Interaction : Analyse des coûts et rentabilité\n\n**TENUE DES COMPTES :**\n• Acteur interne : Comptable\n• Acteur externe : Expert-comptable, commissaire aux comptes\n• Interaction : Saisie, validation, contrôle des écritures',
      '**2. Acteurs identifiés :**\n\n**Internes :**\n• Service comptable\n• Contrôleur de gestion\n• Comptable\n• Direction financière\n\n**Externes :**\n• Administration fiscale\n• Expert-comptable\n• Commissaire aux comptes\n• Banques (pour rapprochements)',
      '**3. Flux d\'information :**\n\n• **TENUE DES COMPTES → CALCUL COUT** : données comptables pour analyse\n• **CALCUL COUT → DECLARATION TVA** : ventilations pour déclarations\n• **TENUE DES COMPTES → DECLARATION TVA** : base de calcul TVA\n• **DECLARATION TVA → ADMINISTRATION FISCALE** : déclarations officielles\n• **TENUE DES COMPTES → EXPERT-COMPTABLE** : données pour révision'
    ]
  }
];

export default function ExercicesPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [showCorrections, setShowCorrections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleCorrection = (exerciseId: string) => {
    setShowCorrections(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'metier': return Building2;
      case 'applicative': return Network;
      case 'infrastructure': return Server;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'metier': return 'green';
      case 'applicative': return 'purple';
      case 'infrastructure': return 'indigo';
      default: return 'gray';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Accueil
              </Link>
              <span>&gt;</span>
              <span>Cours</span>
              <span>&gt;</span>
              <span>Modélisation du SI</span>
              <span>&gt;</span>
              <span className="text-blue-600 font-medium">Exercices Pratiques</span>
            </div>
            <BackToPlanButton />
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Exercices Pratiques - Modélisation SI
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Exercices d'application des concepts de modélisation du SI basés sur des cas concrets
          </p>
        </div>

        {/* Méthodologie */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-900">Méthodologie</h2>
          </div>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Lisez attentivement</strong> le contexte et les questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Structurez votre réponse</strong> en suivant le plan des questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Justifiez vos choix</strong> avec des arguments techniques</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Utilisez le vocabulaire</strong> spécialisé approprié</span>
            </li>
          </ul>
        </div>

        {/* Exercices */}
        <div className="space-y-6">
          {exercisesData.map((exercise) => {
            const TypeIcon = getTypeIcon(exercise.type);
            const typeColor = getTypeColor(exercise.type);
            
            return (
              <div key={exercise.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* En-tête de l'exercice */}
                <div 
                  className={`bg-${typeColor}-50 border-l-4 border-${typeColor}-500 p-6 cursor-pointer hover:bg-${typeColor}-100 transition-colors`}
                  onClick={() => toggleSection(exercise.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <TypeIcon className={`h-6 w-6 text-${typeColor}-600`} />
                        <span className={`bg-${typeColor}-500 text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {exercise.type.charAt(0).toUpperCase() + exercise.type.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exercise.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedSections.includes(exercise.id) ? (
                        <ChevronUp className={`h-5 w-5 text-${typeColor}-600`} />
                      ) : (
                        <ChevronDown className={`h-5 w-5 text-${typeColor}-600`} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Contenu de l'exercice */}
                {expandedSections.includes(exercise.id) && (
                  <div className="p-6 border-t border-gray-200">
                    {/* Contexte */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                      <h4 className="font-semibold text-yellow-900 mb-2">Contexte</h4>
                      <p className="text-yellow-800">{exercise.context}</p>
                    </div>
                    
                    {/* Questions */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Questions :</h4>
                      <div className="space-y-3">
                        {exercise.questions.map((question, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-800">{question}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Conseils */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-900">Conseils méthodologiques</h4>
                      </div>
                      <ul className="space-y-1 text-green-800">
                        {exercise.tips.map((tip, index) => (
                          <li key={index}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Bouton correction */}
                    <div className="flex justify-center mb-4">
                      <button
                        onClick={() => toggleCorrection(exercise.id)}
                        className={`bg-${typeColor}-600 text-white px-6 py-3 rounded-lg hover:bg-${typeColor}-700 transition-colors font-medium`}
                      >
                        {showCorrections.includes(exercise.id) ? 'Masquer la correction' : 'Voir la correction'}
                      </button>
                    </div>
                    
                    {/* Correction */}
                    {showCorrections.includes(exercise.id) && (
                      <div className={`bg-${typeColor}-50 border-l-4 border-${typeColor}-500 p-6`}>
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className={`h-5 w-5 text-${typeColor}-600`} />
                          <h4 className={`font-semibold text-${typeColor}-900`}>Correction détaillée</h4>
                        </div>
                        <div className="space-y-4">
                          {exercise.correction.map((correction, index) => (
                            <div key={index} className={`text-${typeColor}-800`}>
                              <div 
                                dangerouslySetInnerHTML={{ 
                                  __html: correction
                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    .replace(/\n\n/g, '</p><p>')
                                    .replace(/\n/g, '<br>')
                                    .replace(/^/, '<p>')
                                    .replace(/$/, '</p>')
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/section-3" 
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Cartographie Infrastructure
          </Link>
          
          <Link 
            href="/quiz" 
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            Quiz d'évaluation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}