import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X, Clock, Tag, FileText, ExternalLink } from 'lucide-react';
import { writings } from '../data/writings';
import type { Writing } from '../types';

const WritingCard = ({ writing }: { writing: Writing }) => (
  <motion.a
    href={writing.documentUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-slate-800/50 p-6 rounded-lg cursor-pointer hover:bg-slate-700/50 transition group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className="flex justify-between items-start mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold group-hover:text-emerald-400 transition">{writing.title}</h3>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-emerald-400" />
        </div>
        <span className="text-emerald-400 text-sm">{writing.category}</span>
      </div>
      <FileText className="w-6 h-6 text-slate-400" />
    </div>
    <p className="text-slate-400 mb-4">{writing.description}</p>
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-4 text-sm text-slate-500">
        <span>{writing.date}</span>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {writing.readTime}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {writing.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const Writings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'research', 'blog'];

  const filteredWritings = writings.filter(writing => {
    const matchesSearch = writing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      writing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      writing.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || writing.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Writings</h2>
      
      {/* Preview List */}
      <div className="max-w-4xl mx-auto grid gap-6">
        {writings.slice(0, 3).map((writing) => (
          <WritingCard key={writing.id} writing={writing} />
        ))}
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="mx-auto mt-4 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-full transition"
        >
          View All Writings
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">All Writings</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-800 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search writings..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="p-6">
              <div className="grid gap-6">
                {filteredWritings.map((writing) => (
                  <WritingCard key={writing.id} writing={writing} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Writings; 