import Header from './Header';
import React, {useState, useEffect} from 'react'
import {useNavigate } from "react-router-dom";

function Protected(props) {

let Cmp=props.Cmp

return (

<div>

<Cmp />

</div>

)


}

export default Protected
