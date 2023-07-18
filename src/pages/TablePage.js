import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

function TablePage() {

  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
    { name: 'Cherry', color: 'bg-red-700', score: 2.5 },
    { name: 'Grape', color: 'bg-purple-500', score: 4.25 },
  ];

  const config = [
    { 
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    { 
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    { 
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    { 
      label: 'Score Squared',
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
    { 
      label: 'Half-Fruit',
      render: (fruit) => fruit.score / 2,
      sortValue: (fruit) => fruit.score / 2,
    },
  ];

  const keyFn = (fruit) => {
    return (
      fruit.name
    );
  };

  return (
    <div>
      <SortableTable config={config} data={data} keyFn={keyFn}/>
    </div>
  );
}

export default TablePage;