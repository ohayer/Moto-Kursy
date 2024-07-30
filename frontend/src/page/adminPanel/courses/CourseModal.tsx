import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import WebInput, { typeOfInput } from "../../../form/WebInput";
import Card from "../../../components/Card";
type Input = {
  name: string;
  placeholder: string;
  type: typeOfInput;
  required?: boolean;
  options?: string[] | number[];
};

const inputs: Input[] = [
  { name: "title", placeholder: "Title", type: "text" },
  { name: "description", placeholder: "Description", type: "textarea" },
  { name: "price", placeholder: "Price", type: "number" },
  { name: "img_url", placeholder: "Img Url", type: "textarea" },
  { name: "position", placeholder: "Position", type: "select" },
  { name: "valid", placeholder: "Valid", type: "checkbox" },
];

type CourseModalProps = {
  validLength: number;
  selectedCourse: any;
  onClose: () => void;
};

const initialFormValues = {
  title: "",
  description: "",
  price: 0,
  img_url: "",
  position: null,
  valid: false,
};

const CourseModal = ({
  validLength,
  selectedCourse,
  onClose,
}: CourseModalProps) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    if (selectedCourse) {
      setFormValues(selectedCourse);
    } else {
      setFormValues(initialFormValues);
    }
  }, [selectedCourse]);

  const handleClose = () => {
    setFormValues(initialFormValues); // Reset form values to initial state
    onClose(); // Close the modal
  };

  const handleChange = (name: string, value: string | number | boolean) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  //   function that showing number of available positions
  const optionsForAvailablePositions = Array.from(
    { length: validLength + 1 },
    (_, i) => i + 1
  );
  // assignment of options to the position input
  inputs[4].options = optionsForAvailablePositions;

  return (
    <Modal onClose={handleClose}>
      <div className="flex flex-row space-x-8">
        <div className="pt-7">
          <form>
            {inputs.map((input, index) => (
              <div key={index} className="py-2">
                <WebInput
                  {...input}
                  onChange={(value) => handleChange(input.name, value)}
                  propValue={formValues[input.name as keyof typeof formValues]}
                />
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
        <div>
          <h4 className="text-3xl text-primary">Preview:</h4>
          <Card {...formValues} id={0} createdAt={new Date()} />
        </div>
      </div>
    </Modal>
  );
};

export default CourseModal;
