import Modal from "../../../components/Modal";
import WebInput from "../../../form/WebInput";

const inputs = [
  {
    name: "Title",
    type: "text",
  },
];
const CourseModal = () => {
  return (
    <Modal>
      <form>
        {inputs.map((input) => (
          <WebInput {...input} placeholder={input.name} onChange={} />
        ))}
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default CourseModal;
