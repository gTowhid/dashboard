import { Box, useTheme, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from '../../components/Header';
import { tokens } from '../../theme';

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            quaerat accusantium! Exercitationem, perferendis itaque? Neque
            porro, modi architecto obcaecati exercitationem quo deleniti aliquid
            voluptate aliquam expedita, tempora, nobis ratione velit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ mt: '10px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            quaerat accusantium! Exercitationem, perferendis itaque? Neque
            porro, modi architecto obcaecati exercitationem quo deleniti aliquid
            voluptate aliquam expedita, tempora, nobis ratione velit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ mt: '10px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            One More Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            quaerat accusantium! Exercitationem, perferendis itaque? Neque
            porro, modi architecto obcaecati exercitationem quo deleniti aliquid
            voluptate aliquam expedita, tempora, nobis ratione velit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ mt: '10px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Here is Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            quaerat accusantium! Exercitationem, perferendis itaque? Neque
            porro, modi architecto obcaecati exercitationem quo deleniti aliquid
            voluptate aliquam expedita, tempora, nobis ratione velit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ mt: '10px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Last Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            quaerat accusantium! Exercitationem, perferendis itaque? Neque
            porro, modi architecto obcaecati exercitationem quo deleniti aliquid
            voluptate aliquam expedita, tempora, nobis ratione velit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
