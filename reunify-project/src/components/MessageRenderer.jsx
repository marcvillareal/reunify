import Message from "./Message";
const MessageRenderer = ({ textMessages, currentUser, setMessages }) => {
  return (
    <div>
      {textMessages.map((textMessage, index) => (
        <Message
          key={`textMessage-${index}`}
          message={textMessage}
          currentUser={currentUser}
          allMessages={textMessages}
          setMessages={setMessages}
        ></Message>
      ))}
    </div>
  );
};

export default MessageRenderer;
