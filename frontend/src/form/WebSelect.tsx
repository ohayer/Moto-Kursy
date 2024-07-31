type SelectProps = {
  title: string;
  options: string[] | number[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const WebSelect = (props: SelectProps) => (
  <select
    value={props.value !== null ? props.value : ""}
    className="select select-bordered w-full bg-gray-700"
    onChange={props.onChange}
  >
    <option value="" hidden disabled defaultValue={props?.value}>
      {props.title}
    </option>
    {props.options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default WebSelect;
