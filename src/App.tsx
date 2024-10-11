import React from 'react';
import { Image } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large';
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Project 1', imageUrl: 'https://source.unsplash.com/random/800x600?sig=1', size: 'large' },
  { id: 2, title: 'Project 2', imageUrl: 'https://source.unsplash.com/random/400x300?sig=2', size: 'small' },
  { id: 3, title: 'Project 3', imageUrl: 'https://source.unsplash.com/random/600x400?sig=3', size: 'medium' },
  { id: 4, title: 'Project 4', imageUrl: 'https://source.unsplash.com/random/800x600?sig=4', size: 'large' },
  { id: 5, title: 'Project 5', imageUrl: 'https://source.unsplash.com/random/400x300?sig=5', size: 'small' },
  { id: 6, title: 'Project 6', imageUrl: 'https://source.unsplash.com/random/600x400?sig=6', size: 'medium' },
  { id: 7, title: 'Project 7', imageUrl: 'https://source.unsplash.com/random/800x600?sig=7', size: 'large' },
  { id: 8, title: 'Project 8', imageUrl: 'https://source.unsplash.com/random/400x300?sig=8', size: 'small' },
  { id: 9, title: 'Project 9', imageUrl: 'https://source.unsplash.com/random/600x400?sig=9', size: 'medium' },
  { id: 10, title: 'Project 10', imageUrl: 'https://source.unsplash.com/random/800x600?sig=10', size: 'large' },
  { id: 11, title: 'Project 11', imageUrl: 'https://source.unsplash.com/random/400x300?sig=11', size: 'small' },
  { id: 12, title: 'Project 12', imageUrl: 'https://source.unsplash.com/random/600x400?sig=12', size: 'medium' },
  { id: 13, title: 'Project 13', imageUrl: 'https://source.unsplash.com/random/800x600?sig=13', size: 'large' },
  { id: 14, title: 'Project 14', imageUrl: 'https://source.unsplash.com/random/400x300?sig=14', size: 'small' },
  { id: 15, title: 'Project 15', imageUrl: 'https://source.unsplash.com/random/600x400?sig=15', size: 'medium' },
  { id: 16, title: 'Project 16', imageUrl: 'https://source.unsplash.com/random/800x600?sig=16', size: 'large' },
  { id: 17, title: 'Project 17', imageUrl: 'https://source.unsplash.com/random/400x300?sig=17', size: 'small' },
  { id: 18, title: 'Project 18', imageUrl: 'https://source.unsplash.com/random/600x400?sig=18', size: 'medium' },
  { id: 19, title: 'Project 19', imageUrl: 'https://source.unsplash.com/random/800x600?sig=19', size: 'large' },
  { id: 20, title: 'Project 20', imageUrl: 'https://source.unsplash.com/random/400x300?sig=20', size: 'small' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {portfolioItems.map((item) => (
                <a
                  key={item.id}
                  href={`#project-${item.id}`}
                  className={`block bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ${
                    item.size === 'large'
                      ? 'col-span-2 row-span-2'
                      : item.size === 'medium'
                      ? 'col-span-2'
                      : ''
                  }`}
                >
                  <div className="relative pb-2/3">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="absolute h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                    <div className="mt-2 flex items-center text-gray-600">
                      <Image className="w-5 h-5 mr-2" />
                      <span>View Project</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;