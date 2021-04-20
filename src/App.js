import React, { useEffect, useRef, useState } from 'react';
import sendIcon from './send.svg';

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messages">
      {messages.map(message => (
        <div key={message} className={`msg`}>
          <div>
            {message.comment}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

function App() {
  const [comval, setComment] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, comment: 'Hi', date: "04/04/2020" },
    { id: 2, comment: 'Hi how are ', date: "04/04/2020" },
    { id: 3, comment: 'Hi hjh dfgdf dfgdfg dfgdf df', date: "04/04/2020" },
    { id: 4, comment: 'Hi', date: "04/04/2020" },
    { id: 5, comment: 'Hi', date: "04/04/2020" },
    { id: 6, comment: 'Hi dgdfg dgdfg', date: "04/04/2020" },
    { id: 7, comment: 'Hi dgfd dgdf dfgdf ', date: "04/04/2020" },
    { id: 8, comment: 'Hi dgfd dgdf dfgdf ', date: "04/04/2020" },
    { id: 9, comment: 'Hi dgfd dgdf dfgdf ', date: "04/04/2020" },
    { id: 10, comment: 'Hi dgfd dgdf dfgdf ', date: "04/04/2020" },
    { id: 11, comment: 'Hi dgfd dgdf dfgdf ', date: "04/04/2020" },
  ]);

  const enterPressHandler = (e) => {
    if (e.key === 'Enter') {
      let tmp = [...messages, { id: messages.length + 1, comment: comval, date: '09/12/1991' }];
      setMessages(tmp);
      setComment('');
    }
  }

  return (
    <div className="App">
      <div className="chat">
        <div className="head">ChatBot</div>
        <Messages messages={messages} />
        <div className="footer">
          <input type="text" placeholder="Type here..."
            value={comval}
            onChange={(evt) => setComment(evt.target.value)}
            onKeyDown={(e) => enterPressHandler(e)}
          />
          <img src={sendIcon} alt="no_image" />
        </div>
      </div>
    </div>
  );
}

export default App;
