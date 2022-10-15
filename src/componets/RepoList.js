import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const RepoList = ({ repoUserName }) => {
  const [arrayItems, setArrayItems] = useState([]);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  const fetchRepo = async (repoUserName) => {
    await fetch(`https://api.github.com/users/${repoUserName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const arrayData = data.map((arraySingleItem) => {
          return (
            <MenuItem
              key={arraySingleItem.id}
              value={arraySingleItem.full_name}
              style={getStyles(arraySingleItem.full_name, personName, theme)}
            >
              {arraySingleItem.full_name}
            </MenuItem>
          );
        });
        setArrayItems(arrayData);
      });
  };

  useEffect(() => {
    fetchRepo(repoUserName);
  }, [repoUserName]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Github</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {arrayItems}
          {/* {names.map((name) => (
          
            ))} */}
        </Select>
      </FormControl>
    </div>
  );
};

export default RepoList;
