import moment from 'moment';

export const getValueTable = ({ value, type }) => {
  switch(type){
    case "date":
      return moment(value).format("DD/MM/YYYY");
    case "number":
      return `R$ ${value.toLocaleString('pt-BR')}`;
    default:
      return value;
  }
}

export const getSaldoReducer = (accumulator, currentValue) => {
  return currentValue.operation_type === 'DEPOSIT' ? (accumulator + currentValue.operation_value): (accumulator - currentValue.operation_value)
}