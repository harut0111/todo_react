import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
}));
  