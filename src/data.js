const data = [
  {
    id: 1,
    category: "Etudes",
    autor: "Aaaaa Aaaaa",
    price: 1100,
    stock: 10,
    title: "Cours math Bac",
    description:
      "Et sint velit duis ullamco. Veniam mollit irure id officia. Minim non occaecat aliquip enim magna dolor magna incididunt ea voluptate ad mollit et Lorem. Velit occaecat aliqua do id adipisicing consequat laboris.",
  },
  {
    id: 2,
    category: "Etudes",
    autor: "Bbbbb Bbbbb",
    price: 1100,
    stock: 10,
    title: "Cours physique Bac",
    description:
      "Labore veniam sint elit incididunt nulla quis. Esse adipisicing fugiat elit consectetur. Proident commodo adipisicing esse eu Lorem ipsum quis excepteur. Voluptate reprehenderit quis ad non ea dolore occaecat Lorem laboris ea et ea. Dolore consectetur quis esse laborum id velit fugiat irure eu ex dolor aute proident exercitation.",
  },
  {
    id: 3,
    category: "Etudes",
    autor: "Aaaaa Aaaaa",
    price: 400,
    stock: 15,
    title: "Sujet de Bac math",
    description:
      "Nisi aliqua aliqua sunt anim incididunt esse. Ex adipisicing anim velit eiusmod veniam mollit. Velit incididunt tempor et velit voluptate id officia. Qui irure aliquip excepteur sunt adipisicing officia mollit officia proident occaecat fugiat aliquip nostrud mollit. Adipisicing consectetur do excepteur proident non enim aute id. Proident anim dolor esse ex dolor sit culpa magna labore minim dolor esse dolor ut. Dolore pariatur eiusmod consectetur ut mollit officia velit in velit.",
  },
  {
    id: 4,
    category: "Technique",
    autor: "Bignolf",
    price: 1400,
    stock: 4,
    title: "Apprendre la programmation C++",
    description:
      "Amet voluptate adipisicing ex magna laborum. Exercitation veniam pariatur id commodo elit amet mollit quis magna aliqua deserunt incididunt anim. Tempor deserunt consectetur adipisicing enim tempor do eu eu.",
  },
  {
    id: 5,
    category: "Technique",
    autor: "Ttttttt",
    price: 1000,
    stock: 3,
    title: "initiation à la mécanique auto",
    description:
      "Anim minim ullamco occaecat occaecat consequat amet. Excepteur eu sint est aute id minim deserunt reprehenderit. Sunt ad id quis sunt. Qui sit nisi officia officia elit incididunt Lorem minim sit eiusmod veniam occaecat Lorem excepteur. Dolore aliquip ex laborum do sint enim pariatur pariatur duis.",
  },
  {
    id: 6,
    category: "Littérature",
    autor: "Paolo Cohelo",
    price: 9500,
    stock: 18,
    title: "L'alchémiste",
    description:
      "Ut commodo et nostrud et in velit culpa sint dolor. Eiusmod et minim exercitation proident laborum aliquip occaecat id adipisicing quis laborum ea. Aliquip deserunt reprehenderit aute esse.",
  },
  {
    id: 7,
    category: "Littérature",
    autor: "Paolo Cohelo",
    price: 200,
    stock: 15,
    title: "Guerrier de la lumière",
    description:
      "Laborum eiusmod Lorem esse cillum occaecat ea amet. Irure consequat sunt quis eu. Velit quis ut occaecat elit enim eiusmod ex ea eu. Consequat esse aliqua adipisicing fugiat ullamco elit.",
  },
  {
    id: 8,
    category: "Littérature",
    autor: "Khalil Djibrane Khalil",
    price: 250,
    stock: 15,
    title: "Le prophète",
    description:
      "Laboris consectetur est pariatur reprehenderit ea nostrud minim consectetur ut sit proident nulla ea cillum. Veniam commodo pariatur minim reprehenderit esse exercitation tempor ea in ipsum deserunt voluptate aliqua. Nisi tempor eu sint ipsum voluptate labore exercitation cupidatat enim aliquip officia sint. Mollit ex ipsum ut esse aliquip consectetur do eu reprehenderit. Occaecat ea eu quis irure id sunt.",
  },
  {
    id: 9,
    category: "Littérature",
    autor: "Dovstoisky",
    price: 1200,
    stock: 10,
    title: "crime et chatiment",
    description:
      "Culpa amet ex exercitation sit voluptate laborum anim veniam elit ut. Fugiat aliquip ad reprehenderit anim laboris ullamco aute sint ullamco enim id fugiat cupidatat excepteur. Sint id excepteur incididunt commodo deserunt quis mollit aliquip occaecat voluptate sunt voluptate ullamco pariatur. Consectetur nulla nostrud quis ipsum eiusmod culpa fugiat et adipisicing. Est incididunt reprehenderit amet deserunt ea nostrud occaecat. Reprehenderit labore excepteur dolore sit enim excepteur anim pariatur duis sunt do cillum. Lorem aliqua ea ad aliquip magna reprehenderit quis officia duis velit.",
  },
  {
    id: 10,
    category: "Santé",
    autor: "Doctor House",
    price: 900,
    stock: 8,
    title: "Manuel de la medecine d'urgence",
    description:
      "Eu quis culpa irure ea esse elit. Velit minim ullamco nostrud dolore commodo id occaecat aliqua laborum aute reprehenderit anim. Cupidatat cupidatat nostrud consequat Lorem culpa non tempor pariatur consectetur amet cupidatat.",
  },
  {
    id: 11,
    category: "Santé",
    autor: "Doctor House",
    price: 800,
    stock: 6,
    title: "L'anatomie pour les nuls",
    description:
      "Duis sint non tempor proident pariatur cillum anim aute exercitation ipsum ea velit amet proident. Nulla magna proident voluptate est quis sunt cupidatat ullamco sint voluptate id in consectetur. Mollit excepteur est sint minim.",
  },
  {
    id: 12,
    category: "Santé",
    autor: "Doctor who",
    price: 1000,
    stock: 5,
    title: "Medecine du sport",
    description:
      "Enim occaecat enim amet sit esse officia amet. Sunt consectetur sit anim nulla aute laborum irure pariatur sit nostrud sit laboris. Nisi aute eiusmod nulla ullamco commodo. Ut ex Lorem cupidatat culpa pariatur reprehenderit. Est tempor nisi quis non excepteur aliquip sunt laborum aliquip sit esse. ",
  },
  {
    id: 13,
    category: "Autre",
    autor: "",
    price: 600,
    stock: 10,
    title: "Mémoire du président Chaadli",
    description:
      "Enim occaecat enim amet sit esse officia amet. Sunt consectetur sit anim nulla aute laborum irure pariatur sit nostrud sit laboris. Nisi aute eiusmod nulla ullamco commodo. Ut ex Lorem cupidatat culpa pariatur reprehenderit. Est tempor nisi quis non excepteur aliquip sunt laborum aliquip sit esse. ",
  },
];

export default data;
