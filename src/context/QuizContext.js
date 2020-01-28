import React from "react";

const QuizContext = React.createContext(1);

export const QuizProvider = ({ children }) => {
  const [validatedCount, setValidatedCount] = React.useState(0);

  const addValidatedCount = () => {
    setValidatedCount(validatedCount + 1);
  };

  console.log('validatedCount: ' + validatedCount)
  return (
    <QuizContext.Provider
      value={{
        validatedCount: validatedCount,
        addValidatedCount: addValidatedCount
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};


export default QuizContext;
