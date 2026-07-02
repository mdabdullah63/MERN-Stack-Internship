import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        gap: "16px",
      }}
    >
      <CircularProgress
        size={60}
        sx={{ color: "blue" }}
      />
      <p
        style={{
          fontSize: "18px",
          fontWeight: "500",
          margin: 0,
        }}
      >
        Loading...
      </p>
    </div>
  );
}

export default Loader;