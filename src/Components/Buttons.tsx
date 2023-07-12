const Buttons = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex flex-col items-center">
    {icon}
    <p className="text-sm font-normal">{text}</p>
  </div>
);
export default Buttons;
