'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, ChevronDown, ChevronUp, BookOpen, Target, Lightbulb, CheckCircle } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';

interface QuestionSection {
  id: string;
  session: string;
  question: string;
  correction: string;
  context?: string;
}

const questionsData: QuestionSection[] = [
  {
    id: 'session-2023-q9',
    session: 'Session 2023',
    question: 'Après avoir défini la notion d\'urbanisation du Système d\'information, présenter un minimum de trois éléments de révision des documents d\'urbanisation dans le cadre des bascules de GED chez vos clients.',
    correction: `L'urbanisation du système d'information vise à assurer la **cohérence des évolutions et transformations** du SI avec les objectifs métiers et opérationnels de l'entreprise, en respectant sa stratégie. Elle assure la **direction de la transformation continue du SI** et la conservation d'un **SI applicatif homogène** lors de chaque évolution ou changement de processus informatique.

Parmi les éléments de révision des documents d'urbanisation, figurent notamment les **éléments de processus**. La nouvelle GED (Gestion Électronique Documentaire) peut introduire de nouvelles fonctionnalités applicatives qui doivent être cataloguées dans l'urbanisation du SI sous forme de **cartographie des processus**.

D'autres éléments à réviser sont :
- Les éléments d'infrastructure technique
- Les éléments d'interface
- Les éléments de sécurité
- Les éléments d'architecture applicative`,
    context: 'Dossier 1, Question 9'
  },
  {
    id: 'session-2022-q2',
    session: 'Session 2022',
    question: 'Modéliser le nouveau schéma d\'architecture que les trois sociétés doivent atteindre fin 2022.',
    correction: `La correction détaille précisément les **modifications à apporter au schéma d'architecture existant** pour atteindre la cible d'indépendance de la société Digital Integration.

Cela inclut :

**Suppressions :**
- GED
- Base de données
- Lien VPN

**Ajouts :**
- Serveur de sauvegarde
- GED
- ERP
- Base de données pour ERP/GED
- Annuaire Active Directory

**Conservation :**
- CRM
- Messagerie
- Modem/routeur

Un **schéma d'architecture modélisé** est fourni, montrant la nouvelle répartition et interconnexion des composants du SI pour les différentes entités.`,
    context: 'Dossier 1, Question 2'
  },
  {
    id: 'session-2019-q2',
    session: 'Session 2019',
    question: 'Cartographier les processus des deux métiers (le marketing et les achats/approvisionnement) ciblés par la démarche d\'urbanisation du SI de SOLIDOR.',
    correction: `La **cartographie des processus métier** est définie comme une **représentation graphique des activités** articulées au sein d'un métier, visant à délivrer un produit ou service créateur de valeur ajoutée.

Pour les métiers du marketing et des achats/approvisionnement, la cartographie vise à **schématiser la cohérence, le suivi et le contrôle** des opérations :

**Marketing :**
- Personnalisation de l'offre
- Évaluation de la fidélité/satisfaction

**Achats/Approvisionnement :**
- Opérations d'achat
- Opérations d'approvisionnement
- Suivi et contrôle des processus`,
    context: 'Dossier 1, Question 2'
  },
  {
    id: 'session-2019-q3',
    session: 'Session 2019',
    question: 'Proposer une représentation graphique synthétique (par exemple un diagramme d\'Ishikawa ou un diagramme « en arrêtes de poisson ») du processus d\'urbanisation du SI de SOLIDOR ayant pour objectif l\'augmentation des volumes des ventes.',
    correction: `La correction indique que le **diagramme d'Ishikawa** (ou en arêtes de poisson) permet d'analyser les causes (les 5M : Machine, Main d'œuvre, Méthode, Matière, Milieu) pour atteindre un effet désiré (ici, augmenter les volumes des ventes).

**Méthodologie :**
1. Formuler l'effet recherché
2. Déterminer les dispositifs requis pour chacune des cinq catégories de causes
3. Les représenter de manière lisible et synthétique

**Les 5M :**
- **Machine** : Infrastructure technique
- **Main d'œuvre** : Compétences et formation
- **Méthode** : Processus et procédures
- **Matière** : Données et informations
- **Milieu** : Environnement organisationnel

Bien que ce ne soit pas une modélisation purement technique du SI, c'est une **modélisation visuelle du processus d'urbanisation** lié au SI et à ses objectifs.`,
    context: 'Dossier 1, Question 3'
  },
  {
    id: 'session-2016-q3',
    session: 'Session 2016',
    question: 'En tenant compte de l\'historique de SOVANI, justifier le recours à une réflexion sur l\'urbanisation du SI.',
    correction: `La correction met en évidence que le SI de SOVANI a été construit "au fur et à mesure, en urgence parfois, **sans véritable schéma directeur**". Cela a conduit à une coexistence d'applications globalement non intégrées.

**Justifications de l'urbanisation :**

Le recours à l'urbanisation du SI est justifié pour **repenser et reconstruire la cartographie applicative**, pour qu'elle réponde aux besoins :
- D'intégration
- De performance
- Face aux nouveaux besoins liés aux objets connectés

**Objectifs :**
L'urbanisation doit permettre d'isoler des "zones, quartiers et blocs fonctionnels aptes à interagir avec le reste du système".

**Bénéfices attendus :**
- Cohérence du SI
- Meilleure intégration des applications
- Performance optimisée
- Adaptabilité aux nouvelles technologies`,
    context: 'Dossier 1, Question 3'
  }
];

