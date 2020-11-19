import React from 'react';
import Avatar from "../../Avatar/Avatar";

import classes from "./PostData.module.css";
import Auxiliary from '../../../hoc/Auxiliary';

const postData = (props) => {

    return(
        <Auxiliary>
            <div className={classes.Avatar}>
                    <Avatar />
            </div>
                <h2>{props.data.post}</h2>
        </Auxiliary>
    )
}

export default postData;