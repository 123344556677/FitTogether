import React from "react";

const CircularProgress = ({ percentages, colors,height,width }) => {
  const totalPercentage = percentages.reduce((acc, curr) => acc + curr, 0);
  const radius = 80;
  const strokeWidth = 30;
  let prevPercentage = 0;

  return (
    <svg width={height} height={width} viewBox="0 0 200 200">
      {percentages.map((percentage, index) => {
        const color = colors[index % colors.length]; // Cycle through colors
        const progress = (prevPercentage + percentage) / totalPercentage;

        const largeArcFlag = percentage / totalPercentage > 0.5 ? 1 : 0;

        // Calculate the end points of the arc
        const x1 =
          100 +
          radius *
            Math.cos(
              (prevPercentage / totalPercentage) * 2 * Math.PI - Math.PI / 2
            );
        const y1 =
          100 +
          radius *
            Math.sin(
              (prevPercentage / totalPercentage) * 2 * Math.PI - Math.PI / 2
            );
        const x2 =
          100 + radius * Math.cos(progress * 2 * Math.PI - Math.PI / 2);
        const y2 =
          100 + radius * Math.sin(progress * 2 * Math.PI - Math.PI / 2);

        prevPercentage += percentage;

        return (
          <path
            key={index}
            d={`M ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        );
      })}
    </svg>
  );
};

export default CircularProgress;
