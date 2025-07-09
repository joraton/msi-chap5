import { BookOpen, Clock, Users, Award } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl mb-12">
      <div className="flex items-start gap-6">
        {/* Icône du cours */}
        <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
          <BookOpen className="h-12 w-12 text-white" />
        </div>
        
        {/* Contenu principal */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Modélisation du Système d&apos;Information
          </h1>
          
          <p className="text-xl text-blue-100 mb-6 leading-relaxed">
            Maîtrisez les techniques de modélisation des SI à travers les cartographies métier, 
            applicative et infrastructure. Un cours essentiel pour comprendre l&apos;architecture 
            des systèmes d&apos;information modernes.
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Award className="h-5 w-5" />
              <span className="font-medium">Expert</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="h-5 w-5" />
              <span className="font-medium">3h 30min</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Users className="h-5 w-5" />
              <span className="font-medium">3 sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}