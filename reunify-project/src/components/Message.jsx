const Message = ({ message, allMessages, currentUser, setMessages }) => {
  const filter = allMessages.filter(
    (arrMessage) => arrMessage.message !== message.message
  );

  return (
    <div className="message mx-10 text-black">
      <button
        className={`deleteBtn btn float-right bg-red-600 text-white ${
          currentUser.role !== "SOCIAL_WORKER" && "hidden"
        }  `}
        onClick={() => setMessages(filter)}
      >
        Delete
      </button>

      <h1 className="userRealName font-semibold text-lg mt-3">
        {message.name}
      </h1>
      {message.message}
    </div>
  );
};

export default Message;
