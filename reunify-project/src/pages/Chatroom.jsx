import MessageRenderer from "../components/MessageRenderer";
import { useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import { fosteree, socialWorker, birthParent } from "../components/users";

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(fosteree);
  // const [outgoingMessages, setOutgoingMessages] = useState([ // part of the work in progress
  //   {
  //     owner: "Lemn Sissay",
  //     messages: [],
  //   },
  //   { owner: "Yemarshet Sissay", messages: [] },
  // ]);

  const addToMessages = (message) => {
    const newMessages = JSON.parse(JSON.stringify(messages));
    newMessages.push({
      name: currentUser.name,
      message: message,
    });
    setMessages(newMessages);
    setCurrentMessage("");
  };

  // ======Work in progress===========
  // const addToOutgoingMessages = (message, owner) => {
  //   const allMessageHolders = cloneDeep(outgoingMessages);
  //   console.log(allMessageHolders, "bruh");

  //   const [otherMessageHolder] = allMessageHolders.filter(
  //     (messageHolder) => messageHolder.owner !== owner
  //   );
  //   const [filteredMessageHolder] = allMessageHolders.filter(
  //     (messageHolder) => messageHolder.owner === owner
  //   );

  //   const { messages } = filteredMessageHolder;

  //   messages.push(message);

  //   setOutgoingMessages([filteredMessageHolder, otherMessageHolder]);
  // };

  // debug stuff

  // useEffect(() => {
  //   console.log(messages);
  // }, [messages]);

  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  // useEffect(() => {
  //   console.log(outgoingMessages, "DEFAULT");
  // }, [outgoingMessages]);
  return (
    <div className="chatroom h-[calc(100vh-2rem)]">
      <div className="permButtons bg-slate-500 flex items-center justify-center gap-10">
        <button
          className={`submitButton btn rounded-none text-white ${
            currentUser.role === "FOSTER_CHILD" && "bg-green-400"
          }`}
          onClick={() => setCurrentUser(fosteree)}
        >
          Foster Child
        </button>
        <button
          className={`submitButton btn rounded-none text-white ${
            currentUser.role === "SOCIAL_WORKER" && "bg-green-400"
          }`}
          onClick={() => setCurrentUser(socialWorker)}
        >
          Social Worker
        </button>
        <button
          className={`submitButton btn rounded-none text-white ${
            currentUser.role === "BIRTH_PARENT" && "bg-green-400"
          }`}
          onClick={() => setCurrentUser(birthParent)}
        >
          BirthParent
        </button>
      </div>

      <div className="chatroom bg-reunify-white h-[calc(82vh-2rem)] flex justify-center ">
        <div className="messageHolder w-3/4 bg-slate-300 scroll-auto h-[calc(90vh-2rem)]">
          <MessageRenderer
            textMessages={messages}
            currentUser={currentUser}
            setMessages={setMessages}
          />
        </div>
      </div>

      <div className="message bg-slate-500 flex flex-col items-center justify-center h-20 relative mt-200">
        <div className="textbox w-4/5 flex justify-center">
          <input
            className="message-input input rounded-none w-3/4 bg-white border-solid border-l-black-950 text-black"
            placeholder="Enter a message"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          ></input>
          <button
            className="submitButton btn rounded-none"
            onClick={() => addToMessages(currentMessage)}
            // onClick={() =>
            //   addToOutgoingMessages(currentMessage, currentUser.name) // for the future??
            // }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
