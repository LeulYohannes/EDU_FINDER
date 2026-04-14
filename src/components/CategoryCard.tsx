import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '../types';

const CategoryCard = ({ category }: { category: Category }) => {
  const Icon = category.icon;

  return (
    <Link to={`/category/${category.id}`}>
      <motion.div
        whileHover={{ y: -2 }}
        className="card card-hover cursor-pointer h-full transition-all"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-elevated flex items-center justify-center">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-0">{category.name}</h3>
        </div>
        <p className="text-secondary text-sm leading-relaxed">{category.description}</p>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
