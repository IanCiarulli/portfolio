import './cvCta.css';

export const CvCta = () => {
  return (
    <a
      href="/files/test.pdf"
      download="IanCiarulli_CV.pdf"
      className="arrow-container group bg-cta text-cta-text hover:bg-cta-hover inline-flex items-center gap-2 overflow-hidden rounded-md px-4 py-2.5 text-sm font-semibold shadow transition-all sm:text-base"
    >
      Download Resume
    </a>
  );
};
