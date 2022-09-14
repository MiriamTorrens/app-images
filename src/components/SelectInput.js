import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function SelectInput(props) {
  const { order, setOrder } = props;
  return (
    <FormControl
      fullWidth
      sx={{
        width: { xs: "50%", sm: "10%" },
        backgroundColor: "white",
        margin: { xs: "10px auto", sm: "auto" },
      }}
    >
      <InputLabel style={{ marginTop: -6 }}>Order</InputLabel>
      <Select
        value={order}
        label="Order"
        onChange={(e) => setOrder(e.target.value)}
        sx={{
          height: 40,
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="width">Width</MenuItem>
        <MenuItem value="height">Height</MenuItem>
        <MenuItem value="likes">Likes</MenuItem>
      </Select>
    </FormControl>
  );
}
