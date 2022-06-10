import { createContext, useContext } from "react";
import { FieldHelperProps, FieldInputProps, FieldMetaProps } from "formik";

type Context = {
  field: FieldInputProps<string[]>;
  helpers: FieldHelperProps<string[]>;
  meta: FieldMetaProps<string[]>;
};

const QuizContext = createContext<Context | null>(null);

export const QuizContextProvider = QuizContext.Provider;

export function useQiuzContext() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("Must be used in scope of a CheckboxProvider");
  }

  return context;
}
