export const navItems = [
    { label: "Home", icon: "fa fa-fw fa-home", link: "/" },
    {
      label: "Attendance",
      icon: "fa fa-fw fa-clock",
      subItems: [
        { label: "Daily", link: "/attendance/daily" },
        { label: "Manually", link: "/attendance/manually" },
      ],
    },
    {
      label: "Calendar",
      icon: "fa fa-fw fa-calendar",
      link: "/calendar",
    },
    {
      label: "Content",
      icon: "fa fa-fw fa-bullhorn",
      subItems: [
        {
          label: "Announcement",
          link: "/content/list/announcement",
        },
        {
          label: "Slideshow",
          link: "/content/list/slideshow",
        },
      ],
    },
    {
      label: "Leaves",
      icon: "fa fa-fw fa-door-open",
      subItems: [
        {
          label: "Requests",
          link: "/leaves/request",
        },
        {
          label: "Approvals",
          link: "/leaves/approval",
        },
      ],
    },
    {
      label: "Claims",
      icon: "fa fa-fw fa-money-check-alt",
      link: "/claims",
    },
    {
      label: "Advance Salary",
      icon: "fa fa-fw fa-comments-dollar",
      link: "/advance/list",
    },
    {
      label: "Employees",
      icon: "fa fa-fw fa-users",
      subItems: [
        {
          label: "All Employees",
          link: "/employees/list",
        },
        {
          label: "Resignation",
          link: "/employees/list/resignation",
        },
        {
          label: "Asli",
          link: "/employees/asli",
        },
        {
          label: "Driver",
          link: "/employees/driver",
        },
      ],
    },
    {
      label: "Trip",
      icon: "fa fa-fw fa-plane",
      link: "/trip/list",
    },
    {
      label: "Payroll",
      icon: "fa fa-fw fa-file-invoice",
      link: "/payroll_hock/list",
    },
    {
      label: "Timetable",
      icon: "fa fa-fw fa-calendar",
      subItems: [
        {
          label: "General",
          link: "/timetable/list",
        },
        {
          label: "Driver",
          link: "/timetable_hock_driver/list",
        },
      ],
    },
    {
      label: "Reports",
      icon: "fa fa-fw fa-chart-pie",
      link: "/reports",
    },
    {
      label: "Secondary",
      icon: "fa fa-fw fa-tags",
      subItems: [
        {
          label: "Banks",
          link: "/secondary/list/bank",
        },
        {
          label: "Races",
          link: "/secondary/list/race",
        },
        {
          label: "Locations",
          link: "/secondary/list/location",
        },
        {
          label: "Positions",
          link: "/secondary/list/position",
        },
        {
          label: "Religions",
          link: "/secondary/list/religion",
        },
        {
          label: "Additions",
          link: "/secondary/list/addition",
        },
        {
          label: "Deductions",
          link: "/secondary/list/deduction",
        },
        {
          label: "Work Mode",
          link: "/secondary/list/work_mode",
        },
        {
          label: "Leave Types",
          link: "/secondary/list/leave_type",
        },
        {
          label: "Claim Types",
          link: "/secondary/list/claim_type",
        },
        {
          label: "Nationalities",
          link: "/secondary/list/nationality",
        },
        {
          label: "Departments",
          link: "/secondary/list/department",
        },
        {
          label: "Relationships",
          link: "/secondary/list/relationship",
        },
        {
          label: "Marital Status",
          link: "/secondary/list/marital_status",
        },
        {
          label: "Payment Methods",
          link: "/secondary/list/payment_method",
        },
        {
          label: "High Education Levels",
          link: "/secondary/list/highest_education_level",
        },
      ],
    },
    {
      label: "Settings",
      icon: "fa fa-fw fa-cogs",
      subItems: [
        {
          label: "General",
          link: "/settings/general",
        },
        {
          label: "Admins",
          link: "/admins/list",
        },
        {
          label: "Devices",
          link: "/devices/list",
        },
        {
          label: "Payslip",
          link: "/settings/payslip",
        },
        {
          label: "Migrate",
          link: "/migrate/list",
        },
        {
          label: "PointoAPI",
          link: "/settings/pointoapi",
        },
      ],
    },
  ];

