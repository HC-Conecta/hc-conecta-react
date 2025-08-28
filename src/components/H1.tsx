type H1Props = {
    children: React.ReactNode;
    gradient?: boolean;
}

const H1 = ({children, gradient}: H1Props) => {
    return (
        <h1 className={`text-4xl font-bold text-foreground mb-3 text-blue-700 ${gradient === true ? "bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text mb-0" : ''} }`}>
            {children}
        </h1>
    );
}
 
export default H1;