import { act, renderHook } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('UseCounter', () => {
  test('Display a value of 0', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test('Display a value of 10 when 10 is added', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
  test('should increment a count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
});
