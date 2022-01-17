import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const quoteedit = (props) => {
    return(
        <Edit title='Edit Quote' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput multiline source='text' />
                <TextInput source='book' />
                <TextInput source='author' />
                
            </SimpleForm>
        </Edit>

    )
};

export default quoteedit;