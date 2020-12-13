interface DocumentField {
  fieldName: string;
  value: string;
}

class Document {
  private requiredFields: string[]
  constructor(private fields: DocumentField[]) {
    this.requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];
  }

  public isValid(optionalFields?: string[]): boolean {
    return this.hasRequiredFields() && this.areValuesValid();
  }

  private areValuesValid(): boolean {
    const invalidFields = this.fields.filter(f => !this.isFieldValid(f));

    return invalidFields.length === 0;
  }

  private isFieldValid(field: DocumentField): boolean {
    switch (field.fieldName) {
      case 'byr': return this.isBirthYearValid(field.value);
      case 'iyr': return this.isIssueYearValid(field.value);
      case 'eyr': return this.isExpirationYearValid(field.value);
      case 'hgt': return this.isHeightValid(field.value);
      case 'hcl': return this.isHairColorValid(field.value);
      case 'ecl': return this.isEyeColorValid(field.value);
      case 'pid': return this.isPassportIdValid(field.value);
      case 'cid': return this.isCountryIdValid(field.value);
      default:
        return true;
    }
  }

  /** byr (Birth Year) - four digits; at least 1920 and at most 2002. */
  private isBirthYearValid(value: string): boolean {
    const byr = parseInt(value);
    return byr >= 1920 && byr <= 2002;
  }

  /** iyr (Issue Year) - four digits; at least 2010 and at most 2020. */
  private isIssueYearValid(value: string): boolean {
    const iyr = parseInt(value);
    return iyr >= 2010 && iyr <= 2020;
  }

  /** eyr (Expiration Year) - four digits; at least 2020 and at most 2030. */
  private isExpirationYearValid(value: string): boolean {
    const eyr = parseInt(value);
    return eyr >= 2020 && eyr <= 2030;
  }

  /** 
   * hgt (Height) - a number followed by either cm or in:
   *    If cm, the number must be at least 150 and at most 193.
   *    If in, the number must be at least 59 and at most 76.
   */
  private isHeightValid(value: string): boolean {
    const postfix = value.slice(-2);
    const prefix = value.slice(0, value.length - 2);

    const num = parseInt(prefix);
    if (postfix === 'cm') {
      return num >= 150 && num <= 193;
    } else if (postfix === 'in') {
      return num >= 59 && num <= 76;
    }

    return false;
  }

  /** hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f. */
  private isHairColorValid(value: string): boolean {
    return
  }

  /** ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth. */
  private isEyeColorValid(value: string): boolean {
    return true;
  }

  /** pid (Passport ID) - a nine-digit number, including leading zeroes. */
  private isPassportIdValid(value: string): boolean {
    return true;
  }

  /** cid (Country ID) - ignored, missing or not. */
  private isCountryIdValid(value: string): boolean {
    return true;
  }

  private hasRequiredFields(optionalFields?: string[]): boolean {
    let remainingReqFields = this.requiredFields.filter(f => !optionalFields?.includes(f));

    const fieldNames = this.fields.map(f => f.fieldName);
    remainingReqFields = remainingReqFields.filter(ef => !fieldNames.includes(ef))

    return remainingReqFields.length === 0;
  }
}

export { Document, DocumentField }