import React from "react";
import MaterialTable from "material-table";
import "./styles.scss";

export default function Material() {
  return (
    <div className="material">
      <MaterialTable
        columns={[
          { title: "nome1", field: "name" },
          { title: "nome2", field: "surname" },
          { title: "nome3", field: "birthYear", type: "numeric" },
          {
            title: "nome4",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          {
            name: "Mehmet",
            surname: "SSSSSSSS",
            birthYear: 1987,
            birthCity: 63,
          },
          { name: "NIG", surname: "QQWE", birthYear: 1987, birthCity: 63 },
          { name: "ASD", surname: "EWEW", birthYear: 1987, birthCity: 63 },
          { name: "DD", surname: "QQQASD", birthYear: 1987, birthCity: 63 },
          { name: "QWE", surname: "WEEE", birthYear: 1987, birthCity: 63 },
          { name: "WEE", surname: "WW", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        ]}
        title="Demo Title"
        options={{
          selection: true,
          pageSize: 10,
          maxBodyHeight: "50vh",
          search: true,
        }}
      />
    </div>
  );
}
