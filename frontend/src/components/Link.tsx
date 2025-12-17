import { Link } from "react-router-dom";

export default function Component({
  to,
  children,
}: {
  to: string;
  children?: React.ReactNode;
}) {
  return (
    <Link to={to} className="hover:underline">
      {children}
    </Link>
  );
}
