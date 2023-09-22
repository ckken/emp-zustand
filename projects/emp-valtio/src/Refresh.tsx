export const Refresh = ({children}: any) => (
  <span className="refresh">
    {children}
    {Math.round(Math.random() * 1000)}
  </span>
)
