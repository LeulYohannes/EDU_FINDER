import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Course } from '../types';

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      className="card card-hover overflow-hidden transition-all"
    >
      <div className="aspect-video overflow-hidden rounded-[14px] bg-elevated">
        <img
          src={course.image}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-3 text-sm text-secondary">
          <span>{course.provider}</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-primary mb-3">{course.title}</h3>
        <p className="text-secondary text-sm leading-relaxed mb-5">{course.description}</p>

        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary w-full text-center"
        >
          View Course
        </a>
      </div>
    </motion.div>
  );
};

export default CourseCard;
