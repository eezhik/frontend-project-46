import fs from 'fs';
import * as path from 'path'

export default (filepath1, filepath2) => [parser(filepath1), parser[filepath2]];

const parser = (filepath) => JSON.parse(fs.readFileSync(path.resolve(filepath), 'utf8'));