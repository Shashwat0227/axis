import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Dropdown = ({
  label,
  id,
  value,
  handleChange,
  name,
  options,
  ...props
}) => {
  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        value={value}
        labelId={id}
        id={id}
        onChange={handleChange}
        name={name}
        {...props}
      >
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
