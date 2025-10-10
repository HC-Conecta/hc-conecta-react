interface IParagraph {
    children: React.ReactNode;
    isWhite?: boolean;
}

export const Paragraph = ({ children, isWhite }: IParagraph) => {
    return <p className ={`text-muted-foreground text-lg ${isWhite === true ? "text-white" : ""}`}>
        {children}
    </p>;
};
