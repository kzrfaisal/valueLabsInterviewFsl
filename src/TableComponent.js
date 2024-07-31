import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

// TODO: Do the styling as last

const columns = [
  {
    name: 'Name',
    selector: (row) => row.title,
    // grow: 2,
  },
  {
    name: 'Description',
    selector: (row) => row.description,
    // grow: 4,
  },
  {
    name: 'Images',
    // grow: 2,
    cell: (row) => (
      <div>
        {row.images.map((image) => (
          <img
            height="84px"
            width="56px"
            alt={row.title}
            src={image}
            key={row.id + image}
          />
        ))}
      </div>
    ),
  },
];

export function TableComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://dummyjson.com/products');
      console.log('🚀 ~ fetchData ~ response:', response.data);
      setData(response.data.products);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        borderColor: 'red',
        borderWidth: '100px',
        margin: '100px',
        backgroundColor: '#002b36',
      }}
    >
      <DataTable
        columns={columns}
        data={data}
        responsive={true}
        striped={true}
        customStyles={{
          table: {
            style: {
              fontFamily: 'sans-serif',
              margin: '20px',
              borderColor: 'red',
              borderWidth: '20px',
              borderLeft: '100px',
            },
          },
          headCells: {
            style: {
              fontWeight: 'bold',
              fontSize: 'large',
            },
          },
        }}
      />
    </div>
  );
}
