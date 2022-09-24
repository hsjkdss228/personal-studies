import styled from 'styled-components';

import Button from './Button';

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryText};
`;

export default PrimaryButton;

// const Button = styled.button`
//   font-size: 1em;
//   padding: .5em;
//   border: 0;
//   background-color: ${(props) => props.theme.colors.primary};
//   color: ${(props) => props.theme.colors.primaryText};
//   cursor: pointer;
// `;

// export default function PrimaryButton({ label, onClick }) {
//   return (
//     <Button type="button" onClick={onClick}>
//       {label}
//     </Button>
//   );
// }
