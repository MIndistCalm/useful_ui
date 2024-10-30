import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface VirtualListProps<T> {
  items: T[]; // массив данных
  itemHeight: number; // высота каждого элемента
  containerHeight: number; // высота контейнера
  renderItem: (item: T, index: number) => ReactNode; // рендер элемента
  overscan?: number; // Дополнительные элементы сверху и снизу
}

// Примерная структура компонента
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const VirtualList = <T extends unknown>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 3,
}: VirtualListProps<T>) => {
  // ref
  const containerRef = useRef<HTMLDivElement>(null);

  // States
  const [scrollTop, setScrollTop] = useState(0);
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  // Вычисляемые значения
  const totalHeight = items.length * itemHeight;
  const visibleCount = Math.ceil(containerHeight / itemHeight);

  // Обработчик скролла контейнера
  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const currentScrollTop = event.currentTarget.scrollTop;
    setScrollTop(currentScrollTop);
  }, []);

  // Обновлем видимые элементы при скролле
  useEffect(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const startWithOverscan = Math.max(0, start - overscan);
    const endWithOverscan = Math.min(
      items.length,
      start + visibleCount + overscan
    );

    setStartIndex(startWithOverscan);
    setVisibleItems(items.slice(startWithOverscan, endWithOverscan));
  }, [scrollTop, items, itemHeight, visibleCount, overscan]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: containerHeight,
        overflow: "auto",
        position: "relative",
      }}
    >
      <div
        style={{
          height: totalHeight,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: startIndex * itemHeight,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems.map((item, index) => (
            <div key={startIndex + index} style={{ height: itemHeight }}>
              {renderItem(item, startIndex + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
