import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Server, Network, HardDrive, Wifi, Database, Monitor } from 'lucide-react';

export default function Section3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Server className="h-8 w-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Cartographie Infrastructure
            </h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La cartographie infrastructure décrit les composants techniques qui supportent 
              le système d&apos;information, tant au niveau logique que physique.
            </p>

            {/* Vue des infrastructures logiques */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Network className="h-6 w-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-indigo-900">Vue des infrastructures logiques</h2>
              </div>
              <p className="text-indigo-800 mb-4">
                La <strong>vue des infrastructures logiques</strong> présente le cloisonnement logique 
                des réseaux, notamment par la définition des plages d&apos;adresses IP, des VLAN 
                et des fonctions de filtrage et routage.
              </p>
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-900 mb-2">Éléments clés :</h4>
                <ul className="space-y-1 text-indigo-800">
                  <li>• <strong>Plages d&apos;adresses IP</strong> : segmentation réseau logique</li>
                  <li>• <strong>VLAN</strong> : réseaux locaux virtuels</li>
                  <li>• <strong>Fonctions de filtrage</strong> : pare-feu, ACL</li>
                  <li>• <strong>Routage</strong> : chemins de communication entre réseaux</li>
                </ul>
              </div>
            </div>

            {/* Vue des infrastructures physiques */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <HardDrive className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">Vue des infrastructures physiques</h2>
              </div>
              <p className="text-blue-800 mb-4">
                La <strong>vue des infrastructures physiques</strong> décrit les équipements 
                physiques qui composent le système d&apos;information ou utilisés par celui-ci, 
                en particulier les BDD et les Serveurs.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Composants physiques :</h4>
                <ul className="space-y-1 text-blue-800">
                  <li>• <strong>Serveurs</strong> : machines physiques et virtuelles</li>
                  <li>• <strong>Bases de données (BDD)</strong> : stockage des données</li>
                  <li>• <strong>Équipements réseau</strong> : commutateurs, routeurs</li>
                  <li>• <strong>Stockage</strong> : SAN, NAS, systèmes de sauvegarde</li>
                </ul>
              </div>
            </div>

            {/* Architecture réseau */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Architecture réseau en couches</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <Wifi className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-red-900">Couche Accès</h3>
                </div>
                <p className="text-red-800 text-sm">Connexion des utilisateurs finaux (commutateurs d&apos;accès, points d&apos;accès WiFi)</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-orange-900">Couche Distribution</h3>
                </div>
                <p className="text-orange-800 text-sm">Agrégation du trafic et application des politiques (commutateurs de distribution)</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-green-900">Couche Cœur</h3>
                </div>
                <p className="text-green-800 text-sm">Transport haute vitesse entre sites (routeurs de cœur, liaisons WAN)</p>
              </div>
            </div>

            {/* Types d'équipements */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types d&apos;équipements</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-purple-900">Serveurs de données</h3>
                </div>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• Serveurs de bases de données</li>
                  <li>• Serveurs de fichiers</li>
                  <li>• Serveurs de sauvegarde</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Monitor className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">Serveurs applicatifs</h3>
                </div>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Serveurs web</li>
                  <li>• Serveurs d&apos;applications</li>
                  <li>• Serveurs de messagerie</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-green-900">Équipements réseau</h3>
                </div>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Routeurs</li>
                  <li>• Commutateurs (switches)</li>
                  <li>• Pare-feu</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <HardDrive className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-yellow-900">Stockage</h3>
                </div>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Baies de stockage SAN</li>
                  <li>• Serveurs NAS</li>
                  <li>• Systèmes de sauvegarde</li>
                </ul>
              </div>
            </div>

            {/* Sécurité infrastructure */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Sécurité de l&apos;infrastructure</h3>
              <ul className="space-y-2 text-red-800">
                <li>• <strong>Segmentation réseau</strong> : isolation des zones sensibles</li>
                <li>• <strong>Contrôle d&apos;accès</strong> : authentification et autorisation</li>
                <li>• <strong>Chiffrement</strong> : protection des données en transit et au repos</li>
                <li>• <strong>Surveillance</strong> : monitoring et détection d&apos;intrusions</li>
              </ul>
            </div>

            {/* Moyen mnémotechnique */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">Moyen mnémotechnique</h3>
              <p className="text-indigo-800 mb-2">
                <strong>L.P.S.R</strong> - Logique, Physique, Sécurité, Réseau
              </p>
              <p className="text-indigo-700 text-sm">
                &quot;Les Piliers Solides du Réseau&quot; - pour retenir les aspects de l&apos;infrastructure
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/section-2"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Cartographie Applicative
            </Link>
            <Link 
              href="/quiz"
              className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              Quiz d&apos;évaluation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}