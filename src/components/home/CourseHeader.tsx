import { BookOpen, Clock, Users, Award } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-xl mb-8 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Icône du cours */}
        <div className="bg-white/20 p-3 sm:p-4 rounded-lg sm:rounded-xl backdrop-blur-sm flex-shrink-0">
          <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
        </div>
        
        {/* Contenu principal */}
        <div className="flex-1 w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Modélisation du Système d&apos;Information
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-4 sm:mb-6 leading-relaxed">
            Maîtrisez les techniques de modélisation des SI à travers les cartographies métier, 
            applicative et infrastructure. Un cours essentiel pour comprendre l&apos;architecture 
            des systèmes d&apos;information modernes.
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm text-sm sm:text-base">
              <Award className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-medium">Expert</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm text-sm sm:text-base">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-medium">3h 30min</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm text-sm sm:text-base">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-medium">3 sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}