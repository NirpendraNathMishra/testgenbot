import React from "react";
const Searchbox = ({searchfield,searchchange}) => {
        return (
            <div>
            <input
                type="search"
                placeholder="search robots"
                style={{ color: "black", backgroundColor: "skyblue" ,margin:"20px",padding:"20px", border:"2px solid black",borderRadius:"20px"}}
                onChange={searchchange}
            />
        </div>
        );
}

export default Searchbox;