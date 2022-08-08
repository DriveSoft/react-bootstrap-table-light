## Summary

Simple bootstrap table in react. 

* Sortable columns 
* Every cell can consists some number of links or buttons (it's possible to use fontawesome icons)
* You can choose date format



## Installation

```
npm install react-bootstrap-table-light
```


## Example

https://codesandbox.io/s/distracted-marco-7ucve5



## Usage

```js
import { BootstrapTable } from "./components/react-bootstrap-table-light";
import { ColumnsStructureTable } from "./components/react-bootstrap-table-light/interfaces";

function App() {
  const columns: ColumnsStructureTable[] = [
    {
      field: "#", // auto-number rows in a column
      headerName: ""
    },
    {
      field: "datetime",
      headerName: "Date",
      width: "40%",
      sortable: true,
      dateTimeOption: "onlyDate" // 'onlyDate' | 'onlyTime' | 'dateTime'
    },
    {
      field: "typeData",
      headerName: "Type",
      width: "35%"
    },
    {
      field: "buttons",
      headerName: "Actions",
      width: "25%"
    }
  ];

  const data = [
    {
      id: 1,
      datetime: "2021-01-01T12:00:00Z",
      typeData: "Inspection",
      buttons: [
        { text: "Edit", idButton: "edit" }, // you can specify any numbers of buttons
        { text: "Delete", idButton: "delete" }
      ]
    },
    {
      id: 2,
      datetime: "2021-01-02T13:00:00Z",
      typeData: "Action",
      buttons: [{ text: "Edit", idButton: "edit" }]
    },
    {
      id: 3,
      datetime: "2021-01-03T13:00:00Z",
      typeData: "Inspection",
      buttons: [
        { iconFA: "fas fa-edit", iconFASize: "15pt", idButton: "edit" }, // you should add cdn font-awesome to use icons.
        { iconFA: "fa fa-camera", iconFASize: "15pt", idButton: "photo" }
      ]
    }
  ];

  const OnClickButtons = (rowData: any, idButton: string) => {
    console.log(rowData, idButton);
  };

  return (
    <BootstrapTable
      data={data}
      columns={columns}
      sortField={"datetime"}
      sortAsc={false}
      OnClickButtons={OnClickButtons}
      //size={"sm"}
      //variant="dark"
    />
  );
}

export default App;
```
