//@flow
import React from 'react';
import GET_DATA from '../graphql/query';
import {useQuery} from '@apollo/react-hooks';
function TextSecond(){
    const { loading, data, error}=useQuery(GET_DATA,{variables:{id:"s"}});
    if(loading) {return (<div>Loading</div>);}
    if(error){return (<div>Something went wrong</div>);}
return(
<div>
<div className="BigLorem">{data.getData}</div> 
</div>
);
}
export default TextSecond;