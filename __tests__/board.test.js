import Board from '../src/js/Board';

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = new Board(4); // создаем экземпляр доски с размером 4x4
  });

  test('constructor() should initialize size and cells array', () => {
    expect(board.size).toBe(16); // 4^2 = 16
    expect(board.cells).toEqual([]); // массив ячеек должен быть пустым при инициализации
  });

  test('generateBoard() should generate cells for the board', () => {
    board.generateBoard();

    // Проверяем, что количество созданных ячеек соответствует размеру доски
    expect(board.cells.length).toBe(board.size);

    // Проверяем, что каждая ячейка имеет правильный класс и id
    board.cells.forEach((cell, index) => {
      expect(cell.classList.contains('cell')).toBe(true);
      expect(cell.id).toBe(String(index));
    });
  });

  test('createContainer() should create a container element with correct class', () => {
    const container = board.createContainer();
    expect(container.classList.contains('container')).toBe(true);
  });

  test('createScore() should create a score element with correct structure and initial score value', () => {
    const scoreP = board.createScore();
    expect(scoreP.tagName).toBe('P');
    expect(scoreP.classList.contains('score')).toBe(true);
    expect(scoreP.textContent).toContain('Счёт: ');
    expect(scoreP.textContent).toContain('0');
  });

  // Поскольку метод drawBoard() изменяет DOM, мы не можем протестировать его в изоляции, 
  // но мы можем написать интеграционный тест для этого, если это необходимо.
});
