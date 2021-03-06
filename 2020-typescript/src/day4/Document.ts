/** byr (Birth Year) - four digits; at least 1920 and at most 2002. */
function isBirthYearValid(value: string): boolean {
  const byr = parseInt(value, 10);
  return byr >= 1920 && byr <= 2002;
}

/** iyr (Issue Year) - four digits; at least 2010 and at most 2020. */
function isIssueYearValid(value: string): boolean {
  const iyr = parseInt(value, 10);
  return iyr >= 2010 && iyr <= 2020;
}

/** eyr (Expiration Year) - four digits; at least 2020 and at most 2030. */
function isExpirationYearValid(value: string): boolean {
  const eyr = parseInt(value, 10);
  return eyr >= 2020 && eyr <= 2030;
}

/**
 * hgt (Height) - a number followed by either cm or in:
 *    If cm, the number must be at least 150 and at most 193.
 *    If in, the number must be at least 59 and at most 76.
 */
function isHeightValid(value: string): boolean {
  const postfix = value.slice(-2);
  const prefix = value.slice(0, value.length - 2);

  const num = parseInt(prefix, 10);
  if (postfix === 'cm') {
    return num >= 150 && num <= 193;
  }
  if (postfix === 'in') {
    return num >= 59 && num <= 76;
  }

  return false;
}

/** hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f. */
function isHairColorValid(value: string): boolean {
  const reg = /^#([0-9]|[a-f]){6}$/;
  return reg.test(value);
}

/** ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth. */
function isEyeColorValid(value: string): boolean {
  const colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  return colors.includes(value);
}

/** pid (Passport ID) - a nine-digit number, including leading zeroes. */
function isPassportIdValid(value: string): boolean {
  if (value.length < 9) {
    return false;
  }

  let number;
  try {
    number = parseInt(value, 10);
  } catch (err) {
    return false;
  }

  return number <= 999999999;
}

function isFieldValid(field: DocumentField): boolean {
  switch (field.fieldName) {
    case 'byr':
      return isBirthYearValid(field.value);
    case 'iyr':
      return isIssueYearValid(field.value);
    case 'eyr':
      return isExpirationYearValid(field.value);
    case 'hgt':
      return isHeightValid(field.value);
    case 'hcl':
      return isHairColorValid(field.value);
    case 'ecl':
      return isEyeColorValid(field.value);
    case 'pid':
      return isPassportIdValid(field.value);
    default:
      return true;
  }
}

interface DocumentField {
  fieldName: string;
  value: string;
}

class Document {
  private requiredFields: string[];

  constructor(private fields: DocumentField[]) {
    this.requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];
  }

  public isValid(optionalFields?: string[]): boolean {
    return this.hasRequiredFields(optionalFields) && this.areValuesValid();
  }

  private areValuesValid(): boolean {
    const invalidFields = this.fields.filter((f) => !isFieldValid(f));

    return invalidFields.length === 0;
  }

  public hasRequiredFields(optionalFields?: string[]): boolean {
    let remainingReqFields = this.requiredFields.filter((f) => !optionalFields?.includes(f));

    const fieldNames = this.fields.map((f) => f.fieldName);
    remainingReqFields = remainingReqFields.filter((ef) => !fieldNames.includes(ef));

    return remainingReqFields.length === 0;
  }
}

export { Document, DocumentField };
