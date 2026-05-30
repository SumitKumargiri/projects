import { useParams, Link } from 'react-router';
import { ChevronLeft, Code, Database, Layout, Palette, Shield, Smartphone, Server, Brain } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CourseCard } from '../components/CourseCard';

const categoryData: Record<string, {
  name: string;
  icon: any;
  color: string;
  description: string;
  courses: Array<{
    id: string;
    title: string;
    description: string;
    duration: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    rating: number;
    students: string;
    icon: string;
    color: string;
    progress?: number;
  }>;
}> = {
  'web-development': {
    name: 'Web Development',
    icon: Layout,
    color: 'bg-blue-500',
    description: 'Master modern web development with HTML, CSS, JavaScript, and popular frameworks',
    courses: [
      {
        id: 'javascript-fundamentals',
        title: 'JavaScript Fundamentals',
        description: 'Learn the basics of JavaScript including variables, functions, loops, and more through interactive coding exercises.',
        duration: '20 hours',
        difficulty: 'Beginner',
        rating: 4.8,
        students: '2.5M',
        icon: '{ }',
        color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
        progress: 35
      },
      {
        id: 'react-beginners',
        title: 'React for Beginners',
        description: 'Build modern web applications with React. Master components, hooks, state management, and more.',
        duration: '25 hours',
        difficulty: 'Intermediate',
        rating: 4.9,
        students: '1.8M',
        icon: '⚛️',
        color: 'bg-gradient-to-br from-cyan-400 to-blue-500',
        progress: 60
      },
      {
        id: 'html-css-complete',
        title: 'Complete HTML & CSS',
        description: 'Build beautiful responsive websites from scratch with HTML5 and CSS3.',
        duration: '18 hours',
        difficulty: 'Beginner',
        rating: 4.7,
        students: '3.5M',
        icon: '🎨',
        color: 'bg-gradient-to-br from-orange-400 to-red-500'
      }
    ]
  },
  'programming': {
    name: 'Programming',
    icon: Code,
    color: 'bg-purple-500',
    description: 'Learn programming fundamentals and popular languages from scratch',
    courses: [
      {
        id: 'python-programming',
        title: 'Python Programming',
        description: 'Master Python from scratch. Learn syntax, data structures, OOP, and build real-world applications.',
        duration: '35 hours',
        difficulty: 'Beginner',
        rating: 4.9,
        students: '3.2M',
        icon: '🐍',
        color: 'bg-gradient-to-br from-blue-500 to-yellow-400',
        progress: 15
      },
      {
        id: 'advanced-typescript',
        title: 'Advanced TypeScript',
        description: 'Deep dive into TypeScript with advanced types, generics, decorators, and building type-safe applications.',
        duration: '30 hours',
        difficulty: 'Advanced',
        rating: 4.7,
        students: '850K',
        icon: 'TS',
        color: 'bg-gradient-to-br from-blue-600 to-blue-800'
      },
      {
        id: 'java-masterclass',
        title: 'Java Masterclass',
        description: 'Complete Java programming from basics to advanced OOP concepts.',
        duration: '40 hours',
        difficulty: 'Beginner',
        rating: 4.6,
        students: '2.1M',
        icon: '☕',
        color: 'bg-gradient-to-br from-red-500 to-orange-600'
      }
    ]
  },
  'data-science': {
    name: 'Data Science',
    icon: Database,
    color: 'bg-green-500',
    description: 'Dive into data analysis, machine learning, and data visualization',
    courses: [
      {
        id: 'sql-database',
        title: 'SQL Database Design',
        description: 'Learn database design, queries, joins, and optimization. Work with MySQL, PostgreSQL, and more.',
        duration: '22 hours',
        difficulty: 'Intermediate',
        rating: 4.6,
        students: '1.5M',
        icon: '🗄️',
        color: 'bg-gradient-to-br from-purple-500 to-pink-500'
      },
      {
        id: 'data-analysis-python',
        title: 'Data Analysis with Python',
        description: 'Master data analysis using pandas, NumPy, and matplotlib.',
        duration: '28 hours',
        difficulty: 'Intermediate',
        rating: 4.8,
        students: '1.2M',
        icon: '📊',
        color: 'bg-gradient-to-br from-green-400 to-blue-500'
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning A-Z',
        description: 'Complete ML course covering supervised and unsupervised learning.',
        duration: '45 hours',
        difficulty: 'Advanced',
        rating: 4.9,
        students: '980K',
        icon: '🤖',
        color: 'bg-gradient-to-br from-purple-600 to-indigo-600'
      }
    ]
  },
  'design': {
    name: 'Design',
    icon: Palette,
    color: 'bg-pink-500',
    description: 'Create stunning user interfaces and beautiful user experiences',
    courses: [
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design Fundamentals',
        description: 'Learn user interface and user experience design principles.',
        duration: '20 hours',
        difficulty: 'Beginner',
        rating: 4.7,
        students: '1.8M',
        icon: '🎨',
        color: 'bg-gradient-to-br from-pink-400 to-purple-500'
      },
      {
        id: 'figma-complete',
        title: 'Complete Figma Course',
        description: 'Master Figma for web and mobile design projects.',
        duration: '15 hours',
        difficulty: 'Beginner',
        rating: 4.8,
        students: '2.2M',
        icon: '🎯',
        color: 'bg-gradient-to-br from-purple-500 to-pink-600'
      }
    ]
  },
  'mobile-dev': {
    name: 'Mobile Development',
    icon: Smartphone,
    color: 'bg-orange-500',
    description: 'Build native and cross-platform mobile applications',
    courses: [
      {
        id: 'react-native',
        title: 'React Native Development',
        description: 'Build iOS and Android apps with React Native.',
        duration: '30 hours',
        difficulty: 'Intermediate',
        rating: 4.7,
        students: '1.1M',
        icon: '📱',
        color: 'bg-gradient-to-br from-blue-400 to-cyan-500'
      },
      {
        id: 'flutter-complete',
        title: 'Flutter Complete Guide',
        description: 'Master Flutter and Dart for mobile app development.',
        duration: '35 hours',
        difficulty: 'Intermediate',
        rating: 4.8,
        students: '950K',
        icon: '🦋',
        color: 'bg-gradient-to-br from-blue-500 to-blue-700'
      }
    ]
  },
  'cybersecurity': {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'bg-red-500',
    description: 'Learn ethical hacking, network security, and cybersecurity fundamentals',
    courses: [
      {
        id: 'ethical-hacking',
        title: 'Ethical Hacking Complete',
        description: 'Learn penetration testing and ethical hacking techniques.',
        duration: '40 hours',
        difficulty: 'Advanced',
        rating: 4.6,
        students: '750K',
        icon: '🔒',
        color: 'bg-gradient-to-br from-red-500 to-orange-600'
      },
      {
        id: 'network-security',
        title: 'Network Security Basics',
        description: 'Understand network protocols and security measures.',
        duration: '25 hours',
        difficulty: 'Intermediate',
        rating: 4.5,
        students: '680K',
        icon: '🛡️',
        color: 'bg-gradient-to-br from-gray-700 to-red-600'
      }
    ]
  },
  'backend': {
    name: 'Backend Development',
    icon: Server,
    color: 'bg-indigo-500',
    description: 'Master server-side programming and API development',
    courses: [
      {
        id: 'nodejs-express',
        title: 'Node.js & Express',
        description: 'Create powerful backend APIs with Node.js and Express. Learn REST APIs, middleware, and database integration.',
        duration: '28 hours',
        difficulty: 'Intermediate',
        rating: 4.8,
        students: '1.2M',
        icon: '⚙️',
        color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      },
      {
        id: 'django-python',
        title: 'Django Web Framework',
        description: 'Build powerful web applications with Python Django.',
        duration: '32 hours',
        difficulty: 'Intermediate',
        rating: 4.7,
        students: '890K',
        icon: '🐍',
        color: 'bg-gradient-to-br from-green-600 to-teal-600'
      }
    ]
  },
  'ai-ml': {
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'bg-teal-500',
    description: 'Explore artificial intelligence and machine learning technologies',
    courses: [
      {
        id: 'deep-learning',
        title: 'Deep Learning Specialization',
        description: 'Master neural networks and deep learning with TensorFlow.',
        duration: '50 hours',
        difficulty: 'Advanced',
        rating: 4.9,
        students: '650K',
        icon: '🧠',
        color: 'bg-gradient-to-br from-purple-600 to-pink-600'
      },
      {
        id: 'nlp-fundamentals',
        title: 'Natural Language Processing',
        description: 'Build NLP applications with Python and transformers.',
        duration: '35 hours',
        difficulty: 'Advanced',
        rating: 4.7,
        students: '520K',
        icon: '💬',
        color: 'bg-gradient-to-br from-indigo-500 to-purple-600'
      }
    ]
  }
};

export function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? categoryData[categorySlug] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl mb-4">Category not found</h1>
          <Link to="/" className="text-[#3A10E5] hover:underline">
            Go back to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-[#3A10E5] transition-colors w-fit">
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <div className={`${category.color} w-20 h-20 rounded-2xl flex items-center justify-center`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl mb-3">{category.name}</h1>
              <p className="text-xl opacity-90">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">Available Courses</h2>
          <p className="text-gray-600">{category.courses.length} courses</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
