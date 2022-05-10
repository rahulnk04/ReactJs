import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <FormControl variant="standard" className={`search-box ${className}`}>
    <TextField
      sx={{ mb: 3 }}
      label={placeholder}
      variant="outlined"
      size="small"
      color="success"
      onChange={onChangeHandler}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </FormControl>
);

export default SearchBox;
