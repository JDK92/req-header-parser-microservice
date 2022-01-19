const getIndex = (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
};

const getHeaders = (req, res) => {
  const {
    ['x-forwarded-for']: ipaddress,
    ['accept-language']: language,
    ['user-agent']: software
  } = req.headers;

  res.json({ ipaddress, language, software });
};


module.exports = {
  getIndex,
  getHeaders
};