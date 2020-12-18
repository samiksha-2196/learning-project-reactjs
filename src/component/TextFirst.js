//@flow
import React from 'react';
import GET_DATA from '../graphql/query';
import {useQuery} from '@apollo/react-hooks';
function TextFirst(){
    const { loading, data, error}=useQuery(GET_DATA,{variables:{id:"f"}});
    if(loading) {return (<div>Loading</div>);}
    if(error){console.log(error);return (<div>Something went wrong</div>);}
else{
return(
<div>
<div className="Lorems">{data.getData}</div> 
</div>
);
}}
export default TextFirst;