import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Target, Users } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Introduction à la Modélisation du SI
          </h1>
          
          {/* Objectifs */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Target className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-blue-900">Objectifs d&apos;apprentissage</h2>
            </div>
            <ul className="space-y-2 text-blue-800">
              <li>• Comprendre l&apos;importance de la modélisation dans la gestion des SI</li>
              <li>• Identifier les trois cartographies fondamentales</li>
              <li>• Maîtriser les concepts de base de l&apos;architecture SI</li>
            </ul>
          </div>

          {/* Contenu principal */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce que la modélisation du SI ?</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              La démarche de modélisation est une <strong>phase majeure</strong> pour parvenir à un 
              consensus sur l&apos;existant. Elle repose sur des approches complémentaires visant 
              chacune à représenter un des aspects du SI et permettant de gérer les évolutions du SI.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-900">Point clé</h3>
              </div>
              <p className="text-yellow-800">
                On distingue <strong>3 cartographies fondamentales</strong> qui chacune servent à 
                illustrer un angle du SI utile au responsable du SI.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les trois cartographies essentielles</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-3">1. Cartographie Métier</h3>
                <p className="text-green-800 text-sm">
                  Représente le SI à travers ses processus et informations principales, 
                  qui sont les valeurs métier.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">2. Cartographie Applicative</h3>
                <p className="text-purple-800 text-sm">
                  Décrit les composants logiciels du système d&apos;information, 
                  les services qu&apos;ils offrent et les flux de données.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">3. Cartographie Infrastructure</h3>
                <p className="text-indigo-800 text-sm">
                  Présente les infrastructures logiques et physiques qui composent 
                  le système d&apos;information.
                </p>
              </div>
            </div>

            {/* Moyens mnémotechniques */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-900">Moyen mnémotechnique</h3>
              </div>
              <p className="text-purple-800 mb-2">
                <strong>M.A.I</strong> - Métier, Applicatif, Infrastructure
              </p>
              <p className="text-purple-700 text-sm">
                &quot;Mon Architecte Informatique&quot; - pour retenir les 3 niveaux de cartographie
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <div></div>
            <Link 
              href="/section-1"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Cartographie Métier
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}