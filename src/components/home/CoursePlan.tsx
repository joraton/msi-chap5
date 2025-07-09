import { Target } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { 
  Rocket, 
  BarChart3, 
  Network, 
  Server, 
  FileText,
  Brain, 
  GraduationCap 
} from 'lucide-react';

export default function CoursePlan() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      description: 'Concepts de base et définitions de la modélisation SI',
      icon: Rocket,
      color: 'blue',
      href: '/introduction'
    },
    {
      id: 'section-1',
      title: 'Cartographie Métier',
      description: 'Vue écosystème et processus métier du système d\'information',
      icon: BarChart3,
      color: 'green',
      href: '/section-1'
    },
    {
      id: 'section-2', 
      title: 'Cartographie Applicative',
      description: 'Applications, services et flux de données entre composants',
      icon: Network,
      color: 'purple',
      href: '/section-2'
    },
    {
      id: 'section-3',
      title: 'Cartographie Infrastructure',
      description: 'Infrastructures logiques et physiques du SI',
      icon: Server,
      color: 'indigo',
      href: '/section-3'
    },
    {
      id: 'exercices',
      title: 'Exercices Pratiques',
      description: 'Exercices d\'application basés sur des cas concrets',
      icon: FileText,
      color: 'blue',
      href: '/exercices'
    },
    {
      id: 'quiz',
      title: 'Quiz',
      description: 'Évaluation interactive de vos connaissances',
      icon: Brain,
      color: 'orange',
      href: '/quiz'
    },
    {
      id: 'questions-dscg',
      title: 'Questions DSCG',
      description: 'Questions d\'examens DSCG avec corrections détaillées',
      icon: GraduationCap,
      color: 'red',
      href: '/questions-dscg'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Titre de la section */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez les trois cartographies fondamentales pour maîtriser la modélisation 
          des systèmes d&apos;information
        </p>
      </div>

      {/* Blocs des sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <SectionBlock
            key={section.id}
            title={section.title}
            description={section.description}
            icon={section.icon}
            color={section.color}
            href={section.href}
          />
        ))}
      </div>
    </div>
  );
}