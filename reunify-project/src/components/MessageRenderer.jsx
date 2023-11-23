import Message from "./Message";
const MessageRenderer = ({ textMessages, currentUser, setMessages }) => {
  return (
    <>
      {textMessages.map((textMessage, index) => (
        <Message
          key={`textMessage-${index}`}
          message={textMessage}
          currentUser={currentUser}
          allMessages={textMessages}
          setMessages={setMessages}
        ></Message>
      ))}
    </>
  );
};

export default MessageRenderer;
