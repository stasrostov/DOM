import Goblin from '../src/js/Goblin';

describe('Goblin', () => {
  let goblin;

  beforeEach(() => {
    goblin = new Goblin();
  });

  test('constructor() should create an img element with correct src and class', () => {
    const element = goblin.element;

    // Проверяем, что создан элемент img
    expect(element.tagName).toBe('IMG');

    // Проверяем, что src и className установлены правильно
    expect(element.src).toContain('https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/dom/pic/goblin.png?raw=true');
    expect(element.classList.contains('goblin')).toBe(true);
  });

  test('element() getter should return the created img element', () => {
    const element = goblin.element;
    expect(element.tagName).toBe('IMG');
  });

});
