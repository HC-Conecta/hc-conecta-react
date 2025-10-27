interface ISubtitle {
    children: React.ReactNode;
}

const Subtitle = ({children}: ISubtitle) => {
    return ( <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           {children}
          </p> );
}
 
export default Subtitle;