export default function QuestionsDSCGPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
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
              <span className="text-red-600 font-medium">Questions DSCG</span>
            </div>
            <BackToPlanButton />
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="h-8 w-8 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Questions DSCG - Modélisation SI
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Questions d'examens DSCG avec corrections détaillées sur la modélisation 
            et l'urbanisation des systèmes d'information
          </p>
        </div>

        {/* Introduction théorique */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Rappels théoriques</h2>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              La <strong>modélisation du SI</strong> est une étape <strong>majeure</strong> et fondamentale pour atteindre un <strong>consensus sur l'existant</strong> au sein d'une organisation. Cette démarche s'appuie sur des approches complémentaires, chacune visant à représenter un aspect spécifique du SI et à gérer ses évolutions.
            </p>
            
            <p className="text-gray-700 mb-6">
              Elle est essentielle pour l'urbanisation du SI, qui vise à assurer la <strong>cohérence des évolutions et transformations</strong> du SI avec les objectifs métiers et opérationnels de l'entreprise, en respectant la stratégie du SI.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Les trois cartographies fondamentales :</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">1. Cartographie Métier</h4>
                <p className="text-sm text-green-700">
                  Représente le SI à travers ses <strong>processus et informations principales</strong>, qui constituent les valeurs métier.
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">2. Cartographie Applicative</h4>
                <p className="text-sm text-purple-700">
                  Décrit les <strong>composants logiciels</strong> du système d'information, les services qu'ils offrent et les <strong>flux de données</strong> entre eux.
                </p>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-800 mb-2">3. Cartographie Infrastructure</h4>
                <p className="text-sm text-indigo-700">
                  Comprend la <strong>vue des infrastructures logiques</strong> et la <strong>vue des infrastructures physiques</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Questions DSCG */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">Questions d'examens DSCG</h2>
          </div>

          {questionsData.map((question) => (
            <div key={question.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* En-tête de la question */}
              <div 
                className="bg-red-50 border-l-4 border-red-500 p-6 cursor-pointer hover:bg-red-100 transition-colors"
                onClick={() => toggleSection(question.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {question.session}
                      </span>
                      {question.context && (
                        <span className="text-red-600 text-sm font-medium">
                          {question.context}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {question.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedSections.includes(question.id) ? (
                      <ChevronUp className="h-5 w-5 text-red-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                </div>
              </div>

              {/* Correction */}
              {expandedSections.includes(question.id) && (
                <div className="p-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h4 className="text-lg font-semibold text-gray-900">Correction détaillée</h4>
                  </div>
                  <div className="prose max-w-none">
                    <div 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: question.correction
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\n\n/g, '</p><p>')
                          .replace(/\n/g, '<br>')
                          .replace(/^/, '<p>')
                          .replace(/$/, '</p>')
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conseils */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-900">Conseils pour l'examen</h3>
          </div>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Maîtrisez les trois types de cartographies et leurs objectifs spécifiques</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Comprenez la différence entre urbanisation et simple organisation du SI</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Sachez justifier le recours à l'urbanisation dans des contextes donnés</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Pratiquez la modélisation graphique (diagrammes, schémas d'architecture)</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/quiz" 
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au Quiz
          </Link>
          
          <BackToPlanButton />
        </div>
      </div>
    </div>
  );
}