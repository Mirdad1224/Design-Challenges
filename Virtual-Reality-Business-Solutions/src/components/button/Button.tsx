import "./button.css";

interface IBottonProps {
  children: React.ReactNode;
}

const Button = ({ children }: IBottonProps) => {
  return <button className="button">{children}</button>;
};
export default Button;
