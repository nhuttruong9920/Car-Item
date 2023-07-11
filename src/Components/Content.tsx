const Content = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="content-name flex gap-1 items-center text-sm font-normal">
    {icon}
    <p>{text}</p>
  </div>
);

export default Content;
