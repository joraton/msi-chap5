import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
}

const colorVariants = {
  blue: {
    bg: 'bg-blue-50 hover:bg-blue-100',
    border: 'border-blue-200',
    iconBg: 'bg-blue-500',
    button: 'bg-blue-600 hover:bg-blue-700'
  },
  green: {
    bg: 'bg-green-50 hover:bg-green-100',
    border: 'border-green-200',
    iconBg: 'bg-green-500',
    button: 'bg-green-600 hover:bg-green-700'
  },
  purple: {
    bg: 'bg-purple-50 hover:bg-purple-100',
    border: 'border-purple-200',
    iconBg: 'bg-purple-500',
    button: 'bg-purple-600 hover:bg-purple-700'
  },
  indigo: {
    bg: 'bg-indigo-50 hover:bg-indigo-100',
    border: 'border-indigo-200',
    iconBg: 'bg-indigo-500',
    button: 'bg-indigo-600 hover:bg-indigo-700'
  },
  orange: {
    bg: 'bg-orange-50 hover:bg-orange-100',
    border: 'border-orange-200',
    iconBg: 'bg-orange-500',
    button: 'bg-orange-600 hover:bg-orange-700'
  },
  red: {
    bg: 'bg-red-50 hover:bg-red-100',
    border: 'border-red-200',
    iconBg: 'bg-red-500',
    button: 'bg-red-600 hover:bg-red-700'
  }
};

export default function SectionBlock({ title, description, icon: Icon, color, href }: SectionBlockProps) {
  const colors = colorVariants[color as keyof typeof colorVariants] || colorVariants.blue;

  return (
    <div className="transition-all duration-200 hover:scale-[1.01] sm:hover:scale-[1.02] active:scale-[0.98]">
      <Link href={href}>
        <div className={`
          ${colors.bg} ${colors.border}
          border-2 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl 
          transition-all duration-300 cursor-pointer
          flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between
        `}>
          {/* Contenu principal */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 w-full">
            {/* Icône */}
            <div className={`${colors.iconBg} p-2.5 sm:p-3 rounded-full flex-shrink-0`}>
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            
            {/* Texte */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-tight">{title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
          
          {/* Bouton Commencer */}
          <button
            className={`
              ${colors.button}
              text-white px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-lg font-medium
              flex items-center justify-center gap-2 transition-all duration-200
              shadow-md hover:shadow-lg hover:translate-x-1
              w-full sm:w-auto text-sm sm:text-base
              mt-2 sm:mt-0 flex-shrink-0
            `}
          >
            Commencer
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Link>
    </div>
  );
}