import { Box } from '@mui/material';
import PieChart from '../../components/PieChart';
import Header from '../../components/Header';

export default function Pie() {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="A Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
