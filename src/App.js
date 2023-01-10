import React, { useCallback, useEffect, useRef } from 'react';

export default function FireCursor() {
  const container = useRef(null);
  const game = useRef(null);

  const onPointerMove = useCallback(
    (event) => {
      game.current.pointerMove(event.x, event.y);
    },
    [game]
  );

  const onResize = useCallback(() => {
    game.current.resize(window.innerWidth, window.innerHeight);
  }, [game]);

  useEffect(() => {
    const containerElement = container.current;

    if (game.current && containerElement) {
      game.current = new CursorGraphics(containerElement);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('resize', onResize);
      onResize();
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      game.current.dispose();
      game.current = null;
    };
  }, [container]);
  return <div ref={container} />;
}
