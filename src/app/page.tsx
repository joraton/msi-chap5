import CourseHeader from '@/components/home/CourseHeader';
import CoursePlan from '@/components/home/CoursePlan';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 overflow-x-auto">
            <span className="whitespace-nowrap">Accueil</span>
            <span>&gt;</span>
            <span className="whitespace-nowrap">Cours</span>
            <span>&gt;</span>
            <span className="text-blue-600 font-medium whitespace-nowrap">Modélisation du SI</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <CourseHeader />
        <CoursePlan />
      </div>
    </div>
  );
}
