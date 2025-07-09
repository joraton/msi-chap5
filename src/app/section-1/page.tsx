import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, BarChart3, Eye, Building, FileText } from 'lucide-react';

export default function Section1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Cartographie Métier
            </h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La cartographie métier représente le système d&apos;information sous l&apos;angle 
              des processus métier et des interactions avec l&apos;écosystème.
            </p>

            {/* Vue de l'écosystème */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">Vue de l&apos;écosystème</h2>
              </div>
              <p className="text-blue-800 mb-4">
                La <strong>vue de l&apos;écosystème</strong> présente les différentes entités ou systèmes 
                avec lesquels le SI interagit pour remplir sa fonction.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Exemples d&apos;interactions :</h4>
                <ul className="space-y-1 text-blue-800">
                  <li>• Partenaires commerciaux</li>
                  <li>• Fournisseurs de services</li>
                  <li>• Organismes de contrôle</li>
                  <li>• Clients et utilisateurs finaux</li>
                </ul>
              </div>
            </div>

            {/* Vue métier */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Building className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-green-900">Vue métier du système d&apos;information</h2>
              </div>
              <p className="text-green-800 mb-4">
                La <strong>vue métier du système d&apos;information</strong> représente le SI à travers 
                ses processus et informations principales, qui sont les valeurs métier.
              </p>
            </div>

            {/* Exemples concrets */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exemples de processus métier</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-yellow-900">DÉCLARATION TVA</h3>
                </div>
                <p className="text-yellow-800 text-sm">avec ADMINISTRATION FISCALE</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-orange-900">CALCUL COÛT</h3>
                </div>
                <p className="text-orange-800 text-sm">avec CONTRÔLEUR GESTION</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">TENUE DES COMPTES</h3>
                </div>
                <p className="text-blue-800 text-sm">avec COMPTABLE</p>
              </div>
            </div>

            {/* Points clés */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Points clés à retenir</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• La cartographie métier se concentre sur les <strong>processus</strong> et les <strong>acteurs</strong></li>
                <li>• Elle identifie les <strong>flux d&apos;informations</strong> entre les différents métiers</li>
                <li>• Elle permet de comprendre la <strong>valeur ajoutée</strong> de chaque processus</li>
                <li>• Elle facilite l&apos;identification des <strong>points d&apos;amélioration</strong></li>
              </ul>
            </div>

            {/* Moyen mnémotechnique */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Moyen mnémotechnique</h3>
              <p className="text-green-800 mb-2">
                <strong>E.P.A</strong> - Écosystème, Processus, Acteurs
              </p>
              <p className="text-green-700 text-sm">
                &quot;Ensemble des Processus et Acteurs&quot; - pour retenir les éléments de la cartographie métier
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/introduction"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Introduction
            </Link>
            <Link 
              href="/section-2"
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Cartographie Applicative
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}