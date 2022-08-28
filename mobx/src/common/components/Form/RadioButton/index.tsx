import { Container, Fill } from "./styles";

type props = {
  value?: boolean;
};

const RadioComponent = ({
  value,
  ...props
}: props & React.DOMAttributes<HTMLDivElement>) => {
  return <Container {...props}>{value ? <Fill></Fill> : undefined}</Container>;
};

export default RadioComponent;
