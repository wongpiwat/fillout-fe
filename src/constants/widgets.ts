import { WidgetItemType } from "@/types/widgets";

interface WidgetItems {
  [key: string]: WidgetItemType;
}

export const WIDGET_ITEMS: WidgetItems = {
  heading: {
    label: "Heading",
    icon: "heading-1",
    description: "A large text element for titles or section headings.",
  },
  paragraph: {
    label: "Paragraph",
    icon: "file-text",
    description: "A multi-line text input for longer responses.",
  },
  banner: {
    label: "Banner",
    icon: "bell",
    description: "A large image or graphic element for visual emphasis.",
  },
  dropdown: {
    label: "Dropdown",
    icon: "chevrons-up-down",
    description: "A selection field that expands to show options.",
  },
  pictureChoice: {
    label: "Picture choice",
    icon: "image",
    description: "A question with options represented by images.",
  },
  multiselect: {
    label: "Multiselect",
    icon: "chevrons-up-down",
    description:
      "A question allowing multiple selections from a list of options.",
  },
  switch: {
    label: "Switch",
    icon: "toggle-left",
    description: "A toggle switch for binary choices (on/off).",
  },
  multipleChoice: {
    label: "Multiple choice",
    icon: "circle-ellipsis",
    description: "A question with multiple options, allowing one selection.",
  },
  checkbox: {
    label: "Checkbox",
    icon: "check",
    description: "A simple checkbox for binary choices (checked/unchecked).",
  },
  Checkboxes: {
    label: "Checkboxes",
    icon: "circle-ellipsis",
    description:
      "A question allowing multiple selections from a list of options.",
  },
  ChoiceMatrix: {
    label: "Choice matrix",
    icon: "layout-grid",
    description:
      "A grid of options for selecting multiple answers across categories.",
  },
  datePicker: {
    label: "Date picker",
    icon: "calendar",
    description: "A field for selecting a date from a calendar.",
  },
  dateTimePicker: {
    label: "Date time picker",
    icon: "calendar",
    description: "A field for selecting both date and time.",
  },
  timePicker: {
    label: "Time picker",
    icon: "clock-5",
    description: "A field for selecting a specific time.",
  },
  dateRange: {
    label: "Date range",
    icon: "calendar",
    description: "A field for selecting a range of dates.",
  },
  ranking: {
    label: "Ranking",
    icon: "arrow-down-up",
    description:
      "A question where respondents rank items in order of preference.",
  },
  starRating: {
    label: "Star rating",
    icon: "star",
    description: "A question where respondents rate items using stars.",
  },
  slider: {
    label: "Slider",
    icon: "sliders-vertical",
    description: "A draggable slider for selecting a value within a range.",
  },
  opinionScale: {
    label: "Opinion scale",
    icon: "chart-column-big",
    description: "A question where respondents rate their opinion on a scale.",
  },
  shortAnswer: {
    label: "Short answer",
    icon: "equal",
    description: "A single-line text input for short responses.",
  },
  longAnswer: {
    label: "Long answer",
    icon: "align-justify",
    description: "A multi-line text input for detailed responses.",
  },
  emailInput: {
    label: "Email input",
    icon: "mail",
    description: "A field specifically for email addresses.",
  },
  phoneNumber: {
    label: "Phone number",
    icon: "phone",
    description: "A field for entering phone numbers.",
  },
  address: {
    label: "Address",
    icon: "map-pin",
    description: "A field for entering address.",
  },
  number: {
    label: "Number",
    icon: "calculator",
    description: "A field for entering numeric values.",
  },
  currency: {
    label: "Currency",
    icon: "circle-dollar-sign",
    description: "A field for entering currency values.",
  },
  urlInput: {
    label: "URL input",
    icon: "link",
    description: "A field for entering web addresses (URLs).",
  },
  colorPicker: {
    label: "Color picker",
    icon: "swatch-book",
    description: "A field for selecting a color.",
  },
  password: {
    label: "Password",
    icon: "lock",
    description: "A field for entering passwords, with hidden input.",
  },
  fileUploader: {
    label: "File uploader",
    icon: "arrow-up-from-line",
    description: "A field for uploading files from the user's device.",
  },
  signature: {
    label: "Signature",
    icon: "square-pen",
    description: "A field for capturing handwritten signatures.",
  },
  voiceRecording: {
    label: "Voice recording",
    icon: "mic",
    description: "A field for recording audio responses.",
  },
  submissionPicker: {
    label: "Submission picker",
    icon: "file-search",
    description: "A field for selecting from previous submissions.",
  },
  subform: {
    label: "Subform",
    icon: "message-square-text",
    description: "A nested form that allows for complex data collection.",
  },
  captcha: {
    label: "Captcha",
    icon: "shield-check",
    description: "A field to verify that the user is human, preventing spam.",
  },
  locationCoordinates: {
    label: "Location coordinates",
    icon: "map-pin",
    description:
      "A field for capturing geographic coordinates (latitude/longitude).",
  },
  table: {
    label: "Table",
    icon: "sheet",
    description: "A structured grid for organizing data in rows and columns.",
  },
  sectionCollapse: {
    label: "Section collapse",
    icon: "circle-arrow-down",
    description: "A collapsible section to organize form elements.",
  },
  divider: {
    label: "Divider",
    icon: "minus",
    description: "A horizontal line to separate sections of the form.",
  },
  html: {
    label: "HTML",
    icon: "code-xml",
    description: "A field for embedding custom HTML content.",
  },
  image: {
    label: "Image",
    icon: "image",
    description: "A field for displaying images within the form.",
  },
  video: {
    label: "Video",
    icon: "film",
    description: "A field for embedding videos within the form.",
  },
  pdfViewer: {
    label: "PDF Viewer",
    icon: "file",
    description: "A field for displaying PDF documents within the form.",
  },
  socialMediaLinks: {
    label: "Social Media Links",
    icon: "share-2",
    description: "A field for entering links to social media profiles.",
  },
  progressBar: {
    label: "Progress Bar",
    icon: "chart-no-axes-column-increasing",
    description: "A visual indicator of form completion progress.",
  },
  paymentPage: {
    label: "Payment Page",
    icon: "credit-card",
    description: "A page for processing payments within the form.",
  },
  schedulingPage: {
    label: "Scheduling Page",
    icon: "calendar-days",
    description: "A page for scheduling appointments or events.",
  },
  loginPage: {
    label: "Login Page",
    icon: "lock",
    description: "A page for user authentication and login.",
  },
};

