import { Document, DocumentField } from './Document';

function parseInput(input: string): Document[] {
  // Break apart each passport
  const unparsedDocuments = input.split('\n\n');

  const documents = unparsedDocuments.map(d => {
    const simpDoc = d.split('\n').join(' ');

    const sepFields = simpDoc.split(' ');

    // Get fields in passport
    const fields: DocumentField[] = sepFields.map(f => {
      const split = f.split(':');
      return { fieldName: split[0], value: split[1] };
    });

    return new Document(fields);
  });

  return documents;
}

export default parseInput;
