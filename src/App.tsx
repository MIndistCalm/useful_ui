import "./App.css";
import { VirtualList } from "./ui/VirtualList";
import { arrayFilter, arrayMap, arrayReduce } from "./utils/array";
function App() {
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
        padding: "10px",
        borderBottom: "1px solid #eee",
        backgroundColor: index % 2 ? "#f9f9f9" : "white",
        color: index % 2 ? "black" : "#333",
      }}
    >
      {item.text}
    </div>
  );
  console.log(
    arrayMap([1, 2, 3, 4], (item: number, index: number) => item + index)
  );
  console.log(
    arrayReduce([1, 2, 3, 4], (acc: number, item: number) => (acc += item), 0)
  );
  console.log(arrayFilter([1, 2, 3, 4], (item: number) => item % 2 === 0));
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h1>Virtual List Demo</h1>
      <VirtualList
        items={items}
        itemHeight={50}
        containerHeight={400}
        renderItem={renderItem}
        overscan={5}
      />
    </div>
  );
}

export default App;
