import { createContext, useContext, useState } from "react";

interface ICarouselContext {
  currentItem: number;
}

const Context = createContext<ICarouselContext>({ currentItem: 0 });

interface ITesteProps extends React.ComponentProps<"div"> {}

const Teste = ({ children }: ITesteProps) => {
  const [currentItem, setCurrenItem] = useState(0);

  return (
    <Context.Provider value={{ currentItem }}>
      <h1>Current Item: {currentItem}</h1>
      <button onClick={() => setCurrenItem((prev) => prev + 1)}>Next</button>
      <button onClick={() => setCurrenItem((prev) => prev - 1)}>
        Previous
      </button>
      {children}
    </Context.Provider>
  );
};

const TesteComponent = () => {
  const { currentItem } = useContext(Context);

  return <h1>Current Item: {currentItem}</h1>;
};

const Teste2 = {
  Root: Teste,
  Item: TesteComponent,
};

export default Teste2;
