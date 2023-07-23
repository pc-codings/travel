import { useState } from "react";

function Card({id,image,info,price,name,removeTours}){

    const[readMore,setReadMore] = useState(false);

    const discription = readMore ? info : `${info.substring(0,100)}...`

    function readMoreHandler(){
        setReadMore(!readMore)
    }


    return(
        <div className="card">

            <img src={image} alt="" className="image"/>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="discription">{discription}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? `show less`: `read more`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=> removeTours(id)}>
                Not Interested
            </button>

        </div>
    );
}

export default Card;