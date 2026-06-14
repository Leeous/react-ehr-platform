/**
 * @summary Calculate DOB from date string
 * @param {string} dobString - String containing patient's date of birth.
 * @returns {number} Age based on date of birth. 
 */
export const caclulateAge = (dobString: string): number => {
  const today = new Date();
  const birthDate = new Date(dobString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

/**
 * @summary  Strips Synthea trailing numbers and splits into first/last name.
 * @description Strips the trailing 3-digit collision-avoidance numbers
 * appended by the Synthea dataset generator and cleanly separates the
 * result into distinct first and last names.
 * 
 * @param {string} rawName - String containing patient's full name, stripping any numbers.
 * * @returns {{firstName: string, lastName: string}} An object containing the isolated, sanatized name strings.
 * const { firstName, lastName } = parseSyntheaName("John342 Smith118");
 * // firstName -> "John"
 * // lastName  -> "Smith"
 */
export function parseSyntheaName(rawName: string) {
  const cleanString = rawName.replace(/\d+/g, '');
  const parts = cleanString.trim().split(/\s+/);

  return {
    firstName: parts[0] || '',
    lastName: parts.slice(1).join(' ') || '' 
  };
}