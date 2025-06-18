import { Section } from '../../models';
import { clearClassName } from '../../utils';

interface NavigationProps {
  sections: Section[];
  currentSection: Section;
  className?: string;
  onSectionChange: (section: Section) => void;
}

export const Navigation = ({
  sections,
  currentSection,
  className,
  onSectionChange,
}: NavigationProps) => {
  return (
    <nav
      className={clearClassName([
        'fixed top-0 right-0 bg-gray-800 p-4 min-w-[200px] z-10',
        className,
      ])}
    >
      <ul className="flex flex-col gap-4">
        {sections.map((section) => (
          <li key={section} className="relative">
            <button
              onClick={() => onSectionChange(section)}
              className={clearClassName([
                'flex flex-row justify-between w-full',
                'text-white hover:text-gray-300 transition-colors relative pl-6',
                currentSection === section ? 'text-blue-400 font-bold' : '',
              ])}
            >
              {currentSection === section && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              )}
              <span className="w-full text-end">
                {section
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
