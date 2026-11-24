export type EditableField = {
  /** Real value once available — rendered verbatim. */
  value: string | null;
  /** Shown while value is null, already wrapped in [BRACKETS]. */
  placeholder: string;
};

export const education = {
  index: "01",
  degree: "B.Sc. in Computer Science and Engineering",

  institution: {
    value: null,
    placeholder: "Premier University, Chattogram",
  } as EditableField,

  period: {
    value: null,
    placeholder: "2023 – present",
  } as EditableField,

  status: "Currently pursuing - undergraduate",
};
