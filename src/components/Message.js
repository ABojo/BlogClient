function Message(props) {
  const { text, success } = props;
  const color = success ? 'green' : 'red';

  return (
    <div className={`p-5 w-full bg-${color}-100 rounded mb-10`}>
      <h1 className={`text-${color}-900`}>{text}</h1>
    </div>
  );
}

export default Message;
