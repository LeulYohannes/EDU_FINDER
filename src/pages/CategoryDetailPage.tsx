import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES, POPULAR_COURSES } from '../constants';
import CourseCard from '../components/CourseCard';

const CategoryDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const category = useMemo(() => CATEGORIES.find((c) => c.id === id), [id]);
  const courses = useMemo(() => POPULAR_COURSES.filter((course) => course.categoryId === id), [id]);

  if (!category) {
    return (
      <div className="section-block">
        <div className="layout-container text-center">
          <h1 className="text-3xl font-semibold mb-4">Category not found</h1>
          <Link to="/categories" className="nav-link">
            View all categories
          </Link>
        </div>
      </div>
    );
  }

  const infoCards = [
    {
      label: 'Tuition',
      value: 'Free',
      detail: 'Verified free learning paths for every learner.',
    },
    {
      label: 'Country',
      value: 'Global',
      detail: 'Available from anywhere with internet access.',
    },
    {
      label: 'Requirements',
      value: 'None',
      detail: 'Beginner-friendly material with clear guidance.',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="section-block">
      <div className="layout-container">
        <div className="mb-8">
          <p className="breadcrumb mb-4">Home / Categories / {category.name}</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-[40px] font-semibold mb-3">{category.name}</h1>
              <p className="text-secondary max-w-2xl">{category.description}</p>
            </div>
            <Link to="/categories" className="btn-secondary">
              Back to categories
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {infoCards.map((info) => (
            <div key={info.label} className="card">
              <p className="text-secondary uppercase text-xs tracking-[0.2em] mb-3">{info.label}</p>
              <h3 className="text-xl font-semibold text-primary mb-2">{info.value}</h3>
              <p className="text-secondary text-sm leading-relaxed">{info.detail}</p>
            </div>
          ))}
        </div>

        {courses.length > 0 ? (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-secondary mb-2">Popular courses</p>
                <h2 className="text-2xl font-semibold">Best matches in {category.name}</h2>
              </div>
              <a
                href={courses[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply to top course
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        ) : (
          <div className="card text-center">
            <p className="text-secondary">More courses coming soon for {category.name}.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CategoryDetailPage;
