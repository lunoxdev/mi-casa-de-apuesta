interface Props {
  tabNumber: number;
  activeTab: number;
  name: string;
  handleTabClick: (tabNumber: number) => void;
}

const TabBtns = ({ name, tabNumber, activeTab, handleTabClick }: Props) => (
  <div
    className={`tab ${
      activeTab === tabNumber
        ? "underline underline-offset-8 font-semibold"
        : "hover:underline hover:underline-offset-8 hover:opacity-80"
    }`}
    onClick={() => handleTabClick(tabNumber)}
  >
    {name}
  </div>
);

export default TabBtns;