export const FREQUENTLY_USED_WIDGETS = {
  title: "Frequently used",
  items: [
    WIDGET_ITEMS.shortAnswer,
    WIDGET_ITEMS.multipleChoice,
    WIDGET_ITEMS.emailInput,
  ],
};

export const DISPLAY_TEXT_WIDGETS = {
  title: "Display text",
  items: [WIDGET_ITEMS.heading, WIDGET_ITEMS.paragraph, WIDGET_ITEMS.banner],
};

export const CHOICES_WIDGETS = {
  title: "Choices",
  items: [
    WIDGET_ITEMS.dropdown,
    WIDGET_ITEMS.pictureChoice,
    WIDGET_ITEMS.multiselect,
    WIDGET_ITEMS.switch,
    WIDGET_ITEMS.multipleChoice,
    WIDGET_ITEMS.checkbox,
    WIDGET_ITEMS.Checkboxes,
    WIDGET_ITEMS.ChoiceMatrix,
  ],
};

export const TIME_WIDGETS = {
  title: "Time",
  items: [
    WIDGET_ITEMS.datePicker,
    WIDGET_ITEMS.dateTimePicker,
    WIDGET_ITEMS.timePicker,
    WIDGET_ITEMS.dateRange,
  ],
};

export const RATING_RANKING_WIDGETS = {
  title: "Rating & Ranking",
  items: [
    WIDGET_ITEMS.ranking,
    WIDGET_ITEMS.starRating,
    WIDGET_ITEMS.slider,
    WIDGET_ITEMS.opinionScale,
  ],
};

export const TEXT_WIDGETS = {
  title: "Text",
  items: [WIDGET_ITEMS.shortAnswer, WIDGET_ITEMS.longAnswer],
};

export const CONTACT_INFO_WIDGETS = {
  title: "Contact info",
  items: [
    WIDGET_ITEMS.emailInput,
    WIDGET_ITEMS.phoneNumber,
    WIDGET_ITEMS.address,
  ],
};

export const NUMBER_WIDGETS = {
  title: "Number",
  items: [WIDGET_ITEMS.number, WIDGET_ITEMS.currency],
};

export const MISCELLANEOUS_WIDGETS = {
  title: "Miscellaneous",
  items: [
    WIDGET_ITEMS.urlInput,
    WIDGET_ITEMS.colorPicker,
    WIDGET_ITEMS.password,
    WIDGET_ITEMS.fileUploader,
    WIDGET_ITEMS.signature,
    WIDGET_ITEMS.voiceRecording,
    WIDGET_ITEMS.submissionPicker,
    WIDGET_ITEMS.subform,
    WIDGET_ITEMS.captcha,
    WIDGET_ITEMS.locationCoordinates,
    WIDGET_ITEMS.table,
  ],
};

export const NAVIGATION_LAYOUT_WIDGETS = {
  title: "Navigation & Layout",
  items: [
    WIDGET_ITEMS.sectionCollapse,
    WIDGET_ITEMS.divider,
    WIDGET_ITEMS.html,
  ],
};

export const MEDIA_WIDGETS = {
  title: "Media",
  items: [
    WIDGET_ITEMS.image,
    WIDGET_ITEMS.video,
    WIDGET_ITEMS.pdfViewer,
    WIDGET_ITEMS.socialMediaLinks,
  ],
};

export const PAGE_FEATURES_WIDGETS = {
  title: "Page Features",
  items: [
    WIDGET_ITEMS.progressBar,
    WIDGET_ITEMS.paymentPage,
    WIDGET_ITEMS.schedulingPage,
    WIDGET_ITEMS.loginPage,
  ],
};
