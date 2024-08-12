import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputCadastroModal() {
  return (
    <Box
      component="form"
      sx={{
        height:'10px', 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >

      <TextField 
        id="outlined-basic" 
        label="Outlined" 
        variant="filled" 
        size='medium'
        sx={{
          '& > :not(style)': { m: 1, width: '32ch',},
        }}
        color='primary'
      />
    </Box>
  );
}
