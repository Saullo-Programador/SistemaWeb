import { TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Grid } from "@mui/material";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const FormFinancas = () => {
    const [category, setCategory] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const handleChangeCategory = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value);
    };

    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    return (
        <form>
            <Grid container spacing={2}>
                {/* Campo de Texto para o Nome com Ícone */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IoPerson />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                {/* Campo de Texto para o Valor com Ícone */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Valor"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaDollarSign />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                {/* Campo de Data */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Data"
                        type="date"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={date}
                        onChange={handleChangeDate}
                    />
                </Grid>

                {/* Select para Categoria */}
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="category-select-label">Categoria</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={category}
                            onChange={handleChangeCategory}
                            label="Categoria"
                        >
                            <MenuItem value="alimentacao">Alimentação</MenuItem>
                            <MenuItem value="transporte">Transporte</MenuItem>
                            <MenuItem value="moradia">Moradia</MenuItem>
                            <MenuItem value="saude">Saúde</MenuItem>
                            <MenuItem value="lazer">Lazer</MenuItem>
                            <MenuItem value="outros">Outros</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </form>
    )
}

export default FormFinancas;
