import { base } from './init-airtable';

const tableSchedule = base('📆 Schedule');

const getSchedule = async () => {
  return await tableSchedule
    .select({ maxRecords: 3, view: 'Full schedule' })
    .firstPage();
};

// getSchedule();

const miniRecord = async (record) => {
  return await { fields: record.fields };
};

const createRecord = async (fields) => {
  const createRecord = await tableSchedule.create(fields);
  // console.log(createRecord);
};

// createRecord({ Activity: "adriana and barbara" });

const updateRecord = async (id, fields) => {
  const updateRecord = await tableSchedule.update(id, fields);
  // console.log(updateRecord);
};

updateRecord([
  // { id: "recKzjKbr8d6EBz7w", fields: { Location: "Zoom" } },
  { id: 'recYLlhYbknzlGwBQ', fields: { Location: 'Zoom' } },
]);

const getIds = async (filter) => {
  const records = await tableSchedule
    .select({
      filterByFormula: filter,
    })
    .firstPage();
  return records.map((record) => record.id);
};

const updateThisRecord = async (filter, update) => {
  const ids = await getIds(filter);
  const updates = ids.map((record) => {
    return { id: record, fields: update };
  });
  // console.log(updates);
  updateRecord(updates);
};

updateThisRecord(`Activity="adriana and barbara"`, { Status: 'Past' });

const deleteRecord = async (id) => {
  const deleted = await tableSchedule.destroy(id);
};

deleteRecord('recKzjKbr8d6EBz7w');

export {
  tableSchedule,
  getSchedule,
  createRecord,
  updateRecord,
  getIds,
  updateThisRecord,
  deleteRecord,
  miniRecord,
};
