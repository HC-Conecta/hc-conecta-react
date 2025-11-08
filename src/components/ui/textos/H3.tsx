interface H3Props {
  children: React.ReactNode;
  isStronger?: boolean
}
export const H3 = ({ children, isStronger }: H3Props) => {
  return (
    <h3 className={`text-xl font-semibold text-foreground mb-3 ${isStronger === true ? "font-bold" : "" } `}>
      {children}
    </h3>
  );
};
