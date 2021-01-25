import app from './app';

const main = () => {
  try {
    app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
  } catch (error) {
    console.log(error);
  }
};

main();
