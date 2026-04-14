import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../constants';
import CategoryCard from '../components/CategoryCard';

const TABS = ['All', 'Tech', 'Business', 'Design', 'Health'];

const CategoriesPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories =
    activeTab === 'All'
      ? CATEGORIES
      : CATEGORIES.filter((category) => category.name === activeTab || category.id === activeTab.toLowerCase());

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="section-block">
      <div className="layout-container">
        <div className="mb-8">
          <Link to="/" className="nav-link text-secondary inline-flex items-center gap-2 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-[40px] font-semibold mb-3">All categories</h1>
          <p className="text-secondary max-w-2xl">
            Explore our complete catalog of free educational resources across every major discipline.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`tab-pill ${activeTab === tab ? 'tab-pill-active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoriesPage;
