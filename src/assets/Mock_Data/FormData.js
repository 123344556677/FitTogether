export const signupInputs = [
  {
    name: "firstName",
    placeholder: "First Name",
    type: "text",
    icon: "ni ni-hat-3",
    required: true,
    className: "signup-input",
  },
  {
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
    icon: "ni ni-hat-3",
    required: true,
    className: "signup-input",
  },
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    icon: "ni ni-email-83",
    required: true,
    className: "signup-input",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    icon: "ni ni-lock-circle-open",
    required: true,
    className: "signup-input",
  },
  {
    name: "confirmPassword",
    placeholder: "Confirm Password",
    type: "password",
    icon: "ni ni-lock-circle-open",
    required: true,
    className: "signup-input",
  },
  {
    name: "userType",
    type: "select",
    value: "user", // Default value
    options: [
      { title: "user", value: "user" },
      { title: "trainer", value: "trainer" },
    ],
    required: true,
    className:"signup-input-select"
  },
];
export const loginInputs = [
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    icon: "ni ni-email-83",
    className: "login-input",
    required: true,
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    icon: "ni ni-lock-circle-open",
    className: "login-input",
    required: true,
  },
];
export const forgetInputs = [
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    icon: "ni ni-email-83",
    required: true,
  },
];
