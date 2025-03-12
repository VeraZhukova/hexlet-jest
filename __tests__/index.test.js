import reverse from '../src/index.js';
import path from 'path';
import fs from 'fs';
import url from 'url';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

test('reverse', () => {
 
  const filePath = path.join(__dirname, '..', '__fixtures__', 'data.txt');
  const text = fs.readFileSync(filePath, 'utf-8');

 
  const expected = text.split('').reverse().join('');

  expect(reverse(text)).toEqual(expected);
});

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

