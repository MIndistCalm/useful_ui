import {
  Button,
  Description,
  Fieldset,
  Label,
  Field,
  Legend,
  Input,
  Select,
  Textarea,
} from '@headlessui/react';
import './App.css';
import { ColoredScreenWrapper } from './ui/ColoredScreenWrapper';
import { HModal } from './ui/HModal';
import { VirtualList } from './ui/VirtualList';
import { Navigation } from './ui/Navigation';
import { useState, useEffect, useRef } from 'react';
import { clearClassName } from './utils';
import { Section } from './models';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<Section>(
    Section.virtualList
  );
  const sections = [Section.virtualList, Section.modal];
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

  // Генерируем тестовые данные
  const items = Array.from({ length: 10000 }, (_, index) => ({
    id: index,
    text: `Item ${index}`,
    height: 50, // фиксированная высота для примера
  }));

  // Функция рендера элемента
  const renderItem = (item: (typeof items)[0], index: number) => (
    <div
      style={{
        padding: '10px',
        borderBottom: '1px solid #eee',
        backgroundColor: index % 2 ? '#f9f9f9' : 'white',
        color: index % 2 ? 'black' : '#333',
      }}
    >
      {item.text}
    </div>
  );

  return (
    <div className="h-full w-full overflow-y-auto">
      <Navigation
        sections={sections}
        currentSection={currentSection}
        onSectionChange={scrollToSection}
      />

      <ColoredScreenWrapper title="Virtual List" id={Section.virtualList}>
        <div className="h-fit flex flex-col gap-3">
          <h1>Virtual List Demo</h1>
          <VirtualList
            items={items}
            itemHeight={50}
            containerHeight={400}
            renderItem={renderItem}
            overscan={5}
          />
        </div>
      </ColoredScreenWrapper>
      <ColoredScreenWrapper title="Modal" id={Section.modal}>
        <Button
          className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-lg font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
          onClick={() => setIsOpen(true)}
        >
          Открыть модальное окно
        </Button>
        <HModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Fieldset className="space-y-6 rounded-xl bg-gray-800 text-white p-6 sm:p-10">
            <Legend className="text-base/7 font-semibold ">
              Shipping details
            </Legend>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Street address
              </Label>
              <Input
                className={clearClassName([
                  'mt-3 block w-full rounded-lg border-none bg-gray-700 px-3 py-1.5 text-sm/6 text-white',
                  'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                ])}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Country
              </Label>
              <Description className="text-sm/6 text-white/50">
                We currently only ship to North America.
              </Description>
              <div className="relative">
                <Select
                  className={clearClassName([
                    'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                    'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                    '*:text-white',
                  ])}
                >
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>United States</option>
                </Select>
              </div>
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Delivery notes
              </Label>
              <Description className="text-sm/6 text-white/50">
                If you have a tiger, we'd like to know about it.
              </Description>
              <Textarea
                className={clearClassName([
                  'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                  'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                ])}
                rows={3}
              />
            </Field>
            <Field className="flex justify-end gap-2">
              <Button className="">Submit</Button>
            </Field>
          </Fieldset>
        </HModal>
      </ColoredScreenWrapper>
    </div>
  );
}

export default App;
