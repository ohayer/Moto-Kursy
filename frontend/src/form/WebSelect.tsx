type SelectProps = {
  title: string;
  options: string[] | number[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const WebSelect = (props: SelectProps) => (
  <select
    value={props.value}
    className="select select-bordered w-full max-w-xs"
    onChange={props.onChange}
  >
    <option value="" hidden disabled selected>
      {props.title}
    </option>
    {props.options.map((option, index) => (
      <option key={index}>{option}</option>
    ))}
  </select>
);

export default WebSelect;
