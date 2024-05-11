/* eslint-disable react/no-unknown-property */
import { useVideoTexture } from "@react-three/drei";
import { DoubleSide } from "three";

// eslint-disable-next-line react/prop-types
const VideoMaterial = ({ src }) => {
  const texture = useVideoTexture(src);
  return (
    <meshStandardMaterial side={DoubleSide} map={texture} toneMapped={false} />
  );
};

export default VideoMaterial;
