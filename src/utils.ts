import { join } from 'path';
import * as csv from 'csvtojson/v2'

export const csvToJson = (path: string) => {
  const file = join(__dirname, '../csv/' + path + '.csv')
  return csv().fromFile(file)
}

export const titleCase = (str: string) => {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}