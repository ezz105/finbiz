import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, TooltipItem } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
  labels: ['12AM', '01AM', '02AM', '03AM', '04AM', '05AM', '06AM', '07AM', '08AM', '09AM', '10AM', '11AM'],
  datasets: [
    {
      label: 'UV Index',
      data: [3000, 2000, 2800, 4900, 3700, 4600, 3200, 4300, 3400, 3000, 4400, 2900],
      borderColor: '#49C2A9',
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: '#FFFFFF',
      pointHoverBorderColor: '#49C2A9',
      pointHoverBorderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#444',
      bodyColor: '#FFF',
      titleColor: '#FFF',
      callbacks: {
        label: (tooltipItem: TooltipItem<'line'>) => `UV: ${tooltipItem.raw}`,
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#2F4F4F', font: { size: 10 } },
      grid: { display: false },
    },
    y: {
      ticks: { color: '#2F4F4F', font: { size: 10 } },
      grid: { color: '#242526', borderDash: [3, 3] },
    },
  },
};

const ReactChart = () => (
  <div style={{ width: '100%', height: '400px' }}>
    <Line data={data} options={options} />
  </div>
);

export default ReactChart;
