function getMinMax(str) {
const splitStr = str.split(' ');
const result = {};

const numberArr = splitStr.filter(item => parseFloat(item));
result.min = Math.min(...numberArr);
result.max = Math.max(...numberArr);
return result;
}
