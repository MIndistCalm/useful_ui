import { useState, useEffect, useRef } from 'react';
import { Section } from '../../models';

export function useSectionScroll(sections: Section[]) {
  const [currentSection, setCurrentSection] = useState<Section>(sections[0]);
  const isScrolling = useRef(false);

  const scrollToSection = (id: Section) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(id);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (isScrolling.current) return;

    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex === -1) return;

    isScrolling.current = true;

    if (event.deltaY > 0 && currentIndex < sections.length - 1) {
      // Прокрутка вниз
      scrollToSection(sections[currentIndex + 1]);
    } else if (event.deltaY < 0 && currentIndex > 0) {
      // Прокрутка вверх
      scrollToSection(sections[currentIndex - 1]);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 200); // Задержка между прокрутками
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection]);

  return {
    currentSection,
    scrollToSection,
  };
}
