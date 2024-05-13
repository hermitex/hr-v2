import { styled } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import React from 'react';

interface CircleProgressWidgetProps {
  data: { value: number; color: string }[];
  innerRadius: number;
  centerLabel: React.ReactNode;
  size: { width: number; height: number };
}

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 10,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const CircleProgressWidget: React.FC<CircleProgressWidgetProps> = ({ data, innerRadius, centerLabel, size }) => {
  return (
    <PieChart series={[{ data, innerRadius }]} {...size}>
      <PieCenterLabel>{centerLabel}</PieCenterLabel>
    </PieChart>
  );
};

interface CompletionProgressProps {
  buttonBackgroundColor: string;
  circleProgressWidgetProps: CircleProgressWidgetProps;
}

const CompletetionProgress: React.FC<CompletionProgressProps> = ({ circleProgressWidgetProps }) => {
  return <CircleProgressWidget {...circleProgressWidgetProps} />;
};

export default CompletetionProgress;
