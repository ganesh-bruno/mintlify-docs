export const Video = ({ src, ...props }) => {
  return (
    <div style={{ margin: '2rem 0' }}>
      <video
        controls
        style={{
          width: '100%',
          maxWidth: '100%',
          borderRadius: '0.5rem',
          border: '1px solid #E5E7EB'
        }}
        {...props}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;


