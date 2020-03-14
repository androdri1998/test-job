import moment from 'moment';

export const getValueTable = ({ value, type }) => {
  switch(type){
    case "date":
      return moment(value).format("DD/MM/YYYY");
    default:
      return value;
  }
}