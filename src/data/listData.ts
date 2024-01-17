import { PEOPLE, Person, Reaction } from "./peopleData";

export interface ListPerson extends Omit<Person, "reaction"> {}
export interface ListItem {
  title: Reaction;
  data: ListPerson[];
}
let listData: ListItem[] = [];
let reactions = new Set<Reaction>();
PEOPLE.forEach((person) => {
  reactions.add(person.reaction);
}); // Set with Section heads titles
reactions.forEach((reaction) => {
  let elements: Person[]; //list with persons
  elements = PEOPLE.filter((element) => element.reaction === reaction); //save entries that match the reaction
  let filtredElements = [];
  elements.forEach((element) => {
    let { reaction, ...filtredElement } = element;  //save persons without "reaction" key
    filtredElements.push(filtredElement);
  });
  listData.push({ title: reaction, data: filtredElements });
});
export default listData;
