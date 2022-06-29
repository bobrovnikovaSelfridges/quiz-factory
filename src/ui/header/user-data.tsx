import { configurations } from "../../dev/config";
import { Form } from "react-bootstrap";
import { Description } from "../description/description";
import s from "./user-data.module.css";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  fields: {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setSurname: React.Dispatch<React.SetStateAction<string>>;
  };
};
export const UserData = (props: Props) => {
  const description = configurations.uiText.descriptions.header;
  return (
    <div className={s.root}>
      <h1>Selfridges {configurations.uiText.titles.holidayName}</h1>
      <Description description={description} classname={s.description} />

      <Form>
        {renderField(
          "Email address",
          "email",
          "Enter email",
          "formBasicEmail",
          props.fields.setEmail,
          "We will never share your email with anyone else."
        )}

        {renderField(
          "Your name",
          "text",
          "Name",
          "name",
          props.fields.setName,
          ""
        )}
        {renderField(
          "Your surname",
          "text",
          "Surname",
          "surname",
          props.fields.setSurname,
          "We will never share your email with anyone else."
        )}
      </Form>
    </div>
  );
};

const renderField = (
  fieldName: string,
  fieldType: string,
  placeholder: string,
  id: string,
  onChange: Dispatch<SetStateAction<string>>,
  comment?: string
): React.ReactElement => {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{fieldName}</Form.Label>
      <Form.Control
        onChange={(event: ChangeEvent<any>) => {
          onChange(event.target.value);
          // add debounce or throttle
        }}
        type={fieldType}
        placeholder={placeholder}
      />
      <Form.Text className="text-muted">{comment}</Form.Text>
    </Form.Group>
  );
};
