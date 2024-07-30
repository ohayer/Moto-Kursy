import { useState } from "react";
import Modal from "../../../components/Modal";
import WebInput, { typeOfInput } from "../../../form/WebInput";
import Card from "../../../components/Card";

const inputs: {
  name: string;
  placeholder: string;
  type: typeOfInput;
  required?: boolean;
  options?: string[] | number[];
}[] = [
  { name: "title", placeholder: "Title", type: "text" },
  { name: "description", placeholder: "Description", type: "textarea" },
  { name: "price", placeholder: "Price", type: "number" },
  { name: "img_url", placeholder: "Img Url", type: "text" },
  { name: "position", placeholder: "Posiotion", type: "select" },
  { name: "valid", placeholder: "Valid", type: "checkbox" },
];

type CourseModalProps = {
  validLength: number;
};
const CourseModal = ({ validLength }: CourseModalProps) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    price: 0,
    img_url: "",
    position: null,
    valid: false,
  });

  const handleChange = (column: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [column]: value,
    }));
  };

  console.log(formValues);

  const optionsForAvaiilablePositions = Array.from(
    { length: validLength + 1 },
    (_, i) => i + 1
  );

  inputs[4].options = optionsForAvaiilablePositions;

  return (
    <Modal>
      <div className="flex flex-row space-x-8">
        <div className="pt-7">
          <form>
            {inputs.map((input, index) => (
              <div key={index} className="py-2">
                <WebInput {...input} onChange={handleChange} required={true} />
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
        <div>
          <h4 className="text-3xl">Preview:</h4>
          <Card {...formValues} id={0} createdAt={new Date()} />
        </div>
      </div>
    </Modal>
  );
};

export default CourseModal;
