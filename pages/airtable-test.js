import {
  tableSchedule,
  getSchedule,
  miniRecord,
  createRecord,
  updateRecord,
  getIds,
  updateThisRecord,
  deleteRecord,
} from '../lib/model';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

const getRecords = async () => {
  const records = await getSchedule();
  return records;
};

getRecords();

export default function Event() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    getRecords().then((data) => setRecords(data));
  }, []);
  console.log('useState Records: ', records);

  return (
    <>
      <h1>Hello</h1>
      {records.map((record) => (
        <p key={record.id}>
          Activity: {record.fields.Activity}, Status: {record.fields.Status}
        </p>
      ))}
    </>
  );
}
