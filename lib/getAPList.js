const { parse } = require('fast-xml-parser');

module.exports = function getAPList(client) {
  return client
    .get('/ap_list.xml')
    .then(({ text }) => parse(text))
    .then((data) => data['amp:amp_ap_list'].ap);
};
