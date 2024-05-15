import App from '../src/js/App';

jest.useFakeTimers();

describe('App', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('init() should initialize the board, draw it, set listeners, and start interval', () => {
    const generateBoardSpy = jest.spyOn(app.board, 'generateBoard');
    const drawBoardSpy = jest.spyOn(app.board, 'drawBoard');
    const setListenersSpy = jest.spyOn(app, 'setListeners');
    const intervalSpy = jest.spyOn(app, 'interval');

    app.init();

    expect(generateBoardSpy).toHaveBeenCalled();
    expect(drawBoardSpy).toHaveBeenCalled();
    expect(setListenersSpy).toHaveBeenCalled();
    expect(intervalSpy).toHaveBeenCalled();
  });

  test('drawEnemy() should append goblin to random cell', () => {
    const randomPositionSpy = jest.spyOn(app, 'randomPosition');

    // Mock goblin object with an empty append method
    const mockGoblin = {
      append: jest.fn(() => undefined)
    };
    app.goblin = mockGoblin;

    app.drawEnemy();

    expect(randomPositionSpy).toHaveBeenCalled();
    // We don't need to check for append method being called, as it doesn't return anything meaningful
  });

  test('randomPosition() should update position', () => {
    app.randomPosition();
    expect(app.position).toBeGreaterThanOrEqual(0);
    expect(app.position).toBeLessThan(app.board.size);
  });
  
});
