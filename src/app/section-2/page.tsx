import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Network, Layers, Shield, Scan, FileText, Calculator, Building2 } from 'lucide-react';

export default function Section2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Network className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Cartographie Applicative
            </h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La cartographie applicative décrit les composants logiciels du système d&apos;information 
              et leurs interactions.
            </p>

            {/* Vue des applications */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-purple-900">Vue des applications</h2>
              </div>
              <p className="text-purple-800 mb-4">
                La <strong>vue des applications</strong> décrit les composants logiciels du système 
                d&apos;information, les services qu&apos;ils offrent et les flux de données entre eux.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Éléments clés :</h4>
                <ul className="space-y-1 text-purple-800">
                  <li>• <strong>Composants logiciels</strong> : applications métier, middleware, bases de données</li>
                  <li>• <strong>Services offerts</strong> : fonctionnalités exposées par chaque application</li>
                  <li>• <strong>Flux de données</strong> : échanges d&apos;informations entre applications</li>
                  <li>• <strong>Interfaces</strong> : points de connexion entre systèmes</li>
                </ul>
              </div>
            </div>

            {/* Vue de l'administration */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">Vue de l&apos;administration</h2>
              </div>
              <p className="text-blue-800 mb-4">
                La <strong>vue de l&apos;administration</strong> répertorie les périmètres et les niveaux 
                de privilèges des utilisateurs et des administrateurs.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Aspects couverts :</h4>
                <ul className="space-y-1 text-blue-800">
                  <li>• <strong>Gestion des droits</strong> : qui peut accéder à quoi</li>
                  <li>• <strong>Rôles et responsabilités</strong> : définition des profils utilisateurs</li>
                  <li>• <strong>Sécurité</strong> : contrôles d&apos;accès et authentification</li>
                  <li>• <strong>Audit</strong> : traçabilité des actions</li>
                </ul>
              </div>
            </div>

            {/* Exemples d'applications */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exemples d&apos;applications</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Scan className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-green-900">APPLICATION SCAN</h3>
                </div>
                <p className="text-green-800 text-sm">Numérisation et traitement des documents</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">APPLICATION EDI</h3>
                </div>
                <p className="text-blue-800 text-sm">Échange de Données Informatisé</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-orange-900">APPLICATION FACTURX</h3>
                </div>
                <p className="text-orange-800 text-sm">Facture électronique structurée</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-yellow-900">APPLICATION COMPTA ANALYTIQUE</h3>
                </div>
                <p className="text-yellow-800 text-sm">Analyse des coûts et rentabilité</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-indigo-900">APPLICATION COMPTABLE</h3>
                </div>
                <p className="text-indigo-800 text-sm">Gestion de la comptabilité générale</p>
              </div>
            </div>

            {/* Architecture en couches */}
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Architecture en couches</h3>
              <div className="space-y-3">
                <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-500">
                  <strong className="text-blue-900">Couche Présentation</strong>
                  <p className="text-blue-800 text-sm">Interfaces utilisateur, portails web</p>
                </div>
                <div className="bg-green-100 p-3 rounded border-l-4 border-green-500">
                  <strong className="text-green-900">Couche Métier</strong>
                  <p className="text-green-800 text-sm">Logique applicative, règles de gestion</p>
                </div>
                <div className="bg-purple-100 p-3 rounded border-l-4 border-purple-500">
                  <strong className="text-purple-900">Couche Données</strong>
                  <p className="text-purple-800 text-sm">Bases de données, entrepôts de données</p>
                </div>
              </div>
            </div>

            {/* Moyen mnémotechnique */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Moyen mnémotechnique</h3>
              <p className="text-purple-800 mb-2">
                <strong>A.S.F.I</strong> - Applications, Services, Flux, Interfaces
              </p>
              <p className="text-purple-700 text-sm">
                &quot;Architecte Système Fait l&apos;Interface&quot; - pour retenir les composants de la cartographie applicative
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/section-1"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Cartographie Métier
            </Link>
            <Link 
              href="/section-3"
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Cartographie Infrastructure
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}