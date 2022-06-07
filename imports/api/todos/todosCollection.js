import { Mongo } from "meteor/mongo";

export const TodosCollection = new Mongo.Collection("todos");

export const mockedTodos = [
  {
    _id: "4mKYTtAhcZbSfqy32",
    name: "Do the dishes 🍽️",
    completed: false,
  },
  {
    _id: "WxkcPSCvBzgzjPL4u",
    name: "Send email to doctor Harris 👩‍⚕️",
    completed: false,
  },
  {
    _id: "swTTyZvFT8btxarpN",
    name: "Go to the gym 🥊",
    completed: false,
  },
  {
    _id: "KsT2rbA99ByBwMaXK",
    name: "Buy grocery 🥝",
    completed: false,
  },
  {
    _id: "iJu9FT4w83frJaMk6",
    name: "Finish assignment for friday 📓",
    completed: false,
  },
];
