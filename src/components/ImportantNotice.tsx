type ImportantNoticeProps = {
    children: React.ReactNode,
    title: string
};
export const ImportantNotice = ({children, title}: ImportantNoticeProps) => {
  return (
    <div>
      <div className="bg-warning/10 bg-yellow-200 border border-warning/20 rounded-lg p-6 mb-8">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 text-warning mt-1">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2"> {title} </h3>
            <p className="text-muted-foreground">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
