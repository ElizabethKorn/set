import Character from "../character";
import Team from "../set";

test("should add a character to the team", () => {
  const hero1 = new Character("Hero1");
  const team = new Team();
  team.add(hero1);
  expect(team.toArray()).toContain(hero1);
});

test("should throw an error when you add the same character to the team", () => {
  const hero1 = new Character("Hero1");
  const team = new Team();
  team.add(hero1);
  expect(() => team.add(hero1)).toThrow("Персонаж уже есть в команде!");
});

test("should add all characters to the team", () => {
  const hero1 = new Character("Hero1");
  const hero2 = new Character("Hero2");
  const hero3 = new Character("Hero3");
  const team = new Team();
  team.addAll(hero1, hero2, hero3);
  const result = [hero1, hero2, hero3];
  expect(team.toArray()).toEqual(result);
});

test("should not throw an error when adding duplicate characters using addAll", () => {
  const hero1 = new Character("Hero1");
  const hero2 = new Character("Hero2");
  const team = new Team();
  team.addAll(hero1);
  team.addAll(hero1, hero2);
  const result = [hero1, hero2];
  expect(team.toArray()).toEqual(result);
});

test("should convert members to an array", () => {
  const hero1 = new Character("Hero1");
  const hero2 = new Character("Hero2");
  const team = new Team();
  team.add(hero1);
  team.add(hero2);
  const membersArray = team.toArray();
  expect(membersArray).toHaveLength(2);
  expect(membersArray).toContain(hero1);
  expect(membersArray).toContain(hero2);
});
