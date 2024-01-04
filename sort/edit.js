export function editNumber (num) {
  let newnum = 0;
  let val = '';

  if(num > 0) {
    newnum = num;
    val = '';
  }

  if(num >= 1000) {
    newnum = num / 1000;
    val = 'k';
  }

  if(num >= 1000000) {
    newnum = num / 1000000;
    val = 'm';
  }

  return `${val === '' ? newnum : newnum.toFixed(1)}${val}`;
};

function calculateAndEditTime () {

};
