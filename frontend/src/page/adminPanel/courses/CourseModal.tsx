import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import WebInput, { typeOfInput } from "../../../form/WebInput";
import Card from "../../../components/Card";
import PostNewCourse from "./api/PostNewCourse";
import PutCourse from "./api/PutCourse";
import { closeModal } from "../../../components/Modal";

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
  onSubmitForm: () => void;
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
  onSubmitForm,
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
      [name]: value !== undefined ? value : "",
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCourse) {
      const data = await PutCourse(selectedCourse.id, formValues);
      console.log(data);
      if (data) {
        onSubmitForm();
        closeModal();
      } else {
        const data = await PostNewCourse(formValues);
        if (data) {
          onSubmitForm();
          closeModal();
        }
      }
    }
  };

  const optionsForAvailablePositions = Array.from(
    { length: validLength + 1 },
    (_, i) => i + 1
  );

  inputs[4].options = optionsForAvailablePositions;

  return (
    <Modal onClose={handleClose}>
      <div className="flex flex-row space-x-8">
        <div className="pt-7">
          <form onSubmit={handleFormSubmit}>
            {inputs.map((input, index) => (
              <div key={index} className="py-2">
                <WebInput
                  {...input}
                  onChange={handleChange}
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
