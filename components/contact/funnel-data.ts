export interface ChoiceOption {
  value: string;
  label: string;
  description?: string;
}

export interface Question {
  id: string;
  type:
    | "choice"
    | "text"
    | "email"
    | "tel"
    | "textarea"
    | "contact-group"
    | "calendar";
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: ChoiceOption[];
}

export interface Step {
  heading: string;
  subheading?: string;
  layout?: "single" | "split"; // split = left 1/2 + right 1/2
  questions: Question[];
}

// Shared first 2 steps for both branches
const sharedStartSteps: Step[] = [
  {
    heading: "Máte zkušenosti s marketingem na sociálních sítích?",
    subheading: "Pomůže mi to lépe odhadnout výchozí bod spolupráce.",
    questions: [
      {
        id: "experience",
        type: "choice",
        required: true,
        options: [
          { value: "yes", label: "Ano" },
          { value: "some", label: "Mírně" },
          { value: "no", label: "Ne" },
          { value: "unknown", label: "Nevím co to je" },
        ],
      },
    ],
  },
  {
    heading: "S čím potřebujete pomoct?",
    subheading: "Co děláte, co aktuálně řešíte a kam směřujete.",
    questions: [
      {
        id: "project",
        type: "textarea",
        placeholder:
          "Např. potřebuju víc poptávek na rekonstrukce koupelen.",
        required: true,
      },
    ],
  },
];

// MESSAGE branch — 3 steps (experience + project + contact)
export const messageBranchSteps: Step[] = [
  ...sharedStartSteps,
  {
    heading: "Vaše kontaktní údaje",
    subheading: "Ozvu se Vám během 24 hodin.",
    layout: "single",
    questions: [
      {
        id: "name",
        type: "text",
        label: "Jméno a příjmení",
        placeholder: "Jan Novák",
        required: true,
      },
      {
        id: "company",
        type: "text",
        label: "Firma",
        placeholder: "Novák stavby s.r.o.",
        required: true,
      },
      {
        id: "phone",
        type: "tel",
        label: "Telefon",
        placeholder: "+420 777 123 456",
        required: true,
      },
      {
        id: "email",
        type: "email",
        label: "E-mail",
        placeholder: "jan@novakstavby.cz",
        required: true,
      },
    ],
  },
];

// CALL branch — 3 steps (experience + project + contact-with-calendar)
export const callBranchSteps: Step[] = [
  ...sharedStartSteps,
  {
    heading: "Vyberte termín hovoru",
    subheading:
      "Hovory plánuju úterý / středa / čtvrtek. Pošlu Vám potvrzení s detaily.",
    layout: "split",
    questions: [
      {
        id: "name",
        type: "text",
        label: "Jméno a příjmení",
        placeholder: "Jan Novák",
        required: true,
      },
      {
        id: "company",
        type: "text",
        label: "Firma",
        placeholder: "Novák stavby s.r.o.",
        required: true,
      },
      {
        id: "phone",
        type: "tel",
        label: "Telefon",
        placeholder: "+420 777 123 456",
        required: true,
      },
      {
        id: "email",
        type: "email",
        label: "E-mail",
        placeholder: "jan@novakstavby.cz",
        required: true,
      },
      {
        id: "slot",
        type: "calendar",
        required: true,
      },
    ],
  },
];
