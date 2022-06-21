import { EventAttributes } from "ics";
import { configurations } from "../../dev/config";
import html2pdf from "html2pdf.js";
import Dropdown from "react-bootstrap/Dropdown";
import { Btn } from "../btn/btn";
import s from "./result-controls.module.css";

export const ResultControls = () => {
  return (
    <div className={s.root}>
      <Btn
        text={configurations.uiText.titles.savePdfBtn}
        onClick={() => {
          getPdf();
        }}
      />

      <Btn
        text={configurations.uiText.titles.saveReminderBtn}
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
        }}
      />

      <a
        download={configurations.uiText.titles.calendarEvent + ".ics"}
        href={saveReminder([configurations.reminders])}
        className={"saveToCalendar"}
      >
        {configurations.uiText.titles.saveReminderBtn}
      </a>
    </div>
  );
};

const saveReminder = (event: EventAttributes[]): string => {
  const ics = require("ics");
  const { error, value } = ics.createEvents(event);
  const collectedEvents = new Blob([value], { type: "text/calendar" });
  return URL.createObjectURL(collectedEvents);
};

const getPdf = () => {
  const element: HTMLAnchorElement | null =
    document.querySelector("[data-of-js-pdf]");
  const opt = {
    margin: 0,
    filename: "myGifts.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      allowTaint: true,
      scale: 2,
      useCORS: true,
    },
    jsPDF: {
      unit: "in",
      format: "a4",
    },
  };

  html2pdf(element, opt);
};

// const renderDropdownOfEvents = () => {
//   const events = Object.entries(configurations.reminders);
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>
//       (value: [string, Event | undefined], index: number, array: [string, Event | undefined][]) => Element
//       <Dropdown.Menu>
//         {events.map((value: [string, Event | undefined]) => {
//           return <Dropdown.Item>{event[0]}</Dropdown.Item>;
//         })}
//         {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// };
