import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader } from "reactstrap";

const Summary = () => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title mb-0">Summary</h4>
        </CardHeader>
        <CardBody>
          <GradientDonut />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

const GradientDonut = () => {
  const types = [
    { id: 1, label: "Sick", total: 40 },
    { id: 2, label: "Annual", total: 20 },
    { id: 3, label: "Unpaid", total: 30 },
    { id: 4, label: "Paid", total: 10 },
  ];
  const series = [40, 20, 30, 10];
  const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560"];
  var options = {
    chart: {
      height: 300,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      position: "bottom",
      formatter: function (val, opts) {
        const label = types[opts.seriesIndex].label;
        const total = types[opts.seriesIndex].total;
        return label + " - " + total;
      },
    },
    title: {
      text: "",
      style: {
        fontWeight: 500,
      },
    },
    colors: colors,
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val, opts) {
          const label = types[opts.seriesIndex].label;
          return label + " - " + val + "%";
        },
      },
    },
  };
  return (
    <ReactApexChart
      dir="ltr"
      className="apex-charts"
      series={series}
      options={options}
      type="donut"
      height={267.7}
      debug={true}
      onError={(e) => console.log("ERROR:", e)}
    />
  );
};

export default Summary;
