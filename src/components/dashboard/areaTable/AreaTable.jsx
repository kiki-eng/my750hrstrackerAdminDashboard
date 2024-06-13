import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Yearly Subscription",
    order_id: 11232,
    date: "Sep 29,2024",
    customer: "Oscar",
    status: "Active",
    amount: 199,
  },
  {
    id: 101,
    name: "Monthly subscription",
    order_id: 11232,
    date: "Feb 2,2024",
    customer: "Abosede Olawale",
    status: "pending",
    amount: 288,
  },
  {
    id: 102,
    name: "Free Subscriber",
    order_id: 11232,
    date: "Jan 9,2024",
    customer: "James Nwachukwu",
    status: "canceled",
    amount: 500,
  },
  {
    id: 103,
    name: "Yearly Subscription",
    order_id: 11232,
    date: "Jan 29,2024",
    customer: "Rachel Olawale",
    status: "Active",
    amount: 100,
  },
  {
    id: 104,
    name: "Free Subscriber",
    order_id: 11232,
    date: "July 15,2024",
    customer: "Khadijat babatunde",
    status: "Canceled",
    amount: 60,
  },
  {
    id: 105,
    name: "Monthly Subscribers",
    order_id: 11232,
    date: "Aug 21,2024",
    customer: "Olawale Olanrewaju",
    status: "Pending",
    amount: 80,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Order Details</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>${dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
