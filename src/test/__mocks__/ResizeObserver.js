const resizeObserverMock = () => ({
  observe: () => null,
  disconnect: () => null,
  unobserve: () => null,
});
window.ResizeObserver = jest.fn().mockImplementation(resizeObserverMock);
