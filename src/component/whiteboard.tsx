import React, { useRef, useEffect } from "react";

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      // Set up initial canvas properties
      context.lineWidth = 2;
      context.strokeStyle = "black";

      let isDrawing = false;
      let lastX = 0;
      let lastY = 0;

      const startDrawing = (e: MouseEvent) => {
        isDrawing = true;
        lastX = e.clientX - canvas.offsetLeft;
        lastY = e.clientY - canvas.offsetTop;
      };

      const draw = (e: MouseEvent) => {
        if (!isDrawing) return;

        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(
          e.clientX - canvas.offsetLeft,
          e.clientY - canvas.offsetTop
        );
        context.stroke();

        lastX = e.clientX - canvas.offsetLeft;
        lastY = e.clientY - canvas.offsetTop;
      };

      const stopDrawing = () => {
        isDrawing = false;
      };

      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mouseup", stopDrawing);
      canvas.addEventListener("mouseout", stopDrawing);

      return () => {
        canvas.removeEventListener("mousedown", startDrawing);
        canvas.removeEventListener("mousemove", draw);
        canvas.removeEventListener("mouseup", stopDrawing);
        canvas.removeEventListener("mouseout", stopDrawing);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
};

export default Whiteboard;
