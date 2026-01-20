import { useEffect, useRef } from "react";
import DailyIframe from "@daily-co/daily-js";

type Props = {
  roomUrl: string;
};

const VideoCall = ({ roomUrl }: Props) => {
  const callRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    callRef.current = DailyIframe.createFrame(containerRef.current, {
      showLeaveButton: true,
      showFullscreenButton: true,
    });

    callRef.current.join({ url: roomUrl });

    return () => {
      callRef.current?.destroy();
    };
  }, [roomUrl]);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default VideoCall;
