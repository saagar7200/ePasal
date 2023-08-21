export const getRequiredText = (text: string) => `${text} is required`;
export const getRequiredTextNepali = (text: string) => `${text} आवस्यक छ`;
export const getValidText = (text: string) => `${text} must be valid`;

const text = {
  PASSWORD_SUGGESTION:
    "Use 8 or more characters with at least one uppercase letter, numbers & symbols",
  PASSWORD_MATCH: "Both password needs to be same",
};

export default text;

export const placeholderInput = (lang: "en" | "ne", text: string) =>
  lang === "en" ? `Enter ${text}` : `${text} लेख्नुहोस्`;
