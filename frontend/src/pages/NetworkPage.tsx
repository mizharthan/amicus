import { useEffect, useRef, useState } from "react";
import NetworkScene from "../network/NetworkScene";
import { useNavigate } from "react-router-dom";

const NetworkPage = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // center on load
    const centerX = wrapper.scrollWidth / 2 - wrapper.clientWidth / 2;
    const centerY = wrapper.scrollHeight / 2 - wrapper.clientHeight / 2;
    wrapper.scrollLeft = centerX;
    wrapper.scrollTop = centerY + 80;

    const onWheel = (e: WheelEvent) => {
      // ONLY handle pinch zoom
      if (!e.ctrlKey) return;

      e.preventDefault();

      const zoomSpeed = 0.002;
      const delta = e.deltaY;

      setZoom((prev) => {
        const next = prev - delta * zoomSpeed;
        return Math.min(4, Math.max(0.5, next));
      });
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="network-page">
      <div className="svg-wrapper" ref={wrapperRef}>
        <NetworkScene zoom={zoom} />
      </div>

      <button className="bottom-nav-btn" onClick={() => navigate("/home")}>
        🏠
      </button>
    </div>
  );
};

export default NetworkPage;
