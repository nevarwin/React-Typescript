import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { FormControl, FormLabel, FormGroup } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState } from "react";

const MuiCheckbox = () => {
  const [terms, setTerms] = useState(false);
  console.log(terms);
  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerms(event.target.checked);
  };

  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);
  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    console.log(index);
    if (index === -1) {
      setSkills([...skills, event.target.value]); // adding from the skills array
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value)); // removing from the skills array
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and condition"
          control={<Checkbox checked={terms} onChange={handleTermsChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and condition"
          control={
            <Checkbox
              checked={terms}
              onChange={handleTermsChange}
              checkedIcon={<BookmarkIcon></BookmarkIcon>}
              icon={<BookmarkBorderIcon></BookmarkBorderIcon>}
            />
          }
        ></FormControlLabel>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="html"
              value={"html"}
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="css"
              value={"css"}
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="js"
              value={"js"}
              control={
                <Checkbox
                  checked={skills.includes("js")}
                  onChange={handleSkillsChange}
                />
              }
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
