import React from "react";

const Datatable = () => {
 
  return (
    <div className="container">
      <table className="table table-bordered text-center">
        <tbody>
          <tr>
            <td className="w-25 fw-bold">Dept.</td>
            <td className="w-25">Admin</td>
            <td className="w-25 fw-bold">Name</td>
            <td className="w-25">Amirah</td>
          </tr>
          <tr>
            <td className="w-25 fw-bold">Period</td>
            <td className="w-25">2023-04-01~2023-04-30</td>
            <td className="w-25 fw-bold">Emp. No</td>
            <td className="w-25">#166804835212</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered text-center">
        <tbody>
          <tr>
            <td className="fw-bold" colSpan="2">
              Work
            </td>
            <td className="fw-bold" colSpan="2">
              Late
            </td>
            <td className="fw-bold" colSpan="2">
              Early Leave
            </td>
            <td className="fw-bold" colSpan="2">
              Absent
            </td>
            <td className="fw-bold" colSpan="2">
              Over-time
            </td>
          </tr>
          <tr>
            <td className="fw-bold">#</td>
            <td className="fw-bold">Time</td>
            <td className="fw-bold">#</td>
            <td className="fw-bold">Time</td>
            <td className="fw-bold">#</td>
            <td className="fw-bold">Time</td>
            <td className="fw-bold">#</td>
            <td className="fw-bold">Time</td>
            <td className="fw-bold">#</td>
            <td className="fw-bold">Time</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0 hrs and 0 mins and 0 sec</td>
            <td>0</td>
            <td>0 hrs and 0 mins and 0 sec</td>
            <td>0</td>
            <td>0 hrs and 0 mins and 0 sec</td>
            <td>8</td>
            <td>64 hrs and 0 mins and 0 sec</td>
            <td>0</td>
            <td>0 hrs and 0 mins and 0 sec</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered text-center">
        <tbody>
          <tr>
            <td className="fw-bold" colSpan="4">
              Time Card
            </td>
          </tr>
          <tr>
            <td className="fw-bold" colSpan="2">
              Date
            </td>
            <td>In</td>
            <td>Out</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="text-danger">Sat</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className="text-danger">Sun</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td className="">Mon</td>
            <td colSpan="2" className="fw-bold text-danger">
              Absent
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td className="">Tue</td>
            <td colSpan="2" className="fw-bold text-danger">
              Absent
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td className="">Wed</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td className="">Thu</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td className="">Fri</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td className="text-danger">Sat</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td className="text-danger">Sun</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td className="">Mon</td>
            <td colSpan="2" className="fw-bold text-danger">
              Absent
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td className="">Tue</td>
            <td colSpan="2" className="fw-bold text-danger">
              Absent
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td className="">Wed</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td className="">Thu</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td className="">Fri</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td className="text-danger">Sat</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td className="text-danger">Sun</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td className="">Mon</td>
            <td colSpan="2" className="fw-bold text-danger">
              Absent
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td className="">Tue</td>
            <td colSpan="2" className="fw-bold text-danger">
              Absent
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td className="">Wed</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td className="">Thu</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td className="">Fri</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td className="text-danger">Sat</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td className="text-danger">Sun</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td className="">Mon</td>
            <td colSpan="2" className="fw-bold text-danger">
              Absent
            </td>
          </tr>
          <tr>
            <td>25</td>
            <td className="">Tue</td>
            <td colSpan="2" className="fw-bold text-danger">
              Absent
            </td>
          </tr>
          <tr>
            <td>26</td>
            <td className="">Wed</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>27</td>
            <td className="">Thu</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>28</td>
            <td className="">Fri</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>29</td>
            <td className="text-danger">Sat</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
          <tr>
            <td>30</td>
            <td className="text-danger">Sun</td>
            <td colSpan="2" className="fw-bold text-secondary">
              Rest{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
