import InboxItem from './InboxItem';

export default function Inbox({ arr }) {
  return (
    <div>
      {arr.length === 0 || !arr ? (
        <p>Nothing in Inbox</p>
      ) : (
        arr.map((record) => <InboxItem record={record} key={record.id} />)
      )}
    </div>
  );
}
