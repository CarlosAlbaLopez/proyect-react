import React, { useState, useEffect } from "react";

export const ChatRoomHeader = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      setDate(newDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="ChatRoomHeader">{date.toLocaleString()}</div>;
};

// export class ChatRoomHeader extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       const newDate = new Date();
//       this.setState({ date: newDate });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div className="ChatRoomHeader">{this.state.date.toLocaleString()}</div>
//     );
//   }
// }
