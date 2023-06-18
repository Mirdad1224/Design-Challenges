interface BackDropProps {
  isSidebarOpen: boolean;
  onToggle: () => void;
}

const Backdrop = ({ isSidebarOpen, onToggle }: BackDropProps) => {
  return (
    <div
      onClick={() => onToggle()}
      className={`absolute ${
        isSidebarOpen ? "block" : "hidden"
      } top-0 bottom-0 left-0 right-60 bg-[rgba(0,0,0,.7)] z-30`}
    ></div>
  );
};
export default Backdrop;
