import {gql } from '@apollo/client';
 const SUBMIT_DATA=gql`
 mutation SendMessage($mail:String!, $message: String){
     sendMessage(mail:$mail,message:$message)
 }`;
 export default SUBMIT_DATA;