import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SurveyAnswers {
  category: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced' | '';
  reason: 'Employment' | 'Supplement' | 'General' | '';
  weeklyHours: number;
  goal: string;
  experience: 'None' | 'Minor' | 'Familiar' | 'Expert' | '';
}

const STORAGE_KEY = 'edufinder_questionnaire';

const defaultAnswers: SurveyAnswers = {
  category: '',
  skillLevel: '',
  reason: '',
  weeklyHours: 5,
  goal: '',
  experience: '',
};

const QuestionnairePage = () => {
  const [answers, setAnswers] = useState<SurveyAnswers>(defaultAnswers);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setAnswers(JSON.parse(raw));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    setSaved(true);
  };

  const reset = () => {
    setAnswers(defaultAnswers);
    localStorage.removeItem(STORAGE_KEY);
    setSaved(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="section-block">
      <div className="layout-container max-w-4xl mx-auto">
        <div className="mb-10">
          <Link to="/" className="nav-link text-secondary inline-flex items-center gap-2">
            ← Back to Home
          </Link>
          <h1 className="text-[40px] font-semibold mt-4 mb-3">Learning questionnaire</h1>
          <p className="text-secondary text-base max-w-2xl">
            Answer a few quick questions and we’ll personalize your course recommendations right away.
          </p>
        </div>

        <form onSubmit={onSubmit} className="card space-y-6">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Top area of interest</label>
            <select
              id="category"
              value={answers.category}
              onChange={(e) => setAnswers((prev) => ({ ...prev, category: e.target.value }))}
              className="input-field"
              required
            >
              <option value="">Select a category</option>
              <option value="tech">Tech</option>
              <option value="business">Business</option>
              <option value="science">Science</option>
              <option value="design">Design</option>
              <option value="languages">Languages</option>
              <option value="marketing">Marketing</option>
              <option value="health">Health</option>
              <option value="math">Math</option>
              <option value="arts">Arts</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Current skill level</label>
            <select
              id="skillLevel"
              value={answers.skillLevel}
              onChange={(e) => setAnswers((prev) => ({ ...prev, skillLevel: e.target.value as SurveyAnswers['skillLevel'] }))}
              className="input-field"
              required
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Hours per week</label>
            <input
              id="weeklyHours"
              type="number"
              value={answers.weeklyHours}
              onChange={(e) => setAnswers((prev) => ({ ...prev, weeklyHours: Number(e.target.value) }))}
              min={1}
              max={40}
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Reason for learning</label>
            <select
              id="reason"
              value={answers.reason}
              onChange={(e) => setAnswers((prev) => ({ ...prev, reason: e.target.value as SurveyAnswers['reason'] }))}
              className="input-field"
              required
            >
              <option value="">Select reason</option>
              <option value="Employment">Employment</option>
              <option value="Supplement">Supplement another course</option>
              <option value="General">General interest</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Experience level</label>
            <select
              id="experience"
              value={answers.experience}
              onChange={(e) => setAnswers((prev) => ({ ...prev, experience: e.target.value as SurveyAnswers['experience'] }))}
              className="input-field"
              required
            >
              <option value="">Select experience</option>
              <option value="None">None</option>
              <option value="Minor">Minor</option>
              <option value="Familiar">Familiar</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Learning goal</label>
            <textarea
              id="goal"
              value={answers.goal}
              onChange={(e) => setAnswers((prev) => ({ ...prev, goal: e.target.value }))}
              rows={4}
              className="input-field"
              placeholder="e.g. build a portfolio project, land a job, improve data analytics"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" className="btn-primary">
              Save Answers
            </button>
            <button type="button" onClick={reset} className="btn-secondary">
              Reset
            </button>
          </div>

          {saved && <p className="text-secondary">Saved! Your preferences are now stored and ready for recommendations.</p>}
        </form>
      </div>
    </motion.div>
  );
};

export default QuestionnairePage;
