import { Link } from "react-router-dom";
const Chat = () => {
    let ChatList = new Array(10).fill("Bisi", 1);
    return (
        <div>
            <nav  
            style={{
                borderRight: "solid 1px",
                padding: "1rem",
            }}>
                {chatList.map((singleChat, index) => (
                    <Link
                      style={{display: "block", margin: "1rem 0" }}
                      to={'/chatList/${index}'}
                      key={singleChat}>
                        {singleChat}
                      </Link>
                ))}
            </nav>
        </div>
        // <div className="border border-success h-100 list-group">
        //     {ChatList.map((singleChat) => {
        //         return <p className="text-white">{singleChat}</p>;
        //     })}
        // </div>
        // <div>
        //     {ChatList.map((singleChat) => {
        //         return <p className="text-white">{singleChat}</p>;
        //     })}
        // </div>
    ); 
};

export default Chat;