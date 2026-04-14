import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES, POPULAR_COURSES } from '../constants';
import CategoryCard from '../components/CategoryCard';
import CourseCard from '../components/CourseCard';

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="section-block">
        <div className="layout-container">
          <div className="max-w-[720px]">
            <h1 className="text-[40px] font-semibold leading-tight mb-6">
              Find the best free courses, fast.
            </h1>
            <p className="text-secondary text-base mb-8">
              Discover thousands of free courses from Coursera, edX, Khan Academy, and FutureLearn in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search topics, providers, or skills"
                className="input-field flex-1"
              />
              <button className="btn-primary">Search</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-secondary mb-2">Featured categories</p>
              <h2 className="text-2xl font-semibold">Explore by category</h2>
            </div>
            <Link to="/categories" className="nav-link font-semibold">
              View all categories
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block bg-main">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-secondary mb-2">Top programs</p>
              <h2 className="text-2xl font-semibold">Popular free courses</h2>
            </div>
            <Link to="/categories" className="nav-link font-semibold">
              Browse categories
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POPULAR_COURSES.slice(0, 4).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="layout-container">
          <div className="card flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-secondary mb-2">Ready to start?</p>
              <h2 className="text-2xl font-semibold">Everything you need to learn, for free.</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/auth" className="btn-primary">
                Get Started
              </Link>
              <Link to="/categories" className="btn-secondary">
                Browse categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
