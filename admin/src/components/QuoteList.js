import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton
} from 'react-admin';

const quotelist = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='text' />
                <TextField source='author' />
                <TextField source='book' />
                <EditButton basePath='/quotes' />
                <DeleteButton basePath='/quotes' />
                
            </Datagrid>
        </List>

    )
};

export default quotelist;