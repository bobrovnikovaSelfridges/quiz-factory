import { Config } from "../store/types";
import background_desktop from "../assets/background_desktop.jpg";
import mobile_desktop from "../assets/background_mobile.jpg";
import background_result from "../assets/background_result.jpg";

const quizValues = {
  1: {
    img: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  },
  2: {
    img: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  },
  3: {
    img: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  },
  4: {
    img: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  },
  5: {
    img: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  },
  6: {
    img: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  },
  7: {
    img: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  },
};

export const initValues: Config = {
  images: {
    background: {
      desktop: background_desktop,
      mobile: mobile_desktop,
      result: background_result,
    },
    image1: "string",
  },
  uiText: {
    title: "Collect you first choice gift selection for someone special",
  },

  initialValues: {},
  quizValues,

  colours: {
    colour1: "#2E2D2B",
  },
};
