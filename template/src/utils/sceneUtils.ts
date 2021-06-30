import { useCallback, useEffect, useState } from 'react';
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events';

export const usePointer = (pointer?: boolean): void =>
  useEffect(() => void (document.body.style.cursor = pointer ? `pointer` : `auto`), [pointer]);

export const useHover = (
  onOver?: () => void,
  onOut?: () => void
): [Pick<EventHandlers, 'onPointerOver' | 'onPointerOut'>, boolean] => {
  const [hovered, setHover] = useState(false);
  const onPointerOver = useCallback(
    (e) => {
      e.stopPropagation();
      setHover(true);
      onOver?.();
    },
    [onOver]
  );
  const onPointerOut = useCallback(() => {
    setHover(false);
    onOut?.();
  }, [onOut]);
  return [{ onPointerOver, onPointerOut }, hovered];
};
