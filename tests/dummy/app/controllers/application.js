import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

const sourceCode = `/**
 * Paste or drop some JavaScript here and explore
 * the syntax tree created by chosen parser.
 * You can use all the cool new features from ES6
 * and even more. Enjoy!
 */

let tips = [
  "Click on any AST node with a '+' to expand it",

  "Hovering over a node highlights the \
   corresponding part in the source code",

  "Shift click on an AST node expands the whole substree"
];

function printTips() {
  tips.forEach((tip, i) => console.log('Tip ' + i + ':' + tip));
}`;

const CODEMOD = `// Press ctrl+space for code completion
export default function transformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.Identifier)
    .forEach(path => {
      j(path).replaceWith(
        j.identifier(path.node.name.split('').reverse().join(''))
      );
    })
    .toSource();
}`;

const DESTINATION = `/**
 * Paste or drop some JavaScript here and explore
 * the syntax tree created by chosen parser.
 * You can use all the cool new features from ES6
 * and even more. Enjoy!
 */

let spit = [
  "Click on any AST node with a '+' to expand it",

  "Hovering over a node highlights the \
   corresponding part in the source code",

  "Shift click on an AST node expands the whole substree"
];

function spiTtnirp() {
  spit.hcaErof((pit, i) => elosnoc.gol('Tip i: + pit'));
}
`;

export default Controller.extend({
  customize: service(),
  theme: computed.reads('customize.theme'),
  mode: 'javascript',
  source: sourceCode,
  codemod: CODEMOD,
  destination: DESTINATION,
});
