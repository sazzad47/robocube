import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const BestSellingProducts = () => {
  const upgrades = [
    {
      id: 1,
      title: "Robocube HR Upgrade",
      content: "QR code scanning has been needlessly clumsy on Android, but this is now a thing of the past. There is now a quick toggle to launch a simple QR scanner right from your notification tray. The function is simple, but at least you wont need a separate app for it anymore!",
      time: "7 months ago",
    },
    {
      id: 2,
      title: "Robocube HR Upgrade",
      content:
        "QR code scanning has been needlessly clumsy on Android, but this is now a thing of the past. There is now a quick toggle to launch a simple QR scanner right from your notification tray. The function is simple, but at least you wont need a separate app for it anymore!",
      time: "8 months ago",
    },
    {
      id: 3,
      title: "Robocube HR Upgrade",
      content:
        "QR code scanning has been needlessly clumsy on Android, but this is now a thing of the past. There is now a quick toggle to launch a simple QR scanner right from your notification tray. The function is simple, but at least you wont need a separate app for it anymore!",
      time: "8 months ago",
    },
    {
      id: 4,
      title: "Robocube HR Upgrade",
      content:
        "QR code scanning has been needlessly clumsy on Android, but this is now a thing of the past. There is now a quick toggle to launch a simple QR scanner right from your notification tray. The function is simple, but at least you wont need a separate app for it anymore!",
      time: "9 months ago",
    },
    {
      id: 5,
      title: "Robocube HR Upgrade",
      content: "QR code scanning has been needlessly clumsy on Android, but this is now a thing of the past. There is now a quick toggle to launch a simple QR scanner right from your notification tray. The function is simple, but at least you wont need a separate app for it anymore!",
      time: "9 months ago",
    },
  ];
  return (
    <React.Fragment>
        <Card>
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">What's New</h4>
          </CardHeader>

          <CardBody>
            {upgrades.map((item) => (
              <div
                key={item.id}
                className="mb-3 d-flex flex-column gap-2 border-bottom"
              >
                <div className="w-100 d-flex flex-row align-items-center justify-content-between">
                  <h5>{item.title}</h5>
                  <span className="text-muted">{item.time}</span>
                </div>
                <p>{item.content}</p>
              </div>
            ))}
          </CardBody>
        </Card>
    </React.Fragment>
  );
};

export default BestSellingProducts;
