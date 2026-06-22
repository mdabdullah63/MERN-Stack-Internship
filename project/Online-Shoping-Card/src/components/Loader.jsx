import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <CircularProgress size={60} sx={{ color: "black" }} />
      <p className="text-lg font-medium">Loading...</p>
    </div>
  );
}

export default Loader;