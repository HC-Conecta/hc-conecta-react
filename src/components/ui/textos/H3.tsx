interface H3Props {
  children: React.ReactNode;
}
export const H3 = ({ children }: H3Props) => {
  return (
    <h3 className="text-xl font-semibold text-foreground mb-3">
      {children}
    </h3>
  );
};
