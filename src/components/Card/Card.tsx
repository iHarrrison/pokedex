import * as React from "react";
import {Card as MuiCard} from "@mui/material";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export const Card = ({ children}: Props) => {
    return (
        <MuiCard>{children}</MuiCard>
    )
}