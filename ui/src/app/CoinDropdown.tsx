import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";

const pairs = [
  'BTCUSDT',
  'MANTAUSDT',
  'SOLUSDT'
];

export interface CoinDropdownProps {
  value: string;
  onChange(value: string): void;
}

export const CoinDropdown: FC<CoinDropdownProps> = ({value, onChange}) => {
  return <Select label='Pair' value={value} onChange={(e: SelectChangeEvent) => onChange(e.target.value)}>
    {pairs.map((pair) => 
      <MenuItem value={pair} key={pair}>{pair}</MenuItem>
    )}
  </Select>
}