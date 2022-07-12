import dateFormat, { masks } from "dateformat";

export function subStringDate(date){
    let newDateString = date.substring(0,10);

    return newDateString
}

export function formatDateString(dateString){
    if(dateString.length==0){
        return;
    }

   let substringDate=  subStringDate(dateString);
   const date = new Date(substringDate);
   let result = dateFormat(date," mmmm dS, yyyy")
   return result;

}