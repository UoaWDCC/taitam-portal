type DbUser = {
  name: string;
  email: string;
  education: string;
  employment: string;
  lookingForWork: "Yes" | "No" | undefined;
  studyingDegree: string;
};

export default DbUser;

