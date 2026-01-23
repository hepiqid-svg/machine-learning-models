const fs = require('fs');
const xml2js = require('xml2js');

class Parser {
  constructor(file) {
    this.file = file;
  }

  async parse() {
    try {
      const data = await fs.promises.readFile(this.file, 'utf8');
      const parser = new xml2js.Parser();
      const result = await parser.parseStringPromise(data);
      return result;
    } catch (error) {
      throw new Error(`Error parsing file: ${error.message}`);
    }
  }
}

module.exports = Parser;