import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const H1 = styled(Typography)({
  fontSize: '3.375rem',
  fontWeight: '300',
  color: (props) => props.color,
});

export const H2 = styled(Typography)({
  fontSize: '2.25rem',
  fontWeight: '400',
  color: (props) => props.color,
});

export const H3 = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: '400',
  color: (props) => props.color,
});
