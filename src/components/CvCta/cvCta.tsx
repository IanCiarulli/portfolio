import { ArrowDown } from 'lucide-react';
import './cvCta.css';

export const CvCta = () => {
  return (
    <a
      href="/files/test.pdf"
      download="IanCiarulli_CV.pdf"
      className="arrow-container group bg-cta text-cta-text hover:bg-cta-hover inline-flex items-center gap-2 overflow-hidden rounded-md px-5 py-2 font-semibold shadow transition-all"
    >
      Download CV
      <span className="relative h-5 w-5 overflow-hidden">
        <ArrowDown className="arrow-icon absolute left-0 h-5 w-5" />
        <ArrowDown className="arrow-icon second absolute left-0 h-5 w-5" />
      </span>
    </a>
  );
};
