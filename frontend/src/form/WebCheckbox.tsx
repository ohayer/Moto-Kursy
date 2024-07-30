type WebCheckboxProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

const WebCheckbox = (props: WebCheckboxProps) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="checkbox checkbox-primary"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span className="ml-2 text-black">{props.label}</span>
    </div>
  );
};

export default WebCheckbox;
