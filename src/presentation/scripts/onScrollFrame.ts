/**
 * Utilidades de cliente compartidas por los componentes que reaccionan al scroll.
 * @packageDocumentation
 */

/**
 * Ejecuta `handleFrame` al cargar y, después, como máximo una vez por frame
 * cuando la página se desplaza o cambia de tamaño. Evita trabajo redundante
 * cuando el navegador dispara muchos eventos `scroll` seguidos.
 *
 * @param handleFrame Lógica que lee el scroll y actualiza la interfaz.
 */
export const onScrollFrame = (handleFrame: () => void): void => {
	let isFrameScheduled = false;

	const scheduleFrame = () => {
		if (isFrameScheduled) return;
		isFrameScheduled = true;
		requestAnimationFrame(() => {
			isFrameScheduled = false;
			handleFrame();
		});
	};

	window.addEventListener("scroll", scheduleFrame, { passive: true });
	window.addEventListener("resize", scheduleFrame);
	handleFrame();
};

/** Progreso de lectura de la página, entre 0 (arriba) y 1 (final). */
export const getScrollProgress = (): number => {
	const maxScroll =
		document.documentElement.scrollHeight - window.innerHeight;
	if (maxScroll <= 0) return 0;
	return Math.min(1, Math.max(0, window.scrollY / maxScroll));
};
