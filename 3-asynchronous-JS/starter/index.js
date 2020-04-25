const fs = require('fs');
const superagent = require('superagent');

// calback hell
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);
//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         console.log('Random dog image saved to file...');
//       });
//     });
// });

// Promisses

const readFilePromisse = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file...');
      resolve(data);
    });
  });
};

const writeFilePromisse = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write the file...');
      resolve('success');
    });
  });
};

// readFilePromisse(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`);

//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`); // return a promisse
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePromisse('dog-img.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('Random dog image saved to file...');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/*
// Async/await
const getDocPic = async () => {
  // return a promisse
  try {
    const data = await readFilePromisse(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    ); // return a promisse      
    console.log(res.body.message);

    await writeFilePromisse('dog-img.txt', res.body.message);
    console.log('Random dog image saved to file...');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2. Ready...';
};

(async () => {
  try {
    console.log('1. Will get doc pics...');
    const x = await getDocPic();
    console.log(x);
    console.log('3. Done getting doc pics...');
  } catch (err) {
    console.log('Error...');
  }
})();
*/

// Multiple promisses
const getDocPic = async () => {
  // return a promisse
  try {
    const data = await readFilePromisse(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    ); // return a promisse
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const images = all.map((el) => el.body.message);
    console.log(images);

    await writeFilePromisse('dog-img.txt', images.join('\n'));
    console.log('Random dog image saved to file...');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2. Ready...';
};

(async () => {
  try {
    console.log('1. Will get doc pics...');
    const x = await getDocPic();
    console.log(x);
    console.log('3. Done getting doc pics...');
  } catch (err) {
    console.log('Error...');
  }
})();
